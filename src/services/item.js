import { wrapQuery} from './base';
import { item } from '../db/orm';

export const getItemList = () => {
  return item.findAll(wrapQuery());
};

export const getItemListByItemNumbers = (itemNumbers) => {
  return item.findAll(wrapQuery({itemNumber:itemNumbers}));
};

export const getItem = (id) => {
  return item.find(wrapQuery({id}));
};
