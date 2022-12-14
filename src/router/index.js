import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import Layout from '@/layout'
Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/login/index'),
  },
  {
    path: "/forget",
    name: "forget",
    component: () => import('@/views/login/forget'),
  },
  {
    path: "/register",
    name: "register",
    component: () => import('@/views/login/register'),
  },
  {
    path: '/center',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/center/index/index'),
        name: 'Index',
        meta: { title: '我的首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/assets',
    component: Layout,
    name: 'assets',
    meta: { title: '资产管理', icon: 'dashboard', affix: true },
    children: [
      {
        path: 'assetDetail',
        component: () => import('@/views/assets/assetDetail/index'),
        name: 'assetDetail',
        redirect: '/assets/assetDetail/index',
        meta: { title: '资产明细', icon: 'dashboard', affix: true },
        children: [
          {
            path: 'index',
            component: () => import('@/views/assets/assetDetail/asset/index'),
            name: 'asset',
            hidden: true,
          },
          {
            path: 'withdraw',
            component: () => import('@/views/assets/assetDetail/withdraw/index'),
            name: 'withdraw',
            hidden: true,
          },
          {
            path: 'cooperate',
            component: () => import('@/views/assets/assetDetail/cooperate/index'),
            name: 'cooperate',
            hidden: true,
          },
          {
            path: 'point',
            component: () => import('@/views/assets/assetDetail/point/index'),
            name: 'point',
            hidden: true,
          },
        ]
      },
      {
        path: 'flow',
        component: () => import('@/views/assets/flow/index'),
        name: 'flow',
        meta: { title: '充提记录', icon: 'dashboard', affix: true },
        redirect: '/assets/flow/withdraw',
        children: [
          {
            path: 'charge',
            component: () => import('@/views/assets/flow/charge/index'),
            name: 'charge',
            hidden: true,
          },
          {
            path: 'withdraw',
            component: () => import('@/views/assets/flow/withdraw/index'),
            name: 'withdraw',
            hidden: true,
          },
        ]
      },
      {
        path: 'bill',
        component: () => import('@/views/assets/bill/index'),
        name: 'bill',
        meta: { title: '賬單流水', icon: 'dashboard', affix: true }
      },
    ]
  },
];

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = [
  {
    path: '/system/user-auth',
    component: Layout,
    hidden: true,
    permissions: ['system:user:edit'],
    children: [
      {
        path: 'role/:userId(\\d+)',
        component: () => import('@/views/system/user/authRole'),
        name: 'AuthRole',
        meta: { title: '分配角色', activeMenu: '/system/user' }
      }
    ]
  },
  {
    path: '/system/role-auth',
    component: Layout,
    hidden: true,
    permissions: ['system:role:edit'],
    children: [
      {
        path: 'user/:roleId(\\d+)',
        component: () => import('@/views/system/role/authUser'),
        name: 'AuthUser',
        meta: { title: '分配用户', activeMenu: '/system/role' }
      }
    ]
  },
  // {
  //   path: '/system/dict-data',
  //   component: Layout,
  //   hidden: true,
  //   permissions: ['system:dict:list'],
  //   children: [
  //     {
  //       path: 'index/:dictId(\\d+)',
  //       component: () => import('@/views/system/dict/data'),
  //       name: 'Data',
  //       meta: { title: '字典数据', activeMenu: '/system/dict' }
  //     }
  //   ]
  // },
  // {
  //   path: '/monitor/job-log',
  //   component: Layout,
  //   hidden: true,
  //   permissions: ['monitor:job:list'],
  //   children: [
  //     {
  //       path: 'index/:jobId(\\d+)',
  //       component: () => import('@/views/monitor/job/log'),
  //       name: 'JobLog',
  //       meta: { title: '调度日志', activeMenu: '/monitor/job' }
  //     }
  //   ]
  // },
  // {
  //   path: '/tool/gen-edit',
  //   component: Layout,
  //   hidden: true,
  //   permissions: ['tool:gen:edit'],
  //   children: [
  //     {
  //       path: 'index/:tableId(\\d+)',
  //       component: () => import('@/views/tool/gen/editTable'),
  //       name: 'GenEdit',
  //       meta: { title: '修改生成配置', activeMenu: '/tool/gen' }
  //     }
  //   ]
  // }
]

// 防止连续点击多次路由报错
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: constantRoutes,
  scrollBehavior: () => ({ y: 0 }),
});

export default router;
