import Sequelize from 'sequelize';
import { baseModel } from './consts'

const Op = Sequelize.Op;

export const wrapQuery = (queries) => {
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

export const wrapModel = (model) => {
  return {
    ...baseModel,
    ...model,
  }
}
