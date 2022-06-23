import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import {useStore} from "../stores/User";

const routes = [
    {
        path: '/login',
        name: 'Home',
        component: LoginPage
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to) => {
    const store = useStore();
})

export default router;