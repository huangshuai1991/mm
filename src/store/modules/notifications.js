import RabbitMQ from '../../api/ws-api';

const notification = {
  state: {
    messageList: [],
    total: 0,
    unreadNum: 0,
  },
  mutations: {
    SET_MESSAGE: (state, messageList) => {
      state.messageList = messageList;
    },
    SET_Total: (state, totalNum) => {
      state.total = totalNum;
    },
    SET_UNREADNUM: (state, unreadNum) => {
      state.unreadNum = unreadNum;
    }
  },
  actions: {

    // 获取全部消息
    GetMessage ({ commit }) {
      RabbitMQ.subNewMsg((response) => {
        const data = response.data;
        if (data.length > 0) {
          commit('SET_MESSAGE', data);
          commit('SET_Total', response.total)
          commit('SET_UNREADNUM', response.unreadNum)
        } else {
          commit('SET_MESSAGE', []);
          commit('SET_Total', 0)
          commit('SET_UNREADNUM', 0)
        }
      })
    }

  }
}

export default notification;