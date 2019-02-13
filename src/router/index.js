import Vue from 'vue'
import Router from 'vue-router'

// 个性推荐
import Recommend from '@/music/recommend'
//歌曲详情
// import songDetails from 
import songList from '@/music/songList'
// 排行
import topList from '@/music/topList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/songList',
      name: 'songList',
      component: songList
    },
    {
      path: '/topList',
      name: 'topList',
      component: topList
    },
  ]
})
