<script setup>
import {useStore} from "../../stores/User.js";
import {ref} from "vue";
import axios from "axios";
import router from "../../router";

const store = useStore();

const nama = ref('');
const deskripsi = ref('');
const url = ref('');

function closeModal() {
    store.setModalTambahBarang(false);
}

function tambahBarang() {
    axios({
        method: "post",
            url: "http://localhost:8080/api/barang",
        params: {
            token: store.token
        },
        data: {
            deskripsi : deskripsi.value,
            nama : nama.value,
            urlFoto : url.value
        }
    })
        .then((res) => {
            router.go(0);
        })
        .catch((err) => {
            router.push('/');
        });
    closeModal();
    router.push("/berhasil");
}



</script>

<template>
    <!-- Modal Edit Start -->
    <div id="modal-tbarang" class="fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
        <div class="modal-teakun py-2">
            <form class="mt-16">
                <div class="mb-2 mx-5">
                    <label for="edit-nama" class="block mb-2 text-16px text-black">Nama barang:</label>
                    <input v-model="nama" type="text" id="edit-nama"
                           class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           placeholder="Nama" required>
                </div>

                <div class="mb-2 mx-5 block">
                    <label class="block mb-2 text-16px text-black">Deskripsi:</label>
                    <textarea v-model="deskripsi" id="descBarang" rows="7"
                              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Deskripsi..." required></textarea>
                </div>

                <div class="mb-2 mx-5">
                    <label for="edit-nama" class="block mb-2 text-16px text-black">URL Foto:</label>
                    <input v-model="url" type="text" id="url-barang"
                           class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           placeholder="URL" required>
                </div>
            </form>
            <div class="absolute mr-6 mt-3 right-0">
                <button @click="closeModal" id="btn-bataleakun"
                        class="btn mr-4 text-black bg-[#F3F3F3] hover:bg-slate-200">Batal
                </button>
                <button @click="tambahBarang" id="btn-simpaneakun" class="btn text-white bg-[#66ACFF] hover:bg-blue-500">Simpan</button>
            </div>
        </div>
    </div>
    <!-- Modal Edit End -->
</template>

<style scoped>

</style>