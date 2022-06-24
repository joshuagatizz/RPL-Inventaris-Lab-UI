<script setup>
import { useStore } from "../../stores/User.js";

const store = useStore();

</script>

<template>
    <div class="fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
        <div class="modal-konfirm">
            <svg width="125" height="125" class="relative rounded-full mx-auto top-10" viewBox="0 0 125 125" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                    stroke="#F43F3F" stroke-width="7.8125" stroke-miterlimit="10" />
                <path
                    d="M61.0986 40.5396L62.5 70.3126L63.8989 40.5396C63.9075 40.3493 63.8773 40.1592 63.81 39.9809C63.7426 39.8027 63.6397 39.6401 63.5074 39.503C63.3751 39.3659 63.2162 39.2572 63.0405 39.1836C62.8647 39.1099 62.6759 39.0729 62.4853 39.0748V39.0748C62.2971 39.0765 62.1111 39.1162 61.9385 39.1915C61.7659 39.2667 61.6103 39.3759 61.4809 39.5127C61.3514 39.6494 61.2509 39.8108 61.1852 39.9872C61.1195 40.1637 61.0901 40.3515 61.0986 40.5396V40.5396Z"
                    stroke="#F43F3F" stroke-width="7.8125" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M62.5 89.8218C61.5343 89.8218 60.5902 89.5354 59.7873 88.9989C58.9843 88.4624 58.3584 87.6998 57.9889 86.8075C57.6193 85.9153 57.5226 84.9335 57.711 83.9864C57.8994 83.0392 58.3645 82.1692 59.0473 81.4863C59.7302 80.8034 60.6002 80.3384 61.5474 80.15C62.4946 79.9616 63.4764 80.0583 64.3686 80.4278C65.2608 80.7974 66.0234 81.4232 66.5599 82.2262C67.0964 83.0292 67.3828 83.9732 67.3828 84.939C67.3828 86.234 66.8684 87.4759 65.9527 88.3916C65.037 89.3073 63.795 89.8218 62.5 89.8218Z"
                    fill="#F43F3F" />
            </svg>
            <div class="mb-2 mx-5">
                <p class="font-Default text-center mt-16">
                    <span class="text-32px">Apakah kamu yakin?</span>
                    <br>
                    <span class="text-16px">Data yang sudah terhapus tidak <br /> dapat dikembalikan</span>
                </p>
            </div>
            <div class="absolute flex bottom-0 w-full">
                <button @click="store.setModalHapusAkun(false)"
                    class="btn-konfirm w-1/2 rounded-bl-radius20 text-black bg-buttongrey hover:bg-slate-200">Batal</button>
                <button id="btn-konfirmhapus"
                    class="btn-konfirm w-1/2 rounded-br-radius20 text-white bg-buttonred hover:bg-red-600">Hapus</button>
            </div>
        </div>
    </div>
</template>