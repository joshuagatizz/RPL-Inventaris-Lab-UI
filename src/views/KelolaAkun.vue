<script setup>
import Navbar from "./components/Navbar.vue";
import ModalTambahAkun from "./components/ModalTambahAkun.vue";
import ModalHapusAkun from "./components/ModalHapusAkun.vue";
import ModalEditAkun from "./components/ModalEditAkun.vue";
import {useStore} from "../stores/User.js";
import {onMounted, ref, watch} from "vue";
import axios from "axios";

const store = useStore();
const pageNow = ref(1);
const listData = ref([]);

function getData() {
    axios({
        method: "get",
        url: "http://localhost:8080/api/user",
        params: {
            token: store.token,
            page: pageNow.value
        }
    })
        .then((res) => {
            listData.value = res.data.data;
        })
        .catch((err) => {
            if (pageNow.value <= 0)
                pageNow.value++;
        });
}

function hapusAkun(data) {
    store.setIdUser(data.id);
    store.setModalHapusAkun(true);
}

function editAkun(data) {
    store.setIdUser(data.id);
    store.setNama(data.nama);
    store.setRole(data.tipeUser);
    store.setEmail(data.email);
    store.setPassword(data.password);
    store.setNim(data.nim);
    store.setUrlFoto(data.imgUrl);
    store.setModalEditAkun(true);
}

watch(() => pageNow.value, () => {
    getData();
});

onMounted(() => {
    getData();
    const store = useStore();
    store.setPageTitle("KelolaAkun");
});
</script>

<template>
    <ModalTambahAkun v-if="store.modalTambahAkun"></ModalTambahAkun>
    <ModalEditAkun v-if="store.modalEditAkun"></ModalEditAkun>
    <ModalHapusAkun v-if="store.modalHapusAkun"></ModalHapusAkun>
    <div class="flex" style="font-family: monospace">
        <Navbar></Navbar>

        <!-- Content Kelola Akun Start -->
        <div class="content">
            <div class="flex w-cardw">
                <h1 class="title-content">Kelola Akun</h1>
                <a
                    @click="store.modalTambahAkun = !store.modalTambahAkun"
                    href="#!"
                    class="ml-auto"
                    id="btn-tambahakun"
                >
                    <svg
                        width="59"
                        height="59"
                        viewBox="0 0 59 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="59" height="59" rx="20" fill="#05D834"/>
                        <path
                            d="M32.3684 17.3684C32.3684 16.7403 32.1189 16.1379 31.6747 15.6937C31.2306 15.2495 30.6281 15 30 15C29.3719 15 28.7694 15.2495 28.3253 15.6937C27.8811 16.1379 27.6316 16.7403 27.6316 17.3684V27.6316H17.3684C16.7403 27.6316 16.1379 27.8811 15.6937 28.3253C15.2495 28.7694 15 29.3719 15 30C15 30.6281 15.2495 31.2306 15.6937 31.6747C16.1379 32.1189 16.7403 32.3684 17.3684 32.3684H27.6316V42.6316C27.6316 43.2597 27.8811 43.8621 28.3253 44.3063C28.7694 44.7505 29.3719 45 30 45C30.6281 45 31.2306 44.7505 31.6747 44.3063C32.1189 43.8621 32.3684 43.2597 32.3684 42.6316V32.3684H42.6316C43.2597 32.3684 43.8621 32.1189 44.3063 31.6747C44.7505 31.2306 45 30.6281 45 30C45 29.3719 44.7505 28.7694 44.3063 28.3253C43.8621 27.8811 43.2597 27.6316 42.6316 27.6316H32.3684V17.3684Z"
                            fill="white"
                        />
                    </svg>
                </a>
            </div>

            <!-- Card Start -->



            <div class="block justify-center mt-5" id="card-kelolaakun">

                <div v-for="(data, index) in listData" :data="data">
                    <div class="card-edit-barang mt-5" href="#!">
                        <img :src=data.imgUrl class="item-image flex-none"/>
                        <p class="font-Default ml-5">
                            <span class="title-card"> {{ data.nama }} </span>
                            <br/>
                            <span class="description-card"> {{ data.nim }} </span>
                        </p>

                        <a @click="hapusAkun(data)" href="#" class="ml-auto">
                            <svg
                                width="59"
                                height="59"
                                viewBox="0 0 59 59"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="59" height="59" rx="20" fill="#FF4930"/>
                                <path
                                    d="M43.75 19.625H38.75V16.5C38.75 15.1211 37.6289 14 36.25 14H23.75C22.3711 14 21.25 15.1211 21.25 16.5V19.625H16.25C15.5586 19.625 15 20.1836 15 20.875V22.125C15 22.2969 15.1406 22.4375 15.3125 22.4375H17.6719L18.6367 42.8672C18.6992 44.1992 19.8008 45.25 21.1328 45.25H38.8672C40.2031 45.25 41.3008 44.2031 41.3633 42.8672L42.3281 22.4375H44.6875C44.8594 22.4375 45 22.2969 45 22.125V20.875C45 20.1836 44.4414 19.625 43.75 19.625ZM35.9375 19.625H24.0625V16.8125H35.9375V19.625Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <a @click="editAkun(data)" href="#!" class="ml-3">
                            <svg
                                width="59"
                                height="59"
                                viewBox="0 0 59 59"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="59" height="59" rx="20" fill="#66ACFF"/>
                                <path
                                    d="M35.5083 16.5907C36.5602 15.5631 37.9748 14.9915 39.4453 15.0001C40.9159 15.0087 42.3237 15.5966 43.3636 16.6365C44.4034 17.6763 44.9913 19.0841 44.9999 20.5547C45.0085 22.0252 44.4369 23.4398 43.4093 24.4917L42.1529 25.7481L34.2519 17.8471L35.5102 16.5907H35.5083ZM32.9242 19.1768L17.9016 34.1993C17.2869 34.8147 16.8602 35.5925 16.6715 36.4417L15.0226 43.86C14.9881 44.0143 14.9932 44.1749 15.0373 44.3268C15.0814 44.4786 15.1632 44.6169 15.275 44.7287C15.3869 44.8406 15.5251 44.9223 15.677 44.9665C15.8289 45.0106 15.9894 45.0156 16.1438 44.9812L23.517 43.3416C24.3949 43.1462 25.1988 42.7045 25.8345 42.0683L40.8251 27.0777L32.9242 19.1768Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
            <!-- Card End -->

            <div class="flex w-cardw mt-16">
                <a @click="pageNow--" href="#!" class="ml-auto">
                    <svg width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M34.2251 1.07383C34.4052 0.944784 34.6171 0.868114 34.8376 0.852219C35.0581 0.836324 35.2787 0.881817 35.4752 0.983715C35.6717 1.08561 35.8365 1.23998 35.9517 1.42991C36.0668 1.61984 36.1278 1.838 36.1279 2.0605V26.3029C36.1278 26.5254 36.0668 26.7436 35.9517 26.9335C35.8365 27.1234 35.6717 27.2778 35.4752 27.3797C35.2787 27.4816 35.0581 27.5271 34.8376 27.5112C34.6171 27.4953 34.4052 27.4186 34.2251 27.2896L19.2677 16.5381V26.3029C19.2676 26.5254 19.2066 26.7436 19.0915 26.9335C18.9763 27.1234 18.8115 27.2778 18.615 27.3797C18.4185 27.4816 18.1979 27.5271 17.9774 27.5112C17.7569 27.4953 17.545 27.4186 17.3649 27.2896L0.504707 15.1684C0.348591 15.0562 0.22134 14.9082 0.133545 14.7366C0.0457458 14.565 -6.10352e-05 14.3747 -6.10352e-05 14.1817C-6.10352e-05 13.9887 0.0457458 13.7984 0.133545 13.6268C0.22134 13.4552 0.348591 13.3072 0.504707 13.195L17.3649 1.07383C17.545 0.944784 17.7569 0.868114 17.9774 0.852219C18.1979 0.836324 18.4185 0.881817 18.615 0.983715C18.8115 1.08561 18.9763 1.23998 19.0915 1.42991C19.2066 1.61984 19.2676 1.838 19.2677 2.0605V11.8253L34.2251 1.07383Z"
                            fill="#747474"/>
                    </svg>
                </a>
                <p class="ml-5 title-card">{{ pageNow }}</p>
                <a @click="pageNow++" href="#!" class="ml-5">
                    <svg width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.77291 1.07383C2.59284 0.944784 2.38095 0.868114 2.16045 0.852219C1.93996 0.836324 1.71938 0.881817 1.52287 0.983715C1.32636 1.08561 1.1615 1.23998 1.04637 1.42991C0.93123 1.61984 0.870253 1.838 0.870117 2.0605V26.3029C0.870253 26.5254 0.93123 26.7436 1.04637 26.9335C1.1615 27.1234 1.32636 27.2778 1.52287 27.3797C1.71938 27.4816 1.93996 27.5271 2.16045 27.5112C2.38095 27.4953 2.59284 27.4186 2.77291 27.2896L17.7303 16.5381V26.3029C17.7305 26.5254 17.7914 26.7436 17.9066 26.9335C18.0217 27.1234 18.1866 27.2778 18.3831 27.3797C18.5796 27.4816 18.8002 27.5271 19.0207 27.5112C19.2412 27.4953 19.4531 27.4186 19.6331 27.2896L36.4933 15.1684C36.6495 15.0562 36.7767 14.9082 36.8645 14.7366C36.9523 14.565 36.9981 14.3747 36.9981 14.1817C36.9981 13.9887 36.9523 13.7984 36.8645 13.6268C36.7767 13.4552 36.6495 13.3072 36.4933 13.195L19.6331 1.07383C19.4531 0.944784 19.2412 0.868114 19.0207 0.852219C18.8002 0.836324 18.5796 0.881817 18.3831 0.983715C18.1866 1.08561 18.0217 1.23998 17.9066 1.42991C17.7914 1.61984 17.7305 1.838 17.7303 2.0605V11.8253L2.77291 1.07383Z"
                            fill="black"/>
                    </svg>
                </a>
            </div>
        </div>
        <!-- Content Kelola Akun End -->
    </div>
</template>
