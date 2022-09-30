import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
const items = [
  {"_id":"5b4d9804e789e04b6405a7f2","item_nm":"[토이] 인페르노 마스터피스 (공격)","cost":"0","item_dtl_dv":"토이","tier":10,"dmg":"6","dfs":"0","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"0","ctype":"5","stype1":" ","stype2":" ","clyn":"N","order":1,"img_src":"/resource/img/CB041.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4da6bf07c40f6d2878196f","item_nm":"듀얼 메카닉 벨트 (공방)","cost":"0","item_dtl_dv":"벨트","tier":10,"dmg":"1","dfs":"180","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"6","ctype":"6","stype1":" ","stype2":" ","clyn":"N","order":1,"img_src":"/resource/img/CB042.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ee7f08923e07174ef5639","item_nm":"지니의 최고급 유니크 귀걸이","cost":"0","item_dtl_dv":"귀걸이","tier":11,"dmg":"3","dfs":"0","cri":"12","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"7","ctype":"7","stype1":" ","stype2":" ","clyn":"N","order":1,"img_src":"/resource/img/CB043.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ee7f08923e07174ef563c","item_nm":"지니의 최고급 유니크 반지","cost":"0","item_dtl_dv":"반지","tier":11,"dmg":"0","dfs":"220","cri":"0","con":"75","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"10","ctype":"10","stype1":" ","stype2":" ","clyn":"N","order":1,"img_src":"/resource/img/CB046.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ef547cb6a894ff034633c","item_nm":"쥬얼릭 코어 Value1","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"1","dfs":"0","cri":"0","con":"100","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":1,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ee7f08923e07174ef563a","item_nm":"지니의 최고급 유니크 목걸이","cost":"0","item_dtl_dv":"목걸이","tier":11,"dmg":"3","dfs":"220","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"8","ctype":"8","stype1":" ","stype2":" ","clyn":"N","order":1,"img_src":"/resource/img/CB044.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ee7f08923e07174ef563b","item_nm":"지니의 최고급 유니크 팔찌","cost":"0","item_dtl_dv":"팔찌","tier":11,"dmg":"0","dfs":"0","cri":"12","con":"75","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"9","ctype":"9","stype1":" ","stype2":" ","clyn":"N","order":1,"img_src":"/resource/img/CB045.gif","illegal":"N","size":" ","__v":0},
{"_id":"5c6a17110fc48a5b7464bfe4","item_nm":"지니의 왼손 반지 (공방 1티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"1","dfs":"100","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":1,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5b4d9804e789e04b6405a7f3","item_nm":"[토이] 인페르노 마스터피스 (방어)","cost":"0","item_dtl_dv":"토이","tier":10,"dmg":"0","dfs":"300","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"0","ctype":"5","stype1":" ","stype2":" ","clyn":"N","order":2,"img_src":"/resource/img/CB041.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ee7f08923e07174ef563f","item_nm":"Unique Guest bracelet","cost":"0","item_dtl_dv":"팔찌","tier":11,"dmg":"3","dfs":"220","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"9","ctype":"9","stype1":" ","stype2":" ","clyn":"N","order":2,"img_src":"/resource/img/CB049.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ee7f08923e07174ef563e","item_nm":"Unique Guest necklace","cost":"0","item_dtl_dv":"목걸이","tier":11,"dmg":"3","dfs":"220","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"8","ctype":"8","stype1":" ","stype2":" ","clyn":"N","order":2,"img_src":"/resource/img/CB048.gif","illegal":"N","size":" ","__v":0},
{"_id":"5c6a17110fc48a5b7464bfe5","item_nm":"지니의 왼손 반지 (공방 3티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"3","dfs":"200","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":2,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5b4ee7f08923e07174ef5640","item_nm":"Unique Guest ring","cost":"0","item_dtl_dv":"반지","tier":11,"dmg":"3","dfs":"220","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"10","ctype":"10","stype1":" ","stype2":" ","clyn":"N","order":2,"img_src":"/resource/img/CB050.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ef547cb6a894ff034633d","item_nm":"쥬얼릭 코어 Value2","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"2","dfs":"0","cri":"0","con":"200","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":2,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ee7f08923e07174ef563d","item_nm":"Unique Guest earring","cost":"0","item_dtl_dv":"귀걸이","tier":11,"dmg":"3","dfs":"220","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"7","ctype":"7","stype1":" ","stype2":" ","clyn":"N","order":2,"img_src":"/resource/img/CB047.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4d9804e789e04b6405a7f4","item_nm":"[토이] 인페르노 마스터피스 (체력)","cost":"0","item_dtl_dv":"토이","tier":10,"dmg":"0","dfs":"0","cri":"0","con":"100","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"0","ctype":"5","stype1":" ","stype2":" ","clyn":"N","order":3,"img_src":"/resource/img/CB041.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ef547cb6a894ff034633e","item_nm":"쥬얼릭 코어 Value3","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"3","dfs":"0","cri":"0","con":"300","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":3,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5c6a17110fc48a5b7464bfe6","item_nm":"지니의 왼손 반지 (공방 6티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"6","dfs":"400","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":3,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5b4ef547cb6a894ff034633f","item_nm":"쥬얼릭 코어 Value4","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"4","dfs":"0","cri":"0","con":"400","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":4,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5c6a17110fc48a5b7464bfe7","item_nm":"지니의 왼손 반지 (공방 8티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"8","dfs":"900","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":4,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5c6a17110fc48a5b7464bfe8","item_nm":"지니의 왼손 반지 (공체 1티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"1","dfs":"0","cri":"0","con":"100","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":5,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5b4ef547cb6a894ff0346340","item_nm":"쥬얼릭 코어 Value5","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"5","dfs":"0","cri":"0","con":"500","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":5,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ef547cb6a894ff0346341","item_nm":"쥬얼릭 코어 Value1","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"1","dfs":"150","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":6,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5c6a17110fc48a5b7464bfe9","item_nm":"지니의 왼손 반지 (공체 3티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"3","dfs":"0","cri":"0","con":"200","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":6,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5c6a17110fc48a5b7464bfea","item_nm":"지니의 왼손 반지 (공체 6티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"6","dfs":"0","cri":"0","con":"400","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":7,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5b4ef547cb6a894ff0346342","item_nm":"쥬얼릭 코어 Value2","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"2","dfs":"200","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":7,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ef547cb6a894ff0346343","item_nm":"쥬얼릭 코어 Value3","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"3","dfs":"250","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":8,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5c6a17110fc48a5b7464bfeb","item_nm":"지니의 왼손 반지 (공체 8티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"8","dfs":"0","cri":"0","con":"900","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":8,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5c6a17110fc48a5b7464bfec","item_nm":"지니의 왼손 반지 (방체 1티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"0","dfs":"150","cri":"0","con":"100","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":9,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5b4ef547cb6a894ff0346344","item_nm":"쥬얼릭 코어 Value4","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"4","dfs":"300","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":9,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ef547cb6a894ff0346345","item_nm":"쥬얼릭 코어 Value5","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"5","dfs":"350","cri":"0","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":10,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5c6a17110fc48a5b7464bfed","item_nm":"지니의 왼손 반지 (방체 2티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"0","dfs":"250","cri":"0","con":"200","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":10,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5b4ef547cb6a894ff0346346","item_nm":"쥬얼릭 코어 Value1","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"1","dfs":"0","cri":"1","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":11,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5c6a17110fc48a5b7464bfee","item_nm":"지니의 왼손 반지 (방체 3티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"0","dfs":"400","cri":"0","con":"300","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":11,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5b4ef547cb6a894ff0346347","item_nm":"쥬얼릭 코어 Value2","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"2","dfs":"0","cri":"2","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":12,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5c6a17110fc48a5b7464bfef","item_nm":"지니의 왼손 반지 (방체 4티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"0","dfs":"500","cri":"0","con":"400","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":12,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5c6a17110fc48a5b7464bff0","item_nm":"지니의 왼손 반지 (방체 6티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"0","dfs":"700","cri":"0","con":"600","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":13,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5b4ef547cb6a894ff0346348","item_nm":"쥬얼릭 코어 Value3","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"3","dfs":"0","cri":"3","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":13,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5b4ef547cb6a894ff0346349","item_nm":"쥬얼릭 코어 Value4","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"4","dfs":"0","cri":"4","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":14,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0},
{"_id":"5c6a17110fc48a5b7464bff1","item_nm":"지니의 왼손 반지 (방체 8티어)","cost":"0","item_dtl_dv":"왼손반지","tier":11,"dmg":"0","dfs":"800","cri":"0","con":"900","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"11","ctype":"11","stype1":"","stype2":"","clyn":"N","order":14,"img_src":"/resource/img/CB051.gif","illegal":"N","size":"","__v":0},
{"_id":"5b4ef547cb6a894ff034634a","item_nm":"쥬얼릭 코어 Value5","cost":"0","item_dtl_dv":"환생악세","tier":11,"dmg":"5","dfs":"0","cri":"5","con":"0","accuracy_rate":"0","point_rate":"0","weight":"0","speed":"12","ctype":"12","stype1":" ","stype2":" ","clyn":"N","order":15,"img_src":"/resource/img/CB052.gif","illegal":"N","size":" ","__v":0}
];

const WeaponObject =({item_seq, item_nm, cost, item_dtl_dv, tier, dmg, dfs, cri, con, accuracy_rate, point_rate, weight, speed, ctype, stype1, stype2, clyn, item_order, img_src, illegal, size}) => {
  var aa = item_seq >9 && item_seq < 100 ? '00' : (item_seq >99 ? '0' : '000');
  var cl = clyn == 'Y' ? 'CL' : 'NC';
  return (
    <div style={{fontSize:"10px"}}>
    insert into eladm.eteritems (item_seq, item_nm, cost, item_dtl_dv, tier, dmg, dfs, cri, con, accuracy_rate, point_rate, weight, speed, ctype, stype1, stype2, clyn, item_order, img_src, illegal, size) values 
    ('{cl}AC{aa+item_seq+'00'}', '{item_nm}', '{cost}', '{item_dtl_dv}', '{tier}', '{dmg}', '{dfs}', '{cri}', '{con}', '{accuracy_rate}', '{point_rate}', '{weight}', '{speed}', '{ctype}', '{stype1}', '{stype2}', '{clyn}', 0, '{img_src}', '{illegal}', '{size}');
    </div>
  )
}

const weaponList = items.map((weapon, cnt) => {
  return (
    <><WeaponObject 
    item_nm={weapon.item_nm} 
    item_seq={cnt} 
    cost={weapon.cost}
    item_dtl_dv={weapon.item_dtl_dv}
    tier={weapon.tier}
    dmg={weapon.dmg}
    dfs={weapon.dfs}
    cri={weapon.cri}
    con={weapon.con}
    accuracy_rate={weapon.accuracy_rate}
    point_rate={weapon.point_rate}
    weight={weapon.weight}
    speed={weapon.speed}
    ctype={weapon.ctype}
    stype1={weapon.stype1}
    stype2={weapon.stype2}
    clyn={weapon.clyn}
    item_order={weapon.item_order}
    img_src={weapon.img_src}
    illegal={weapon.illegal}
    size={weapon.size}
    key={cnt} /><br/></>
  );
});

const SamplePage = () => {
  return (
    <PageTemplate>
      {weaponList}
    </PageTemplate>
  );
};

export default SamplePage;