//외부모듈
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const router = new Router();
const api = require('./src/api');
const ssr = require('./ssr');

app.use((ctx, next) => {
  if(ctx.path === '/') return ssr(ctx);
  return next();
});

//미들웨어설정
app.use(serve(path.resolve(__dirname, './views/build')));
app.use(serve(path.resolve(__dirname, './public')));
// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// 라우터 설정
app.use(router.routes()).use(router.allowedMethods());
app.use(ssr);

router.use('/api', api.routes()); // api 라우트 적용

app.listen(8002, () => {
  console.log('listening to port 8002');
});