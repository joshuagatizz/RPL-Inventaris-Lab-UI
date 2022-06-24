<script setup>
import {useStore} from "../../stores/User.js";
const store = useStore();
</script>

<template>
  <!-- Modal Pinjam Barang Start -->
  <div id="pinjam-modal" class="fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
    <div class="modal-teakun w-full px-6 py-6">
      <p class="popup-title mb-5 text-center">Pinjam barang</p>
      <img class="edit-popup-image mx-auto mb-5" src="https://cdn.discordapp.com/attachments/976696861207433219/984030204844453888/Rectangle_3.jpg">
      <p class="title-card text-center mt-6">Senter Pembesar</p>
      <p class="description-card text-center">
        Alat bercahaya yang dapat memperbesar sesuatu
      </p>
      <div class="flex w-full items-center mt-6 bg-gray-200 rounded-[20px]">
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
      <div class="absolute mr-6 mt-3 right-0">
        <button @click="store.showModalPinjam=!store.showModalPinjam" id="btn-bataleakun" class="btn mr-4 text-black bg-[#F3F3F3] hover:bg-slate-200">Batal</button>
        <button id="btn-simpaneakun" class="btn text-white bg-[#66ACFF] hover:bg-blue-500">Pinjam</button>
      </div>
    </div>
  </div>
  <!-- Modal Pinjam Barang End -->
</template>

<style scoped>

</style>