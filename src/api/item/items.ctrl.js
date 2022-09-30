'use strict';

const pool = require('../../maria/mariaPool');
const Sql = require('../../maria/Sql');  

/* 무기 목록 조회
  GET /api/item/list
*/
exports.itemList = async (ctx) => {
  const { id } = ctx.params;
  const sql = new Sql(id).createSql();
  let conn;

  try {
    // conn = await pool.getConnection();
    conn = pool;
    const rows = await conn.query(sql);
    ctx.body = rows.slice(0,5);
  } catch (e) {
    console.log(e);
  }
};