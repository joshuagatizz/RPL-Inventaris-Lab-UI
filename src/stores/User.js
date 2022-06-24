import { defineStore } from "pinia";
import {ref} from "vue";

export const useStore = defineStore("User", () => {
    const token = ref('');
    const authority = ref('aslab');
    const user = ref('Unknown');
    const userId = ref('Unknown');
    const pageTitle = ref('dashboard');
    const showModalPinjam = ref(false);
    const showModalEditBarang = ref(false);
    const showModalTambahBarang = ref(false);

    const forgetToken = () => {
        token.value = '';
    }

    const setToken = (newToken) => {
        token.value = newToken;
    }

    const setUser = (val) => {
        user.value = val;
    }

    const setPageTitle = (title) => {
        pageTitle.value = title;
    }
    
    const setModalPinjam = (val) => {
        showModalPinjam.value = val;
    }

    const setModalEditBarang = (val) => {
        showModalEditBarang.value = val;
    }

    const setModalTambahBarang = (val) => {
        showModalTambahBarang.value = val;
    }
    
    const setUserId = (id) => {
        userId.value = id;
    }

    return {
        token, user, forgetToken, setToken, authority, setUser, pageTitle, setPageTitle, showModalPinjam, setModalPinjam, showModalEditBarang, setModalEditBarang, showModalTambahBarang, setModalTambahBarang, userId, setUserId
    }
}, {
    persist: true
});