import Sequelize from 'sequelize';
import { baseModel } from './consts'
import { address, item , order, shipping} from './orm';

const Op = Sequelize.Op;

const wrapQuery = (queries) => {
  return {
    where: {
      [Op.and]: [
        {
          isDeleted:0,
        },
        queries
      ]
    }
  };
}


export const getAddressList = () => {
  return address.findAll(wrapQuery());
};

export const getItemList = () => {
  return item.findAll(wrapQuery());
};

export const getItem = (id) => {
  return item.find(wrapQuery({id}));
};

export const getOrderList = () => {
  return order.findAll(wrapQuery());
};

export const getShippingList = () => {
  return shipping.findAll(wrapQuery());
};

export const addShipping = (target) => {
  return shipping.create({
    ...baseModel,
    ...target
  });
};

