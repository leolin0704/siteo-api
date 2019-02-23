import { mapViewModel } from '../utils/helpers';
import { getAddressList } from '../db/service';

export const getList = async (req, res, next) => {
  getAddressList().then((results) => {
    res.send(mapViewModel(results));
    res.end();
  });
}