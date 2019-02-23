import db from './connect';
import Sequelize from 'sequelize';

const baseModelDefine = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isDeleted: Sequelize.INTEGER,
  modifyBy: Sequelize.STRING,
  modifyDate: Sequelize.DATE,
  createBy: Sequelize.STRING,
  createDate:Sequelize.DATE,
};

const defineOrm = (tableName, fields) => {
  return db.define(tableName, {
    ...baseModelDefine,
    ...fields,
  });
}

export const shipping = defineOrm("t_shipping", {
  shippingName: Sequelize.STRING,
});

export const item = defineOrm("t_item", {
  itemNumber: Sequelize.STRING,
  itemName: Sequelize.STRING,
  itemPic: Sequelize.STRING,
  itemPrice: Sequelize.DECIMAL,
}
);

export const address = defineOrm("t_address", {
  contactName: Sequelize.STRING,
  contactPhone: Sequelize.STRING,
  address: Sequelize.STRING,
  isDefault: Sequelize.INTEGER,
});

export const order = defineOrm("t_order", {
  orderNumber: Sequelize.STRING,
  orderStatus: Sequelize.STRING,
  totalAmount: Sequelize.DECIMAL,
  message: Sequelize.STRING,
  contactName: Sequelize.STRING,
  contactPhone: Sequelize.STRING,
  address: Sequelize.STRING,
  userAccount: Sequelize.STRING,
  shippingId: Sequelize.INTEGER,
  shippingName: Sequelize.STRING,
  shippingNumber: Sequelize.STRING,
  shippingDate: Sequelize.DATE,
  submitDate: Sequelize.DATE,
  payDate: Sequelize.DATE,
});

export const orderItem = defineOrm("t_order_item", {
  orderNumber: Sequelize.STRING,
  itemNumber: Sequelize.STRING,
  itemName: Sequelize.STRING,
  itemPic: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  itemPrice: Sequelize.DECIMAL,
});