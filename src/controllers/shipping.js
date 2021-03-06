import { mapViewModel } from '../utils/helpers';
import { getShippingList, addShipping } from '../services/shipping';

export const getList = async (req, res, next) => {
  getShippingList().then(results => {
    res.send(mapViewModel(results));
    res.end();
  });
}

export const add = async (req, res, next) => {
  const newShipping = {
    shippingName: req.body.shippingName,
  }
  addShipping(newShipping).then(results => {
    console.log(results)
    res.send(mapViewModel(results));
    res.end();
  });
}