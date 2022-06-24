import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import Dashboard from "../views/Dashboard.vue";
import EditBarangAslab from "../views/EditBarangAslab.vue";
import LihatBarang from "../views/LihatBarang.vue";
import Pinjamanku from "../views/Pinjamanku.vue";
import LaporanSanksi from "../views/LaporanSanksi.vue";

const routes = [
    {
        path: '/login',
        name: 'Login Page',
        component: LoginPage
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/lihat-barang',
        name: 'Lihat Barang',
        component: LihatBarang
    },
    {
        path: '/pinjamanku',
        name: 'Pinjamanku',
        component: Pinjamanku
    },
    {
        path: '/laporan-sanksi',
        name: 'Laporan Sanksi',
        component: LaporanSanksi
    },
    {
        path: '/edit-barang-aslab',
        name: 'Edit Barang Aslab',
        component: EditBarangAslab
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;