import { defineStore } from "pinia";
import {ref} from "vue";

export const useStore = defineStore("User", () => {
    const token = ref('');
    const authority = ref('aslab');
    const user = ref('Unknown');
    const pageTitle = ref('dashboard');
    const modalTambahAkun = ref(false);
    const modalHapusAkun = ref(false);
    const modalEditAkun = ref(false);

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

    const setModalTambahAkun = (show) => {
        modalTambahAkun.value = show;
    }

    const setModalHapusAkun = (show) => {
        modalHapusAkun.value = show;
    }

    const setModalEditAkun = (show) => {
        modalEditAkun.value = show;
    }

    return {
        token, user, forgetToken, setToken, authority, setUser, pageTitle, setPageTitle, modalTambahAkun, setModalTambahAkun, modalHapusAkun, setModalHapusAkun, setModalEditAkun, modalEditAkun
    }

}, {
    persist: true
});