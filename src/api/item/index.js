const Router = require('koa-router');
const itemCtrl = require('./items.ctrl');

const items = new Router();

items.get('/list/:id', itemCtrl.itemList);

// items.get('/weapon', itemCtrl.weaponList);
// items.get('/weapon/:id', itemCtrl.weaponView);
// items.get('/plusup', itemCtrl.plusUpGrid);

// items.get('/armmor', itemCtrl.armmorList);
// items.get('/costume', itemCtrl.costumeList);
// items.get('/accessory', itemCtrl.accessoryList);

// items.get('/bestitem', itemCtrl.bestItem);

module.exports = items;
