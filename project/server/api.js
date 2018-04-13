"use strict";
const UserModel = require('./db');
const express = require('express');
const router = express.Router();

router.get('/api/registered', function(req, res) {
  console.log("这是一个api/registered");
  res.send("这是一个api/registered");
});

router.get("/api/login", function( req, res) {
  console.log("这是一个login");
  res.send("这是一个login");
  // var username = req.body.username;
  // var psw = req.body.psw;
  // // 状态码
  // var result = {
  //   status : 1,
  //   message : "登录成功"
  // };

  // UserModel.find({username:username,psw:psw}, function(err, docs){
  //   if (!err && docs.length > 0) {
  //     console.log("登陆成功");
  //     res.send(result);
  //   }else {
  //     console.log("登陆失败,请检查你的用户名或者密码");
  //     result.status = 0;
  //     result.message = "登陆失败,请检查你的用户名或者密码";
  //     res.send(result);
  //   }
  // });
});

module.exports = router;
