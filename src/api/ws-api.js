import Stomp from '../plugins/stomp'

const nextTime = 5000;
let mock;
if (process.env.VUE_APP_ISMock) {
  mock = require('../mock/ws-api-mock')
}

/**
 * 建立websocket连接
 * @param {Function} onConnecting 开始连接时的回调
 * @param {Function} onConnected 连接成功回调
 * @param {Function} onError 连接异常或断开回调
 */
function connect (onConnecting, onConnected, onError) {
  onConnecting instanceof Function && onConnecting();
  let ws = new WebSocket(process.env.VUE_APP_WX_SERVER);
  let client = Stomp.over(ws);
  client.connect({}, function () {
    onConnected instanceof Function && onConnected();
  }, function (err) {
    console.warn("与服务器断开连接，" + nextTime + " 秒后重新连接", err);
    setTimeout(() => {
      console.log("尝试重连……");
      connect(onConnecting, onConnected, onError);
    }, nextTime);
    onError instanceof Function && onError();
  });
}

/**
 * 订阅新消息，就算连接还未建立也可以，程序会记录订阅情况，在连接建立后再次订阅
 * @param {Function} cb 回调
 */
function subNewMsg (cb) {
  let ws = new WebSocket(process.env.VUE_APP_WX_SERVER);
  let client = Stomp.over(ws);
  client.subscribe(process.env.VUE_APP_WX_SERVER, function (resp) {
    console.debug("ws收到消息: " + resp.body);
    cb instanceof Function && cb(resp.body);
  });
}

export default mock || {
  connect,
  subNewMsg
}
