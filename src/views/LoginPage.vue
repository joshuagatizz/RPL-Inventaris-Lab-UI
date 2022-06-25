<script setup>
import axios from "axios";
import {useStore} from "../stores/User.js";
import {onMounted, ref} from "vue";
import router from "../router";

const store = useStore();

onMounted(() => {
    const store = useStore();
    if (store.token !== '') {
        router.push('/dashboard');
    }
})

const email = ref('');
const password = ref('');

function handleLogin() {
    axios({
        method: "post",
        url: "http://localhost:8080/api/user/login",
        params: {
            email : email.value,
            password : password.value
        }
    })
        .then((res) => {
            store.setToken(res.data.data.token);
            store.setUser(res.data.data.user.nama);
            store.setUserId(res.data.data.user.id);
            store.setAuthority(res.data.data.access);
            router.push("/dashboard");
        })
        .catch((err) => {
            console.error(err);
        });
}

</script>

<template>
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" style="font-family:Roboto,monospace">
        <div class="w-full h-screen flex items-center justify-center">
            <div class="vh-100 md:w-1/3 bg-gray-900 rounded-lg">
                <div class="flex font-bold justify-center mt-6">
                </div>
                <h2 class="text-4xl text-center font-bold text-gray-100 mb-4 mt-10">Login</h2>
                <div class="flex justify-center mb-10">
                    <a class="text-gray-700 text-sm text-xl" href="#">Please enter your email and password!</a>
                </div>
                <div class="px-12 pb-10">
                    <div class="w-full mb-4">
                        <div class="flex items-center">
                            <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                            <input v-model="email" type='text' placeholder="Email"
                                   class="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"/>
                        </div>
                    </div>

                    <div class="w-full mb-4">
                        <div class="flex items-center">
                            <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                            <input v-model="password" type='password' placeholder="Password"
                                   class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"/>
                        </div>
                    </div>

                    <button @click="handleLogin" type="submit"
                            class="w-full py-2 rounded-full bg-gray-600 focus:outline-none mb-20">Login
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
