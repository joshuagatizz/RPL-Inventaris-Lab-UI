<template>
    <div class="bg-gradient-to-bl from-slate-800 to-slate-900 h-screen">
        <div class="flex py-48">
            <div class="m-auto h-full">
                <div class="m-auto bg-green-400 px-3 py-1 rounded-tr-md rounded-bl-md">
                    Berhasil!
                </div>
                <div class="mt-4 m-auto bg-green-700 text-white px-3 py-1 rounded-tr-md rounded-bl-md">
                    <button @click="back()">Kembali</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from "../router";

function back() {
    router.push('/edit-barang-aslab')
}

</script>

<style scoped>

</style>