import Vue from 'vue';
import Vuex from 'vuex';
import getters from "./getters";
import app from './modules/app';
import user from './modules/user';
import tagsView from './modules/tagsView'
import notifications from './modules/notifications'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    app,
    tagsView,
    notifications
  },
  getters
})

export default store
