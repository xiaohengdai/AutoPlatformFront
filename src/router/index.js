import Vue from 'vue'
import Router from 'vue-router'
import Stitch from '../components/Stitch'
import Analysis from '../components/Analysis'
import Ocr from  '../components/Ocr'
import Diff from  '../components/Diff'
import Cluster from  '../components/Cluster'
import White_detect from  '../components/White_detect'
import Green_detect from  '../components/Green_detect'
import VideoCutter from '../components/VideoCutter'
import ImgCrop from '../components/ImgCrop'
import Wrong_word_detect from '../components/Wrong_word_detect'
import Container from '../components/Container'
import Text from '../components/Debug/Text'
import Wrong_word_auto_correct from '../components/Wrong_word_auto_correct'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      meta: {title: '笑哼的图像识别评测系统0'},
      children: [
        {path: 'ocr', name: 'ocr', component: Ocr, },
        {path: 'diff', name: 'diff', component: Diff, },
        {path: 'cluster', name: 'cluster', component: Cluster, },
        {path: 'Wrong_word_detect', name: 'Wrong_word_detect', component: Wrong_word_detect, },
        {path: 'Wrong_word_auto_correct', name: 'Wrong_word_auto_correct', component: Wrong_word_auto_correct, },
      ]
    },
    {
      path: '/debug/img',
      name: 'img',
      children: [
        {path: 'ocr', name: 'ocr', component: Ocr, },
        {path: 'diff', name: 'diff', component: Diff, },
        {path: 'cluster', name: 'cluster', component: Cluster, },
      ]
    },
    {
      path: '/debug/text',
      name: 'Text',
      component: Text,
      children: [
        {path: 'Wrong_word_detect', name: 'Wrong_word_detect', component: Wrong_word_detect, },
        {path: 'Wrong_word_auto_correct', name: 'Wrong_word_auto_correct', component: Wrong_word_auto_correct, },
      ]
    },

    {
      path: '/stitch',
      name: 'Stitch',
      component: Stitch,
      meta: {title: '笑哼的图像识别评测系统1'}
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component: Analysis,
      meta: {title: '结果分析'}
    },
    {
      path: '/diff',
      name: 'diff',
      component:Diff,
      meta: {title: '图像diff'}
    },
    {
      path: '/ocr',
      name: 'ocr',
      component:Ocr,
      meta: {title: '图像ocr'}
    },
    {
      path: '/cluster',
      name: 'cluster',
      component:Cluster,
      meta: {title: '图像聚类'}
    },{
      path: '/white_detect',
      name: 'white_detect',
      component:White_detect,
      meta: {title: '泛白屏检测'}
    },{
      path: '/Green_detect',
      name: 'Green_detect',
      component:Green_detect,
      meta: {title: '绿屏检测'}
    },{
    path:'/VideoCutter',
      name:'VideoCutter',
      component:VideoCutter,
      meta:{title:'视频裁剪'}
    },{
      path: '/ImgCrop',
      name: 'ImgCrop',
      component:ImgCrop,
      meta: {title: '图片裁剪'}
    },{
      path:'/Wrong_word_detect',
      name:'Wrong_word_detect',
      component:Wrong_word_detect,
      meta:{title:'错别字检测'}
    },
    {
      path:'/Wrong_word_auto_correct',
      name:'Wrong_word_auto_correct',
      component:Wrong_word_auto_correct,
      meta:{title:'错别字自动纠错'}
    }
  ]
})
// 完整路由代码
// export default new VueRouter({
//   routes: [
//     {
//       path: '/',
//       component: () => import('@/views/Main'),
//       children: [
//         {
//           path: '/',
//           name: 'home',
//           component: () => import('@/views/Home/Home'),
//         },
//       ]
//     }
//   ]
// })

