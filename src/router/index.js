import { createRouter, createWebHistory } from "vue-router";
import WorkerOperation from "../views/WorkerOperation.vue";
import AdminOperation from "../views/AdminOperation.vue";
import Main from "../views/Main.vue"
import { useWorkerStore  } from "../store/workerStore";
import { useAdminStore } from "../store/adminStore";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Main },
    { path: "/worker", component: WorkerOperation },
    { path: "/admin", component: AdminOperation },
  ],
});

// 守卫路由
router.beforeEach((to, from, next) => {
    // 主页可以直接进
    if (to.path == '/' || to.path == ''){
      console.log('main page')
      next()
      return;
    }


    if (to.path == '/worker'){
        const workerStore = useWorkerStore()
        if (workerStore.getToken == null){
          console.log("no token, redirect")
          next('/')
        }else{
          next()
        }
    }

    if (to.path == "/admin"){
      const adminStore = useAdminStore()
      if (adminStore.getToken == null){
        console.log("no token, redirect")
        next('/')
      }else{
        next()
      }
    }

})


export default router;
