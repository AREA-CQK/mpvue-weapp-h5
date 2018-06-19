import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../pages/chat/index.vue'
import ChatDetail from '../pages/chatDetail/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Chat,
  }, {
    path: '/chatDetail',
    name: 'chatDetail',
    component: ChatDetail,
    alias: '/pages/chatDetail/main'
  }]
})
