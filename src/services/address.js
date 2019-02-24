import { wrapQuery } from './base';
import { address } from '../db/orm';


export const getAddressList = () => {
  return address.findAll(wrapQuery());
};

export const getAddress = (id) => {
  return address.find(wrapQuery({id}));
};