import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRoutes = [
    {
        name: 'a',
        path: '/',
        component: () => import('@/App'),
        children: [
            {
                path: 'bar',
                component: () => import('@/App'),
                meta: { requiresAuth: true }
            }
        ]
    },
    {
        name: 'a',
        path: '/a',
        component: () => import('@/App'),
        children: [
            {
                path: 'bar',
                component: () => import('@/App'),
                meta: { requiresAuth: true }
            }
        ]
    }
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const createRouter = () => new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router