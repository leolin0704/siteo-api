import map from 'lodash/map';
import { baseModel } from '../db/consts';
import { generateOrderNumber } from '../utils/helpers';
import { mapViewModel } from '../utils/helpers';
import { order, address,  item, orderItem } from '../db/orm';
export const getList = async (req, res, next) => {
  order.find({isDeleted:0}, (err, results) => {
    res.send(mapViewModel(results));
    res.end();
  });
}


export const submit = async (req, res, next) => {
  try {
    const addressId = parseInt(req.body.addressId);
    const order = {
      ...baseModel,
      orderNumber: generateOrderNumber(),
      message: req.body.message,
      orderStatus: 'paid',
    }

    address.find({id:addressId}, (err, [result]) => {
      if(!result) {
        res.status(412).send('Invalid addressId');
        res.end();
        return;
      }

      order.userAccount = req.currentUser.account;
      order.contactName = result.contactName;
      order.contactPhone = result.contactPhone;
      order.address = result.address;

      const paramItemList = req.body.items;
      const itemNumbers = map(paramItemList, item => {
        return item.itemNumber;
      });

      item.find({itemNumber: itemNumbers}, (err, items) => {
        if(!items || items.length === 0) {
          res.status(412).send('Invalid itemNumber');
          res.end();
          return;
        }

        let totalAmount = 0;
        for (let index = 0; index < items.length; index++) {
          const item = items[index];
          totalAmount += item.itemPrice * paramItemList[index].quantity;
        }
    
        order.totalAmount = totalAmount;
        order.submitDate = new Date();
        order.payDate = new Date();

        order.create(order, (err, createdOrder) => {
          createOrderItemCallback(req, res, items, createdOrder, paramItemList, 0);
        });
      });
    });
  } catch {
    res.sendStatus(500);
    res.end();
  }
}

const createOrderItemCallback = (req, res, items, createdOrder, paramItemList, index) => {
  if(items.length <= index) {
    res.send(createdOrder);
    res.end();
  } else {
    const item  = items[index];

    const orderItem = {
      ...baseModel,
      orderNumber: createdOrder.orderNumber,
      itemNumber: item.itemNumber,
      quantity:  paramItemList[index].quantity,
      itemPrice: item.itemPrice,
      itemName: item.itemName,
      itemPic: item.itemPic,
    }

    orderItem.create(orderItem, (err, result) => {
        createOrderItemCallback(req, res, items, createdOrder, paramItemList, index + 1);
    });
  }
}

export const getOrderItem = async (req, res, next) => {
  orderItem.find({isDeleted:0, orderNumber: req.params.orderNumber}, (err, results) => {
    res.send(mapViewModel(results));
    res.end();
  });
}

export const ship = async (req, res, next) => {
  order.one({orderNumber: req.body.orderNumber}, (err, order) => {
    order.shippingId = req.body.shippingId;

    shipping.one({id: req.body.shippingId}, (err, shipping) => {
      order.shippingName = shipping.shippingName;
      order.shippingNumber = req.body.shippingNumber;
      order.shippingDate = new Date();
      order.orderStatus = 'shipped';
      order.save();
  
      res.send(order);
      res.end();
    });
  });
}