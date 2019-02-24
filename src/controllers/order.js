import map from 'lodash/map';
import { baseModel } from '../db/consts';
import { generateOrderNumber } from '../utils/helpers';
import { mapViewModel } from '../utils/helpers';
import { getAddress, getItemListByItemNumbers, getOrderList, addOrder, addOrderItem, getOrderItemByOrder } from '../db/service';

export const getList = async (req, res, next) => {
  getOrderList().then(results => {
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

    getAddress(addressId).then(currentAddress => {
      console.log(currentAddress)
      if(!currentAddress) {
        res.status(412).send('Invalid addressId');
        res.end();
        return;
      }

      order.userAccount = req.currentUser.account;
      order.contactName = currentAddress.contactName;
      order.contactPhone = currentAddress.contactPhone;
      order.address = currentAddress.address;

      const paramItemList = req.body.items;
      const itemNumbers = map(paramItemList, item => {
        return item.itemNumber;
      });

      getItemListByItemNumbers(itemNumbers).then(items => {
        if(!items || items.length === 0) {
          res.status(412).send('Invalid itemNumbers');
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

        addOrder(order).then(createdOrder => {
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

    addOrderItem(orderItem).then(result => {
        createOrderItemCallback(req, res, items, createdOrder, paramItemList, index + 1);
    });
  }
}

export const getOrderItem = async (req, res, next) => {
  getOrderItemByOrder(req.params.orderNumber).then(results => {
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