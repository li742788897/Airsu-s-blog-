// import { Toast } from 'vant';
import { createRouter, createWebHashHistory } from 'vue-router';
// import LeaveOvertimeEntrance from '../views/leaveOvertime/apply/LeaveOvertimeEntranceCheck.vue';
//校验是否存在emppk和openid
function checkStorage(key) {
  const data = sessionStorage.getItem(key);
  if (data && data !== 'null' && data !== 'undefined') {
    return true;
  } else {
    return false;
  }
}
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue'),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   //meta 设置未check时校验是否存在openid empPk 有一个不存在就拦截
//   if (to.meta.check && (!checkStorage('openId') || !checkStorage('empPk'))) {
//     Toast.fail({
//       message: '未获取到登录信息',
//       duration: 6000,
//     });
//   } else {
//     next();
//   }
// });

export default router;
