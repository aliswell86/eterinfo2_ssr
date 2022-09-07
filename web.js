//외부모듈
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');

const mariadb = require('mariadb/callback');
//내부모듈
// const api = require('./src/api');
//모듈내 선언
const app = new Koa();
const router = new Router();

//DB연결
const conn = mariadb.createConnection({
  host: 'database-1.cxkp8isbbc1o.ap-northeast-2.rds.amazonaws.com', 
  user:'eterinfo_admin', password: 'etermin!1423'
});

//미들웨어설정
app.use(serve(path.resolve(__dirname, './views/build')));
app.use(serve(path.resolve(__dirname, './public')));
// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());
// app.use('/api', api);

//서버(웹,DB) 연결
conn.connect(err => {
  if (err) console.log("not connected due to error: " + err);
});

app.listen(8002, () => {
  console.log('listening to port 8002');
});