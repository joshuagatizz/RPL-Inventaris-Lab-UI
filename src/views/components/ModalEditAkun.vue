<script setup>
import { useStore } from "../../stores/User.js";

const store = useStore();

</script>

<template>
    <div class="fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
        <div class="modal-teakun">
            <img src="img/nobita.jpg" class="relative rounded-full align-middle mx-auto top-3" width="200" height="200">
            <form class="mt-10">
                <div class="mb-2 mx-5">
                    <label for="name" class="block mb-2 text-16px text-black">Nama:</label>
                    <input type="name" id="edit-nama"
                        class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Masukan nama" required>
                </div>
                <div class="mb-2 mx-5 flex">
                    <div class="mb-2 block">
                        <label for="nim" class="block mb-2 text-16px text-black">Nim:</label>
                        <input type="nim" id="edit-nim"
                            class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Masukan nim" readonly>
                    </div>
                    <div class="mb-2 ml-5 block">
                        <label for="role" class="block mb-2 text-16px text-black">Role:</label>
                        <select
                            class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5"
                            id="edit-role">
                            <option>Anggota</option>
                            <option>Asisten Labotarium</option>
                        </select>
                    </div>
                </div>
                <div class="mb-2 mx-5 block">
                    <label for="email" class="block mb-2 text-16px text-black">Email:</label>
                    <input type="email" id="edit-email"
                        class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Masukan email" required>
                </div>
                <div class="mb-2 mx-5 block">
                    <label for="password" class="block mb-2 text-16px text-black">Password:</label>
                    <input type="password" id="edit-password"
                        class="bg-white h-11 border border-gray-300 text-gray-900 text-16px font-Default rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Masukan password" required>
                </div>
            </form>
            <div class="absolute mr-6 mt-3 right-0">
                <button @click="store.setModalEditAkun(false)" class="btn text-black bg-buttongrey hover:bg-slate-200">Batal</button>
                <button class="btn text-white bg-buttonsky hover:bg-blue-500">Simpan</button>
            </div>
        </div>
    </div>
</template>