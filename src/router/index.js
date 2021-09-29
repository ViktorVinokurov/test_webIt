import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/news'
import newsId from '../views/news/id'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Главная'
    }
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    meta: {
      title: 'Новости'
    }
  },
  {
    path: '/news/:id',
    name: 'newsId',
    component: newsId,
    meta: {
      title: 'Новости'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
