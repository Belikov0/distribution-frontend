import { createRouter, createWebHistory } from 'vue-router'
import WorkerMain from '../views/WorkerMain.vue'
import AdminMain from '../views/AdminMain.vue'
import WorkerOperation from '../views/WorkerOperation.vue'
import AdminOperation from '../views/AdminOperation.vue'

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            { path: '/', component: WorkerMain},
            { path: '/worker', component: WorkerMain},
            { path: '/admin', component: AdminMain},
            { path: '/worker/operation', component: WorkerOperation},
            { path: '/admin/operation', component: AdminOperation}
        ]
    }
)

export default router