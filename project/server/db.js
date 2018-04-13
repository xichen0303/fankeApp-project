const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//创建文档定义
const User = new Schema({
  username     : String,
  psw      	 : Number,
  create_date  : { type: Date, default: Date.now }
});

//创建model对象, 与数据库中的文档(表)映射
const UserModel = mongoose.model('users', User);

module.exports = UserModel;
