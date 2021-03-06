import { defineStore } from "pinia";
import {ref} from "vue";

export const useStore = defineStore("User", () => {
    const token = ref('');
    const authority = ref('');
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

    const nama = ref('');
    const nim = ref('');
    const role = ref('');
    const email = ref('');
    const password = ref('');
    const urlFoto = ref('');
    const idUser = ref('');

    const setAuthority = (val) => {
        authority.value = val;
    }

    const setIdUser = (val) => {
        idUser.value = val;
    }

    const setNama = (val) => {
        nama.value = val;
    }
    const setNim = (val) => {
        nim.value = val;
    }
    const setRole = (val) => {
        role.value = val;
    }
    const setEmail = (val) => {
        email.value = val;
    }
    const setPassword = (val) => {
        password.value = val;
    }
    const setUrlFoto = (val) => {
        urlFoto.value = val;
    }

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
        modalTambahAkun, setModalTambahAkun, modalHapusAkun, setModalHapusAkun, setModalEditAkun, modalEditAkun,
        nama, nim, role, email, password, urlFoto, setNama, setNim, setRole, setEmail, setPassword, setUrlFoto,
        idUser, setIdUser, setAuthority
    }
}, {
    persist: true
});