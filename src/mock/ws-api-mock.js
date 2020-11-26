// websocket api 打桩
import _ from 'lodash'
const mockData = {
  "success": true,
  "total": 5,
  "unreadNum": 4,
  "data": [
    {
      "id": 1,
      "type": "warning",
      "title": "系统消息",
      "message": "您的系统准备爆炸，请您做好爆炸准备",
      "time": "2020-09-15 09:35:00",
      "isRead": false
    },
    {
      "id": 2,
      "type": "success",
      "title": "个人消息",
      "message": "支付宝到账一万亿元！！！",
      "time": "2020-09-18 15:23:45",
      "isRead": false
    },
    {
      "id": 3,
      "type": "error",
      "title": "流程消息",
      "message": "这个流程准备开始了，你做好准备了嘛？",
      "time": "2020-09-18 17:45:33",
      "isRead": false
    },
    {
      "id": 4,
      "type": "info",
      "title": "个人消息",
      "message": "请注意，这是一条假的个人消息！",
      "time": "2020-09-19 19:11:22",
      "isRead": true
    },
    {
      "id": 5,
      "type": "success",
      "title": "系统消息",
      "message": "阳光男孩向您发送了一个窗口抖动！",
      "time": "2020-09-21 10:56:44",
      "isRead": false
    }
  ]
}


function connect (onConnecting, onConnected, onError) {
  // 模拟正在连接
  console.log(process.env)

  onConnecting && onConnecting();
  setTimeout(() => {
    // 模拟连接成功
    onConnected && onConnected();
  }, 1000)
  onError && onError();
}

function subNewMsg (cb) {
  // 每 4 秒使用Mock出来的数据做为参数调用一次回调函数模拟接收到 WebSocket 推送的消息
  const data = _.cloneDeep(mockData.data);
  for (let i = 0; i < mockData.data.length; i++) {
    (function (i) {
      const tempData = _.take(data, i + 1);
      const totalNumber = tempData.length;
      const unreadNumber = _.filter(tempData, data => {
        return !data.isRead
      }).length;
      const result = {
        total: totalNumber,
        unreadNum: unreadNumber,
        data: tempData
      }
      setTimeout(() => {
        cb(result);
      }, (i + 1) * 4000);

    })(i)

  }
}

export {
  connect,
  subNewMsg
}
