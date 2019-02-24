import { wrapQuery, wrapModel } from './base';
import { shipping } from '../db/orm';

export const getShippingList = () => {
  return shipping.findAll(wrapQuery());
};

export const getShipping = (id) => {
  return shipping.find(wrapQuery({id}));
};

export const addShipping = (target) => {
  return shipping.create(wrapModel(target));
};
