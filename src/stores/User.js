import { defineStore } from "pinia";
import {ref} from "vue";

export const useStore = defineStore("User", () => {
    const token = ref('');
    const authority = ref('aslab');
    const user = ref('Unknown');
    const userId = ref('Unknown');
    const pageTitle = ref('dashboard');

    const forgetToken = () => {
        token.value = '';
    }

    const setToken = (newToken) => {
        token.value = newToken;
    }

    const setUser = (val) => {
        user.value = val;
    }

    const setPageTitle = (title) => {
        pageTitle.value = title;
    }

    const setUserId = (id) => {
        userId.value = id;
    }

    return {
        token, user, forgetToken, setToken, authority, setUser, pageTitle, setPageTitle, userId, setUserId
    }

}, {
    persist: true
});