const express = require('express');
const conn = require('../dao/conn.js');

const router = express.Router();

let sqlSearch = `select * from user`;
conn.query(sqlSearch, (err, results) => {
    if (err) throw err;
    // res.json(results);
    console.log(results);
})
let insertSql = `insert into user (user_name,user_password,user_phone) 
    values ('chen123','123','8888888888')`;
conn.query(insertSql, (err, results) => { //results是结果数组
  if (err) throw err;
  console.log(results)
})
