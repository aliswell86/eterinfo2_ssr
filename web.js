//외부모듈
const express = require('express');
const mariadb = require('mariadb/callback');
//내부모듈
// const api = require('./src/api');
//모듈내 선언
const app = express();
const router = express.Router();
//DB연결
const conn = mariadb.createConnection({
  host: 'database-1.cxkp8isbbc1o.ap-northeast-2.rds.amazonaws.com', 
  user:'eterinfo_admin', password: 'etermin!1423'
});

//미들웨어설정
app.use(express.static("public"));
// app.use('/api', api);

//서버(웹,DB) 연결
conn.connect(err => {
  if (err) console.log("not connected due to error: " + err);
});

app.listen(8002, () => {
  console.log('listening to port 8002');
});