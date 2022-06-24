<script setup>
import axios from "axios";
import {useStore} from "../stores/User.js";
import {onMounted, ref} from "vue";
import router from "../router";
import Navbar from "./components/Navbar.vue";

const store = useStore();

onMounted(() => {
    const store = useStore();
    store.setPageTitle('LaporanPribadi');
})

</script>

<template>
    <!-- Sidenavbar Start -->
    <div class="flex" style="font-family:monospace">
        <Navbar></Navbar>

        <!-- Content Home Start -->
        <div class="content">
            <h1 class="title-content"> Lihat Barang </h1>
            <!-- Card Start -->
            <div class="block justify-center mt-5">
                <div class="card-edit-barang mt-5" href="#!">
                    <img class="item-image flex-none" src="https://cdn.discordapp.com/attachments/976696861207433219/984030204844453888/Rectangle_3.jpg">
                    <p class="font-Default ml-5">
                        <span class="title-card">Senter Pembesar</span>
                        <br>
                        <span class="description-card">Alat bercahaya yang dapat memperbesar sesuatu</span>
                    </p>

                    <button data-modal-toggle="pinjam-modal" type="submit" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[15px] text-sm inline-flex items-center px-14 py-3.5 text-center ml-auto">Pinjam</button>
                </div>

                <div class="flex w-cardw mt-16">
                    <a href="#!" class="ml-auto">
                        <svg width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.2251 1.07383C34.4052 0.944784 34.6171 0.868114 34.8376 0.852219C35.0581 0.836324 35.2787 0.881817 35.4752 0.983715C35.6717 1.08561 35.8365 1.23998 35.9517 1.42991C36.0668 1.61984 36.1278 1.838 36.1279 2.0605V26.3029C36.1278 26.5254 36.0668 26.7436 35.9517 26.9335C35.8365 27.1234 35.6717 27.2778 35.4752 27.3797C35.2787 27.4816 35.0581 27.5271 34.8376 27.5112C34.6171 27.4953 34.4052 27.4186 34.2251 27.2896L19.2677 16.5381V26.3029C19.2676 26.5254 19.2066 26.7436 19.0915 26.9335C18.9763 27.1234 18.8115 27.2778 18.615 27.3797C18.4185 27.4816 18.1979 27.5271 17.9774 27.5112C17.7569 27.4953 17.545 27.4186 17.3649 27.2896L0.504707 15.1684C0.348591 15.0562 0.22134 14.9082 0.133545 14.7366C0.0457458 14.565 -6.10352e-05 14.3747 -6.10352e-05 14.1817C-6.10352e-05 13.9887 0.0457458 13.7984 0.133545 13.6268C0.22134 13.4552 0.348591 13.3072 0.504707 13.195L17.3649 1.07383C17.545 0.944784 17.7569 0.868114 17.9774 0.852219C18.1979 0.836324 18.4185 0.881817 18.615 0.983715C18.8115 1.08561 18.9763 1.23998 19.0915 1.42991C19.2066 1.61984 19.2676 1.838 19.2677 2.0605V11.8253L34.2251 1.07383Z" fill="#747474"/>
                        </svg>
                    </a>
                    <p class="ml-5 title-card">1</p>
                    <a href="#!" class="ml-5">
                        <svg width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.77291 1.07383C2.59284 0.944784 2.38095 0.868114 2.16045 0.852219C1.93996 0.836324 1.71938 0.881817 1.52287 0.983715C1.32636 1.08561 1.1615 1.23998 1.04637 1.42991C0.93123 1.61984 0.870253 1.838 0.870117 2.0605V26.3029C0.870253 26.5254 0.93123 26.7436 1.04637 26.9335C1.1615 27.1234 1.32636 27.2778 1.52287 27.3797C1.71938 27.4816 1.93996 27.5271 2.16045 27.5112C2.38095 27.4953 2.59284 27.4186 2.77291 27.2896L17.7303 16.5381V26.3029C17.7305 26.5254 17.7914 26.7436 17.9066 26.9335C18.0217 27.1234 18.1866 27.2778 18.3831 27.3797C18.5796 27.4816 18.8002 27.5271 19.0207 27.5112C19.2412 27.4953 19.4531 27.4186 19.6331 27.2896L36.4933 15.1684C36.6495 15.0562 36.7767 14.9082 36.8645 14.7366C36.9523 14.565 36.9981 14.3747 36.9981 14.1817C36.9981 13.9887 36.9523 13.7984 36.8645 13.6268C36.7767 13.4552 36.6495 13.3072 36.4933 13.195L19.6331 1.07383C19.4531 0.944784 19.2412 0.868114 19.0207 0.852219C18.8002 0.836324 18.5796 0.881817 18.3831 0.983715C18.1866 1.08561 18.0217 1.23998 17.9066 1.42991C17.7914 1.61984 17.7305 1.838 17.7303 2.0605V11.8253L2.77291 1.07383Z" fill="black"/>
                        </svg>
                    </a>

                </div>

            </div>
            <!-- Card End -->

            <!-- Edit Modal Start -->
            <div id="pinjam-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-[20px] shadow">
                        <div class="py-6 px-6 lg:px-8">
                            <p class="popup-title mb-5 text-center">Pinjam barang</p>
                            <img class="edit-popup-image mx-auto mb-5" src="https://cdn.discordapp.com/attachments/976696861207433219/984030204844453888/Rectangle_3.jpg">
                            <p class="title-card text-center mt-6">Senter Pembesar</p>
                            <p class="description-card text-center">
                                Alat bercahaya yang dapat memperbesar sesuatu
                            </p>
                            <div class="flex w-full h-full items-center mt-6 bg-gray-200 rounded-[20px]">
                                <div class="flex-auto p-6 bg-gray-200 z-0 rounded-[20px] items-center">
                                    <p class="text-center"><span class="font-semibold">Tanggal Peminjaman<br></span><span>4 Juni 2022</span></p>
                                </div>
                                <div class="flex-auto p-6 bg-yellow-200 z-10 rounded-[20px] items-center">
                                    <p class="text-center items-center"><span class="font-semibold">Tanggal Pengembalian<br></span><span>4 Juni 2022</span></p>
                                </div>
                            </div>
                            <p class="description-card mt-6 mb-8">
                                *Denda keterlambatan : Rp2000/hari
                            </p>
                            <div class="text-right">
                                <button data-modal-toggle="pinjam-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-[15px] border border-gray-200 text-sm font-medium px-14 py-3.5 hover:text-gray-900 focus:z-10 mr-2">Batal</button>
                                <button data-modal-toggle="pinjam-modal" type="submit" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[15px] text-sm inline-flex items-center px-14 py-3.5 text-center">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Pinjam Modal End -->

            <!-- Modal Success delete Start -->
            <div id="modal-success-delete"
                 class="hidden fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
                <div class="modal-success">
                    <svg width="125" height="125" class="relative rounded-full mx-auto top-10" viewBox="0 0 125 125" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                            stroke="white" stroke-width="7.8125" stroke-miterlimit="10" />
                        <path d="M85.9375 42.9688L53.125 82.0312L39.0625 66.4062" stroke="white" stroke-width="7.8125"
                              stroke-linecap="round" stroke-linejoin="round" />
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
                            class="btn-konfirm w-full rounded-b-radius20 text-white bg-buttongreen hover:bg-green-500">Close</button>
                    </div>
                </div>
            </div>
            <!-- Modal Success delete End -->

            <!-- Modal Success edit Start -->
            <div id="modal-success-edit"
                 class="hidden fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
                <div class="modal-success">
                    <svg width="125" height="125" class="relative rounded-full mx-auto top-10" viewBox="0 0 125 125" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                            stroke="white" stroke-width="7.8125" stroke-miterlimit="10" />
                        <path d="M85.9375 42.9688L53.125 82.0312L39.0625 66.4062" stroke="white" stroke-width="7.8125"
                              stroke-linecap="round" stroke-linejoin="round" />
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
                            class="btn-konfirm w-full rounded-b-radius20 text-white bg-buttongreen hover:bg-green-500">Close</button>
                    </div>
                </div>
            </div>
            <!-- Modal Success edit End -->

            <!-- Modal Success tambah Start -->
            <div id="modal-success-tambah"
                 class="hidden fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
                <div class="modal-success">
                    <svg width="125" height="125" class="relative rounded-full mx-auto top-10" viewBox="0 0 125 125" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                            stroke="white" stroke-width="7.8125" stroke-miterlimit="10" />
                        <path d="M85.9375 42.9688L53.125 82.0312L39.0625 66.4062" stroke="white" stroke-width="7.8125"
                              stroke-linecap="round" stroke-linejoin="round" />
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
                            class="btn-konfirm w-full rounded-b-radius20 text-white bg-buttongreen hover:bg-green-500">Close</button>
                    </div>
                </div>
            </div>
            <!-- Modal Success tambah End -->

        </div>
    </div>
</template>

