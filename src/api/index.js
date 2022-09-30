const Router = require('koa-router');
const item = require('./item');
const api = new Router();

api.use('/item', item.routes());
// api.use('/box', boxs.routes());
// api.use('/common', common.routes());
// api.use('/auth', auth.routes());
// api.use('/wowitem', wowitem.routes());

module.exports = api;
