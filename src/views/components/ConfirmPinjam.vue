<script setup>
import {useStore} from "../../stores/User.js";
import axios from "axios";
import router from "../../router";
const store = useStore();

function pinjamBarang() {
    axios({
        method: "put",
        url: "http://localhost:8080/api/barang",
        params: {
            token: store.token,
            idBarang: store.idBarang,
            idPeminjam: store.userId
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
  <!-- Modal Pinjam Barang Start -->
  <div id="pinjam-modal" class="fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
    <div class="modal-teakun w-full px-6 py-6">
      <p class="popup-title mb-5 text-center">Pinjam barang</p>
      <img class="edit-popup-image mx-auto mb-5" :src=store.urlBarang>
      <p class="title-card text-center mt-6">{{ store.namaBarang }}</p>
      <p class="description-card text-center">
          {{ store.deskripsiBarang }}
      </p>
      <div class="flex w-full items-center mt-6 bg-gray-200 rounded-[20px]">
        <div class="flex-auto p-6 bg-gray-200 z-0 rounded-[20px] items-center">
          <p class="text-center"><span class="font-semibold">Tanggal Peminjaman<br></span><span>Hari ini</span></p>
        </div>
        <div class="flex-auto p-6 bg-yellow-200 z-10 rounded-[20px] items-center">
          <p class="text-center items-center"><span class="font-semibold">Tanggal Pengembalian<br></span><span>Minggu depan</span></p>
        </div>
      </div>
      <p class="description-card mt-6 mb-8">
        *Denda keterlambatan : Rp. 2000,0 / hari
      </p>
      <div class="absolute mr-6 mt-3 right-0">
        <button @click="store.showModalPinjam=!store.showModalPinjam" id="btn-bataleakun" class="btn mr-4 text-black bg-[#F3F3F3] hover:bg-slate-200">Batal</button>
        <button @click="pinjamBarang" id="btn-simpaneakun" class="btn text-white bg-[#66ACFF] hover:bg-blue-500">Pinjam</button>
      </div>
    </div>
  </div>
  <!-- Modal Pinjam Barang End -->
</template>

<style scoped>

</style>