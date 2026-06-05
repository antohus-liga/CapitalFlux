import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/features/users/pages/LoginView.vue"
import RegisterView from "@/features/users/pages/RegisterView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: LoginView,
      meta: { title: "Sign in" }
    },
    {
      path: "/signup",
      component: RegisterView,
      meta: { title: "Sign up" }
    }
  ],
})

router.beforeEach((to) => {
  const { title } = to.meta;
  document.title = title
})

export default router
