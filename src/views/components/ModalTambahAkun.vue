<script setup>
import { useStore } from "../../stores/User.js";
import {onMounted} from "vue";
import axios from "axios";
import router from "../../router";

const store = useStore();

function resetStore() {
    store.setNama('');
    store.setNim('');
    store.setEmail('');
    store.setPassword('');
    store.setRole('');
    store.setUrlFoto('');
}

onMounted(() => {
    const store = useStore();
    resetStore();
})

function tambahAkun() {
    axios({
        method: "post",
        url: "http://localhost:8080/api/user",
        params: {
            token: store.token
        },
        data: {
            imgUrl : store.urlFoto,
            nama : store.nama,
            nim : store.nim,
            email : store.email,
            password : store.password,
            tipeUser : store.role,
        }
    })
    closeModal();
    router.push("/berhasil");
}

function closeModal() {
    store.setModalTambahAkun(false);
}

</script>

<template>
    <div class="fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
        <div class="modal-teakun py-16">
            <form class="mt-10">
                <div class="mb-2 mx-5">
                    <label class="block mb-2 text-16px text-black">Nama:</label>
                    <input type="name" v-model="store.nama"
                        class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Masukan nama" required>
                </div>
                <div class="mb-2 mx-5 flex">
                    <div class="mb-2 block">
                        <label class="block mb-2 text-16px text-black">Nim:</label>
                        <input type="nim" v-model="store.nim"
                            class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Masukan nim" required>
                    </div>
                    <div class="mb-2 mx-5 block">
                        <label class="block mb-2 text-16px text-black">Role:</label>
                        <select v-model="store.role"
                            class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5">
                            <option>Anggota</option>
                            <option>Aslab</option>
                        </select>
                    </div>
                </div>

                <div class="mb-2 mx-5 block">
                    <label class="block mb-2 text-16px text-black">Email:</label>
                    <input type="email" v-model="store.email"
                        class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Masukan email" required>
                </div>

                <div class="mb-2 mx-5 block">
                    <label class="block mb-2 text-16px text-black">Password:</label>
                    <input type="password" v-model="store.password"
                        class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Masukan password" required>
                </div>

                <div class="mb-2 mx-5 block">
                    <label class="block mb-2 text-16px text-black">URL Foto:</label>
                    <input type="text" v-model="store.urlFoto"
                           class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           placeholder="Masukan URL foto" required>
                </div>
            </form>
            <div class="absolute mr-6 mt-3 right-0">
                <button @click="store.setModalTambahAkun(false)" class="btn text-black bg-buttongrey hover:bg-slate-200 mx-4">Batal</button>
                <button @click="tambahAkun" class="btn text-white bg-buttonsky hover:bg-blue-500">Simpan</button>
            </div>
        </div>
    </div>
</template>