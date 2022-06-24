<script setup>
import axios from "axios";
import {useStore} from "../stores/User.js";
import {onMounted, ref, watch} from "vue";
import router from "../router";
import Navbar from "./components/Navbar.vue";

const store = useStore();

const pageNow = ref(1);
const listData = ref([]);

function getData() {
    axios({
        method: "get",
        url: "http://localhost:8080/api/barang/" + store.userId + "/pinjam",
        params: {
            token: store.token,
            page: pageNow.value
        }
    })
        .then((res) => {
            listData.value = res.data.data;
            if (listData.value.length === 0) {
                pageNow.value = 1;
            }
        })
        .catch((err) => {
        });
}

watch(() => pageNow.value, () => {
    getData();
});

onMounted(() => {
    const store = useStore();
    store.setPageTitle('Pinjamanku');
    getData();
})

</script>

<template>
    <!-- Sidenavbar Start -->
    <div class="flex" style="font-family:monospace">
        <Navbar></Navbar>

        <!-- Content Home Start -->
        <div class="content">
            <h1 class="title-content"> Pinjamanku </h1>

            <div v-for="(data, index) in listData" :data="data">
                <div class="card-edit-barang mt-5" href="#!">
                    <img class="item-image flex-none"
                         src="https://cdn.discordapp.com/attachments/976696861207433219/984030204844453888/Rectangle_3.jpg">
                    <p class="font-Default ml-5">
                        <span class="title-card">{{ data.nama }}</span>
                        <br>
                        <span class="description-card">{{ data.tanggalPinjam }}</span>
                        <span class="description-card"> - </span>
                        <span class="description-card">{{ data.deadlineBalik }}</span>
                    </p>

                    <div class="flex ml-auto">
                        <div class="text-left">
                            <p class="description-card">
                                    <span v-bind:class="{'font-semibold' : data.sudahBalik}">
                                      {{ data.sudahBalik ? "Dikembalikan" : "Belum dikembalikan" }}
                                    </span>
                                <span v-if="data.sudahBalik">
                                        <br>
                                        {{ data.tanggalBalik }}
                                    </span>
                            </p>
                        </div>
                    </div>

                    <svg v-if="data.sudahBalik" class="ml-4" width="27" height="27" viewBox="0 0 27 27" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.75 0C4.95979 0 3.2429 0.711159 1.97703 1.97703C0.711159 3.2429 0 4.95979 0 6.75V20.25C0 22.0402 0.711159 23.7571 1.97703 25.023C3.2429 26.2888 4.95979 27 6.75 27H20.25C22.0402 27 23.7571 26.2888 25.023 25.023C26.2888 23.7571 27 22.0402 27 20.25V6.75C27 4.95979 26.2888 3.2429 25.023 1.97703C23.7571 0.711159 22.0402 0 20.25 0H6.75ZM18.5355 11.7234C18.6568 11.594 18.7513 11.4419 18.8139 11.276C18.8764 11.11 18.9056 10.9333 18.8998 10.7561C18.894 10.5788 18.8534 10.4044 18.7802 10.2429C18.7071 10.0813 18.6028 9.93576 18.4734 9.8145C18.344 9.69324 18.1919 9.59865 18.026 9.53615C17.86 9.47364 17.6833 9.44444 17.5061 9.4502C17.3288 9.45597 17.1544 9.49659 16.9929 9.56976C16.8313 9.64292 16.6858 9.74718 16.5645 9.8766L12.4025 14.3181L10.3464 12.4916C10.077 12.2676 9.73114 12.1572 9.38182 12.1835C9.03251 12.2099 8.70712 12.371 8.47439 12.6328C8.24165 12.8946 8.11981 13.2366 8.13459 13.5866C8.14937 13.9366 8.29962 14.2672 8.5536 14.5084L11.5911 17.2084C11.8539 17.4419 12.1975 17.5636 12.5486 17.5478C12.8998 17.5319 13.231 17.3796 13.4717 17.1234L18.5342 11.7234H18.5355Z"
                              fill="#05D834"/>
                    </svg>

                </div>
            </div>

        </div>
        <!-- Card End -->

        <!-- Delete Modal Start -->
        <div id="delete-modal" tabindex="-1"
             class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
             aria-hidden="true">
            <div class="relative w-full max-w-md h-full md:h-auto">
                <div class="relative bg-white rounded-[20px] shadow">
                    <div class="text-center">

                        <div class="pt-11">
                            <svg class="mx-auto mb-10" width="125" height="125" viewBox="0 0 125 125" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                                    stroke="#F43F3F" stroke-width="7.8125" stroke-miterlimit="10"/>
                                <path
                                    d="M61.0986 40.5396L62.5 70.3126L63.8989 40.5396C63.9075 40.3493 63.8773 40.1592 63.81 39.9809C63.7426 39.8027 63.6397 39.6401 63.5074 39.503C63.3751 39.3659 63.2162 39.2572 63.0405 39.1836C62.8647 39.1099 62.6759 39.0729 62.4853 39.0748V39.0748C62.2971 39.0765 62.1111 39.1162 61.9385 39.1915C61.7659 39.2667 61.6103 39.3759 61.4809 39.5127C61.3514 39.6494 61.2509 39.8108 61.1852 39.9872C61.1195 40.1637 61.0901 40.3515 61.0986 40.5396V40.5396Z"
                                    stroke="#F43F3F" stroke-width="7.8125" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path
                                    d="M62.5 89.8218C61.5343 89.8218 60.5902 89.5354 59.7873 88.9989C58.9843 88.4624 58.3584 87.6998 57.9889 86.8075C57.6193 85.9153 57.5226 84.9335 57.711 83.9864C57.8994 83.0392 58.3645 82.1692 59.0473 81.4863C59.7302 80.8034 60.6002 80.3384 61.5474 80.15C62.4946 79.9616 63.4764 80.0583 64.3686 80.4278C65.2608 80.7974 66.0234 81.4232 66.5599 82.2262C67.0964 83.0292 67.3828 83.9732 67.3828 84.939C67.3828 86.234 66.8684 87.4759 65.9527 88.3916C65.037 89.3073 63.795 89.8218 62.5 89.8218Z"
                                    fill="#F43F3F"/>
                            </svg>
                        </div>

                        <p class="popup-title">Apakah kamu yakin?</p>
                        <p class="description-card mb-9">Data yang sudah terhapus tidak<br>dapat dikembalikan.</p>

                        <button data-modal-toggle="delete-modal" type="button"
                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-[15px] border border-gray-200 text-sm font-medium px-14 py-3.5 hover:text-gray-900 focus:z-10 mb-8 mr-2">
                            Batal
                        </button>
                        <button data-modal-toggle="delete-modal" type="button"
                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-[15px] text-sm inline-flex items-center px-14 py-3.5 text-center mb-8">
                            Hapus
                        </button>

                    </div>
                </div>
            </div>
        </div>
        <!-- Delete Modal End -->

        <!-- Edit Modal Start -->
        <div id="edit-modal" tabindex="-1" aria-hidden="true"
             class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-[20px] shadow">
                    <div class="py-6 px-6 lg:px-8">
                        <p class="popup-title mb-5 text-center">Edit barang</p>
                        <img class="edit-popup-image mx-auto mb-5"
                             src="https://cdn.discordapp.com/attachments/976696861207433219/984030204844453888/Rectangle_3.jpg">
                        <form class="space-y-6" action="#">
                            <div>
                                <label for="namaBarang" class="block mb-2 text-sm font-medium text-gray-900">Nama
                                    barang :</label>
                                <input type="text" name="namaBarang" id="namaBarang"
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Nama baru" required>
                            </div>
                            <div>
                                <label for="descBarang" class="block mb-2 text-sm font-medium text-gray-900">Deskripsi
                                    :</label>
                                <textarea id="descBarang" rows="4"
                                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                                          placeholder="Deskripsi baru..." required></textarea>
                            </div>

                            <div class="text-right">
                                <button data-modal-toggle="edit-modal" type="button"
                                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-[15px] border border-gray-200 text-sm font-medium px-14 py-3.5 hover:text-gray-900 focus:z-10 mr-2">
                                    Batal
                                </button>
                                <button data-modal-toggle="edit-modal" type="submit"
                                        class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[15px] text-sm inline-flex items-center px-14 py-3.5 text-center">
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Edit Modal End -->

        <!-- Add Modal Start -->
        <div id="add-modal" tabindex="-1" aria-hidden="true"
             class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-[20px] shadow">
                    <div class="py-6 px-6 lg:px-8">
                        <p class="popup-title mb-5 text-center">Tambah barang</p>
                        <img class="edit-popup-image mx-auto mb-5"
                             src="https://cdn.discordapp.com/attachments/976696861207433219/984030204844453888/Rectangle_3.jpg">
                        <form class="space-y-6" action="#">
                            <div>
                                <label for="namaBarang" class="block mb-2 text-sm font-medium text-gray-900">Nama
                                    barang :</label>
                                <input type="text" name="addNamaBarang" id="addNamaBarang"
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Nama barang" required>
                            </div>
                            <div>
                                <label for="addDescBarang" class="block mb-2 text-sm font-medium text-gray-900">Deskripsi
                                    :</label>
                                <textarea id="addDescBarang" rows="4"
                                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                                          placeholder="Deskripsi..." required></textarea>
                            </div>

                            <div class="text-right">
                                <button data-modal-toggle="add-modal" type="button"
                                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-[15px] border border-gray-200 text-sm font-medium px-14 py-3.5 hover:text-gray-900 focus:z-10 mr-2">
                                    Batal
                                </button>
                                <button data-modal-toggle="add-modal" type="submit"
                                        class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[15px] text-sm inline-flex items-center px-14 py-3.5 text-center">
                                    Tambah
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add Modal End -->

        <!-- Modal Success delete Start -->
        <div id="modal-success-delete"
             class="hidden fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
            <div class="modal-success">
                <svg width="125" height="125" class="relative rounded-full mx-auto top-10" viewBox="0 0 125 125"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                        stroke="white" stroke-width="7.8125" stroke-miterlimit="10"/>
                    <path d="M85.9375 42.9688L53.125 82.0312L39.0625 66.4062" stroke="white" stroke-width="7.8125"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="mb-2 mx-5 text-white">
                    <p class="font-Default text-center mt-16">
                        <span class="text-32px">Berhasil</span>
                        <br>
                        <span class="text-16px">Data telah dihapus</span>
                    </p>
                </div>
                <div class="absolute flex bottom-0 w-full">
                    <button
                        class="btn-konfirm w-full rounded-b-radius20 text-white bg-buttongreen hover:bg-green-500">
                        Close
                    </button>
                </div>
            </div>
        </div>
        <!-- Modal Success delete End -->

        <!-- Modal Success edit Start -->
        <div id="modal-success-edit"
             class="hidden fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
            <div class="modal-success">
                <svg width="125" height="125" class="relative rounded-full mx-auto top-10" viewBox="0 0 125 125"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                        stroke="white" stroke-width="7.8125" stroke-miterlimit="10"/>
                    <path d="M85.9375 42.9688L53.125 82.0312L39.0625 66.4062" stroke="white" stroke-width="7.8125"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="mb-2 mx-5 text-white">
                    <p class="font-Default text-center mt-16">
                        <span class="text-32px">Berhasil</span>
                        <br>
                        <span class="text-16px">Data telah diperbaharui</span>
                    </p>
                </div>
                <div class="absolute flex bottom-0 w-full">
                    <button
                        class="btn-konfirm w-full rounded-b-radius20 text-white bg-buttongreen hover:bg-green-500">
                        Close
                    </button>
                </div>
            </div>
        </div>
        <!-- Modal Success edit End -->

        <!-- Modal Success tambah Start -->
        <div id="modal-success-tambah"
             class="hidden fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
            <div class="modal-success">
                <svg width="125" height="125" class="relative rounded-full mx-auto top-10" viewBox="0 0 125 125"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                        stroke="white" stroke-width="7.8125" stroke-miterlimit="10"/>
                    <path d="M85.9375 42.9688L53.125 82.0312L39.0625 66.4062" stroke="white" stroke-width="7.8125"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="mb-2 mx-5 text-white">
                    <p class="font-Default text-center mt-16">
                        <span class="text-32px">Berhasil</span>
                        <br>
                        <span class="text-16px">Data telah ditambahkan</span>
                    </p>
                </div>
                <div class="absolute flex bottom-0 w-full">
                    <button
                        class="btn-konfirm w-full rounded-b-radius20 text-white bg-buttongreen hover:bg-green-500">
                        Close
                    </button>
                </div>
            </div>
        </div>
        <!-- Modal Success tambah End -->
    </div>
</template>

