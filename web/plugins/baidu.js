/*
 * @Author: your name
 * @Date: 2020-07-07 09:53:43
 * @LastEditTime: 2020-07-07 09:53:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\plugins\baidu.js
 */ 
/** 百度统计代码嵌入 */
export default ({app: {router}, store}) => {
  /* 每次路由变更时进行pv统计 */
  router.afterEach((to, from) => {
/* 告诉增加一个PV */
try {
  window._hmt = window._hmt || []
  window._hmt.push(['_trackPageview', to.fullPath])
} catch (e) {}
  })
}
