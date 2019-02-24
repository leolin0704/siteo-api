import map from 'lodash/map';
import { generateOrderNumber } from '../utils/helpers';
import { mapViewModel } from '../utils/helpers';
import { getItemListByItemNumbers } from '../services/item';
import { getOrderList, addOrder, shipOrder } from '../services/order';
import { getAddress } from '../services/address';
import { getOrderItemByOrder } from '../services/orderItem';

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

      console.log(paramItemList,'------------')


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

        console.log(totalAmount,'------------')
    
        order.totalAmount = totalAmount;
        order.submitDate = new Date();
        order.payDate = new Date();

        const orderItems = map(items, (item, index) => {
          return {
            itemNumber: item.itemNumber,
            quantity:  paramItemList[index].quantity,
            itemPrice: item.itemPrice,
            itemName: item.itemName,
            itemPic: item.itemPic,
          }
        })


        addOrder(order, orderItems).then(createdOrder => {
          res.send(createdOrder);
          res.end();
        });
      });
    });
  } catch {
    res.sendStatus(500);
    res.end();
  }
}

export const getOrderItem = async (req, res, next) => {
  getOrderItemByOrder(req.params.orderNumber).then(results => {
    res.send(mapViewModel(results));
    res.end();
  });
}

export const ship = async (req, res, next) => {
  const { orderNumber, shippingId, shippingNumber } = req.body;
  shipOrder(orderNumber, shippingId,  shippingNumber).then(shippedOrder => {
    res.send(shippedOrder);
    res.end();
  });
}