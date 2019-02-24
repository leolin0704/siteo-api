import map from 'lodash/map';
import { wrapQuery, wrapModel} from './base';
import { order } from '../db/orm';
import { addOrderItem } from './orderItem';
import { getShipping } from './shipping';

export const getOrderList = () => {
  return order.findAll(wrapQuery());
};

export const addOrder = (target, items) => {
  return order.create(wrapModel(target)).then(createdOrder => {

    const addOrderResults = map(items, item => {
      item.itemNumber = createdOrder.itemNumber;
      return addOrderItem(item);
    });

    return Promise.all(addOrderResults).then(() => {
      return createdOrder;
    });
  });
};

export const shipOrder = (orderNumber, shippingId, shippingNumber) => {
  const findOrderResult = order.find(wrapQuery({orderNumber}));
  const findShippingResult = getShipping(shippingId);

  return Promise.all([findOrderResult, findShippingResult]).then(([currentOrder, currentShipping]) => {
    currentOrder.shippingId = shippingId;
    currentOrder.shippingName = currentShipping.shippingName;
    currentOrder.shippingNumber = shippingNumber;
    currentOrder.shippingDate = new Date();
    currentOrder.orderStatus = 'shipped';
    currentOrder.save();

    return currentOrder;
  });
}

