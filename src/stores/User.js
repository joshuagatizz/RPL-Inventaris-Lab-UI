import { defineStore } from "pinia";
import {ref} from "vue";

export const useStore = defineStore("User", () => {
    const token = ref('');
    const authority = ref('aslab');
    const user = ref('Unknown');
    const userId = ref('Unknown');
    const pageTitle = ref('dashboard');
    const modalTambahAkun = ref(false);
    const modalHapusAkun = ref(false);
    const modalEditAkun = ref(false);
    const showModalPinjam = ref(false);
    const showModalEditBarang = ref(false);
    const showModalTambahBarang = ref(false);

    const idBarang = ref('');
    const deskripsiBarang = ref('');
    const urlBarang = ref('');
    const namaBarang = ref('');

    const setIdBarang = (val) => {
        idBarang.value = val;
    }

    const setDeskripsiBarang = (val) => {
        deskripsiBarang.value = val;
    }
    const setUrlBarang = (val) => {
        urlBarang.value = val;
    }
    const setNamaBarang = (val) => {
        namaBarang.value = val;
    }

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

    const setModalTambahAkun = (show) => {
        modalTambahAkun.value = show;
    }

    const setModalHapusAkun = (show) => {
        modalHapusAkun.value = show;
    }

    const setModalEditAkun = (show) => {
        modalEditAkun.value = show;
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
        token, user, forgetToken, setToken, authority, setUser, pageTitle, setPageTitle, showModalPinjam,
        setModalPinjam, showModalEditBarang, setModalEditBarang, showModalTambahBarang, setModalTambahBarang, userId, setUserId,
        idBarang, namaBarang, urlBarang, deskripsiBarang, setIdBarang, setNamaBarang, setUrlBarang, setDeskripsiBarang,
        modalTambahAkun, setModalTambahAkun, modalHapusAkun, setModalHapusAkun, setModalEditAkun, modalEditAkun
    }
}, {
    persist: true
});