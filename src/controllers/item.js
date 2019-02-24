import { mapViewModel } from '../utils/helpers';
import { getItem, getItemList } from '../services/item';
export const getList = async (req, res, next) => {
  getItemList().then((results) => {
    res.send(mapViewModel(results));
    res.end();
  });
}

export const get = async (req, res, next) => {
  getItem(req.params.id).then((results) => {
    res.send(mapViewModel(results)[0]);
    res.end();
  });
}