'use strict';

class Sql {
  constructor(id) {
    this.id = id;
  }

  createSql() {
    let sql = 
      "SELECT ITEM_SEQ, ITEM_NM, COST, ITEM_DTL_DV, TIER, DMG, DFS, CRI, CON, "+
      "ACCURACY_RATE, POINT_RATE, WEIGHT, SPEED, CTYPE, STYPE1, STYPE2, CLYN, "+
      "ITEM_ORDER, IMG_SRC, ILLEGAL, SIZE "+
      "FROM eladm.eteritems WHERE 1=1 ";

    if(this.id === '01') { //원거리무기
      sql += "AND CTYPE = '1' ";
      sql += "AND STYPE1 = '1' ";
    }else if(this.id === '02') { //근거리무기
      sql += "AND CTYPE = '1' ";
      sql += "AND STYPE1 = '2' ";
    }else if(this.id === '03') { //방패
      sql += "AND CTYPE = '2' ";
      sql += "AND STYPE1 = '7' ";
    }else if(this.id === '04') { //방어구
      sql += "AND CTYPE = '2' ";
      sql += "AND STYPE1 IN('1','2','3','4','5','6') ";
    }else if(this.id === '05') { //악세
      sql += "AND CTYPE IN('6','7','8','9','10','11','12') ";
    }else if(this.id === '06') { //코튬날개 등
      sql += "AND CTYPE IN('3','4','5') ";
    }

    sql += "ORDER BY ITEM_SEQ ";
    sql += ";"; 

    return sql;
  }
}

module.exports = Sql;

