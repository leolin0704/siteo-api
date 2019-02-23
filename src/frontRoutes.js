import Express from 'express';
import { getList as getItemList } from './controllers/item';
import { getList as getAddressList } from './controllers/address';
import { submit } from './controllers/order';
const router = Express.Router();

router.get('/item', getItemList);
router.get('/address', getAddressList);
router.post('/order', submit);

export default router;