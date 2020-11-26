const Mock = require("mockjs");//mockjs 导入依赖模块

// 模拟用户登录
Mock.mock('/mock/user/login', 'post',
  {
    "success": true,
    "token": "@id()"
  });
// 模拟用户登出
Mock.mock('/mock/user/logout', 'post',
  {
    "success": true,
    "token": "@id()"
  });
// 模拟用户信息列表
Mock.mock('/mock/usercenter/user/info', 'post',
  {
    "success": true,
    "code": 1402,
    "data": {
      "userid": "@id()",
      "name": "@cname()",
      "roles": [
        "user",
        "editor"
      ],
      "avatar": "@image('200x200','red','#fff','avatar')"
    }
  })
