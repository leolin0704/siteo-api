import { wrapQuery, wrapModel } from './base';
import { orderItem } from '../db/orm';


export const addOrderItem = (target) => {
  return orderItem.create(wrapModel(target));
};

export const getOrderItemByOrder = (orderNumber) => {
  return orderItem.find(wrapQuery({orderNumber}));
};

