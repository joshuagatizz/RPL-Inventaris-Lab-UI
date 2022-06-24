<script setup>
import {useStore} from "../../stores/User.js";
import axios from "axios";
import router from "../../router";
import {onMounted, ref} from "vue";
const store = useStore();

function editBarang() {
    axios({
        method: "put",
        url: "http://localhost:8080/api/barang/" + store.idBarang,
        params: {
            token: store.token
        },
        data: {
            urlFoto : store.urlBarang,
            nama : store.namaBarang,
            deskripsi : store.deskripsiBarang
        }
    })
    closeModal();
    router.push("/berhasil");
}

function closeModal() {
    store.setModalPinjam(false);
}

</script>

<template>
  <!-- Modal Edit Start -->
  <div id="modal-ebarang" class="fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
    <div class="modal-teakun">
      <img :src=store.urlBarang class="relative edit-popup-image rounded-[20px] align-middle mx-auto top-10" >
      <form class="mt-16">
        <div class="mb-2 mx-5">
          <label for="edit-nama" class="block mb-2 text-16px text-black">Nama barang:</label>
          <input type="text" id="edit-nama" v-model="store.namaBarang"
                 class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 :placeholder=store.namaBarang required>
        </div>
        <div class="mb-2 mx-5 block">
          <label class="block mb-2 text-16px text-black">Deskripsi:</label>
          <textarea v-model="store.deskripsiBarang" id="descBarang" rows="7" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " :placeholder=store.deskripsiBarang required></textarea>
        </div>
      </form>
      <div class="absolute mr-6 mt-3 right-0">
        <button @click="store.showModalEditBarang=!store.showModalEditBarang" id="btn-bataleakun" class="btn mr-4 text-black bg-[#F3F3F3] hover:bg-slate-200">Batal</button>
        <button @click="editBarang" id="btn-simpaneakun" class="btn text-white bg-[#66ACFF] hover:bg-blue-500">Simpan</button>
      </div>
    </div>
  </div>
  <!-- Modal Edit End -->
</template>

<style scoped>

</style>