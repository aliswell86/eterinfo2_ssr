const mariadb = require('mariadb');

const pw = "eter!1423";

//DB연결
const pool = mariadb.createPool({
  host: 'database-1.cxkp8isbbc1o.ap-northeast-2.rds.amazonaws.com', 
  user:'eterinfo_admin', password: pw,
  connectionLimit: 5
});

module.exports = pool;