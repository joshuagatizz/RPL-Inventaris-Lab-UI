<script setup>
import axios from "axios";
import {useStore} from "../stores/User.js";
import {onMounted, ref} from "vue";
import router from "../router";

const store = useStore();

onMounted(() => {
    const store = useStore();
    console.log(store.token);

})

const email = ref('');
const password = ref('');

function handleLogin() {
    axios({
        method: "post",
        url: "http://localhost:8080/api/user/login",
        params: {
            email: email.value,
            password: password.value
        }
    })
        .then((res) => {
            store.setToken(res.data.data.token);
            router.push("/");
        })
        .catch((err) => {
            console.error(err);
        });
}

function toHome() {
    router.push("/dashboard");
}

function toLihatBarang() {
    router.push("/lihat-barang");
}

function toPinjamanku() {
    router.push("/pinjamanku");
}

function toLihatLaporan() {
    router.push("/lihat-laporan");
}

function toEditBarang() {
    router.push("/edit-barang-aslab");
}


</script>

<template>
    <!-- Sidenavbar Start -->
    <div class="flex" style="font-family:monospace">
        <div class="sidenavbar" id="side-navbar">
            <div class="pt-10 pb-10 px-6 ml-10 mt-10">
                <a href="#!">
                    <div class="flex items-center">
                        <div class="shrink-0">
                            <svg width="63" height="63" viewBox="0 0 63 63" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="31.5" cy="31.5" r="31.5" fill="url(#paint0_linear_6_5)"/>
                                <path
                                    d="M39.7555 25.056C39.7555 25.056 39.4835 24.896 38.9395 24.576C38.3955 24.256 37.6755 23.904 36.7795 23.52C35.8835 23.104 34.9075 22.736 33.8515 22.416C32.7955 22.096 31.7555 21.936 30.7315 21.936C29.9315 21.936 29.2755 22.064 28.7635 22.32C28.2515 22.576 27.9955 23.008 27.9955 23.616C27.9955 24.192 28.2515 24.656 28.7635 25.008C29.2755 25.36 29.9955 25.68 30.9235 25.968C31.8835 26.256 33.0195 26.608 34.3315 27.024C36.4435 27.664 38.2675 28.4 39.8035 29.232C41.3395 30.064 42.5235 31.136 43.3555 32.448C44.1875 33.728 44.6035 35.44 44.6035 37.584C44.6035 39.632 44.2355 41.36 43.4995 42.768C42.7635 44.144 41.7715 45.248 40.5235 46.08C39.2755 46.912 37.8835 47.52 36.3475 47.904C34.8115 48.256 33.2435 48.432 31.6435 48.432C30.0115 48.432 28.2995 48.272 26.5075 47.952C24.7475 47.6 23.0355 47.136 21.3715 46.56C19.7075 45.952 18.1875 45.248 16.8115 44.448L20.8435 36.24C20.8435 36.24 21.1635 36.432 21.8035 36.816C22.4435 37.2 23.2915 37.632 24.3475 38.112C25.4035 38.592 26.5715 39.024 27.8515 39.408C29.1635 39.792 30.4755 39.984 31.7875 39.984C32.8115 39.984 33.5155 39.856 33.8995 39.6C34.3155 39.312 34.5235 38.944 34.5235 38.496C34.5235 37.824 34.1715 37.312 33.4675 36.96C32.7635 36.576 31.8355 36.224 30.6835 35.904C29.5635 35.552 28.3155 35.152 26.9395 34.704C24.9555 34.032 23.3235 33.28 22.0435 32.448C20.7635 31.584 19.8195 30.576 19.2115 29.424C18.6035 28.24 18.2995 26.816 18.2995 25.152C18.2995 22.624 18.8915 20.512 20.0755 18.816C21.2595 17.12 22.8115 15.84 24.7315 14.976C26.6835 14.08 28.7795 13.632 31.0195 13.632C32.6835 13.632 34.2835 13.84 35.8195 14.256C37.3875 14.64 38.8435 15.12 40.1875 15.696C41.5635 16.272 42.7635 16.816 43.7875 17.328L39.7555 25.056Z"
                                    fill="white"/>
                                <defs>
                                    <linearGradient id="paint0_linear_6_5" x1="52.618" y1="-67.7466" x2="-33.8582"
                                                    y2="-47.496"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FBDA61"/>
                                        <stop offset="1" stop-color="#FF5ACD"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </a>
            </div>
            <ul class="ml-12 mt-10">
                <li>
                    <a @click="toHome" class="button-sidenavbar text-inactive" href="#!" data-mdb-ripple="true"
                       data-mdb-ripple-color="primary">
                        <svg width="20" height="20" viewBox="0 0 20 20" class="mr-5" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.11111 11.1111H7.77778C8.07246 11.1111 8.35508 10.994 8.56345 10.7857C8.77183 10.5773 8.88889 10.2947 8.88889 10V1.11111C8.88889 0.816426 8.77183 0.533811 8.56345 0.325437C8.35508 0.117063 8.07246 0 7.77778 0H1.11111C0.816426 0 0.533811 0.117063 0.325437 0.325437C0.117063 0.533811 0 0.816426 0 1.11111V10C0 10.2947 0.117063 10.5773 0.325437 10.7857C0.533811 10.994 0.816426 11.1111 1.11111 11.1111ZM0 18.8889C0 19.1836 0.117063 19.4662 0.325437 19.6746C0.533811 19.8829 0.816426 20 1.11111 20H7.77778C8.07246 20 8.35508 19.8829 8.56345 19.6746C8.77183 19.4662 8.88889 19.1836 8.88889 18.8889V14.4444C8.88889 14.1498 8.77183 13.8671 8.56345 13.6588C8.35508 13.4504 8.07246 13.3333 7.77778 13.3333H1.11111C0.816426 13.3333 0.533811 13.4504 0.325437 13.6588C0.117063 13.8671 0 14.1498 0 14.4444V18.8889ZM11.1111 18.8889C11.1111 19.1836 11.2282 19.4662 11.4365 19.6746C11.6449 19.8829 11.9275 20 12.2222 20H18.8889C19.1836 20 19.4662 19.8829 19.6746 19.6746C19.8829 19.4662 20 19.1836 20 18.8889V11.1111C20 10.8164 19.8829 10.5338 19.6746 10.3254C19.4662 10.1171 19.1836 10 18.8889 10H12.2222C11.9275 10 11.6449 10.1171 11.4365 10.3254C11.2282 10.5338 11.1111 10.8164 11.1111 11.1111V18.8889ZM12.2222 7.77778H18.8889C19.1836 7.77778 19.4662 7.66071 19.6746 7.45234C19.8829 7.24397 20 6.96135 20 6.66667V1.11111C20 0.816426 19.8829 0.533811 19.6746 0.325437C19.4662 0.117063 19.1836 0 18.8889 0H12.2222C11.9275 0 11.6449 0.117063 11.4365 0.325437C11.2282 0.533811 11.1111 0.816426 11.1111 1.11111V6.66667C11.1111 6.96135 11.2282 7.24397 11.4365 7.45234C11.6449 7.66071 11.9275 7.77778 12.2222 7.77778Z"/>
                        </svg>
                        <span>Home</span>
                    </a>
                </li>
                <li @click="toLihatBarang" class="mt-4">
                    <a class="button-sidenavbar text-white" href="#!">
                        <svg width="20" height="27" viewBox="0 0 20 27" class="mr-5" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.33344 6.66666V4.16668C3.33344 3.59335 3.44178 3.05502 3.65844 2.55169C3.87511 2.04003 4.17511 1.5967 4.55677 1.22337C4.9301 0.841702 5.37343 0.541704 5.88509 0.325039C6.38842 0.108374 6.92675 4.11635e-05 7.50008 4.11635e-05C7.96841 4.11635e-05 8.41508 0.0733738 8.84174 0.221706C9.26841 0.370039 9.6584 0.57837 10.0134 0.846702C10.7259 0.297398 11.6004 -0.000336172 12.5 4.11635e-05C13.3213 -0.00362011 14.125 0.237034 14.8091 0.691399C15.4931 1.14576 16.0266 1.79331 16.3417 2.55169C16.5584 3.05502 16.6667 3.59335 16.6667 4.16668V6.66666H18.3333C18.7754 6.66666 19.1993 6.84226 19.5118 7.15482C19.8244 7.46737 20 7.89129 20 8.33332V21.6666C20 22.3616 19.87 23.0116 19.61 23.6199C19.35 24.2182 18.9933 24.7482 18.5417 25.2082C18.2417 25.5015 17.9133 25.7549 17.5517 25.9682L16.5684 25.5415L15.7434 25.1732L15.39 24.9782L15.02 24.7032L14.6184 24.3499L14.1717 23.8732C13.6257 23.2686 13.3265 22.4812 13.3334 21.6666V6.66666H15V4.16668C15 3.82002 14.935 3.49335 14.805 3.19002C14.6164 2.73532 14.2962 2.34736 13.8855 2.07593C13.4748 1.80451 12.9923 1.662 12.5 1.6667C11.9884 1.6667 11.5284 1.81003 11.1201 2.09669C11.4793 2.72738 11.6677 3.44088 11.6667 4.16668V21.6666C11.6597 22.8984 12.1153 24.0879 12.9434 24.9999L13.4584 25.5499L13.9717 25.9999L14.4867 26.3832L15 26.6665H5.0001C3.6774 26.6663 2.4087 26.1419 1.47179 25.2082C1.01448 24.7519 0.647985 24.2129 0.391798 23.6199C0.128497 23.0026 -0.00482774 22.3377 0.000133545 21.6666V8.33332C0.000133545 7.89129 0.175727 7.46737 0.488286 7.15482C0.800845 6.84226 1.22476 6.66666 1.66679 6.66666H3.33344ZM5.0001 6.66666H10.0001V4.16668C10.0001 3.82002 9.93507 3.49335 9.80507 3.19002C9.61641 2.73532 9.29619 2.34736 8.88549 2.07593C8.47479 1.80451 7.99235 1.662 7.50008 1.6667C7.15342 1.6667 6.82675 1.7317 6.52342 1.8617C6.06872 2.05035 5.68076 2.37057 5.40934 2.78128C5.13791 3.19198 4.9954 3.67442 5.0001 4.16668V6.66666Z"/>
                        </svg>
                        <span>Lihat Barang</span>
                    </a>
                </li>
                <li class="mt-4">
                    <a @click="toPinjamanku" class="button-sidenavbar text-inactive" href="#!">
                        <svg width="24" height="24" viewBox="0 0 24 24" class="mr-5" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 3.75C21 2.75544 20.6049 1.80161 19.9016 1.09835C19.1984 0.395088 18.2446 0 17.25 0H3.75C2.75544 0 1.80161 0.395088 1.09835 1.09835C0.395088 1.80161 0 2.75544 0 3.75V4.5H21V3.75ZM21 9.9V6H0V17.25C0 18.2446 0.395088 19.1984 1.09835 19.9016C1.80161 20.6049 2.75544 21 3.75 21H9.9C9.10675 19.4472 8.8259 17.6829 9.09777 15.9606C9.36964 14.2382 10.1803 12.6462 11.4132 11.4132C12.6462 10.1803 14.2382 9.36964 15.9606 9.09777C17.6829 8.8259 19.4472 9.10675 21 9.9ZM17.25 24C19.0402 24 20.7571 23.2888 22.023 22.023C23.2888 20.7571 24 19.0402 24 17.25C24 15.4598 23.2888 13.7429 22.023 12.477C20.7571 11.2112 19.0402 10.5 17.25 10.5C15.4598 10.5 13.7429 11.2112 12.477 12.477C11.2112 13.7429 10.5 15.4598 10.5 17.25C10.5 19.0402 11.2112 20.7571 12.477 22.023C13.7429 23.2888 15.4598 24 17.25 24ZM16.5 14.25C16.5 14.0511 16.579 13.8603 16.7197 13.7197C16.8603 13.579 17.0511 13.5 17.25 13.5C17.4489 13.5 17.6397 13.579 17.7803 13.7197C17.921 13.8603 18 14.0511 18 14.25V16.5H19.5C19.6989 16.5 19.8897 16.579 20.0303 16.7197C20.171 16.8603 20.25 17.0511 20.25 17.25C20.25 17.4489 20.171 17.6397 20.0303 17.7803C19.8897 17.921 19.6989 18 19.5 18H17.25C17.0511 18 16.8603 17.921 16.7197 17.7803C16.579 17.6397 16.5 17.4489 16.5 17.25V14.25Z"
                                fill="#747474"/>
                        </svg>
                        <span>Pinjamanku</span>
                    </a>
                </li>
                <li class="mt-4">
                    <a @click="toLihatLaporan" class="button-sidenavbar text-inactive" href="#!">
                        <svg width="20" height="25" viewBox="0 0 20 25" class="mr-5" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.1875 2.12484e-08C17.9002 -8.75273e-05 18.5863 0.270369 19.1072 0.756712C19.6281 1.24305 19.945 1.90901 19.9938 2.62L20 2.8125V22.1875C20.0001 22.9002 19.7296 23.5863 19.2433 24.1072C18.7569 24.6281 18.091 24.945 17.38 24.9938L17.1875 25H2.8125C2.09984 25.0001 1.41372 24.7296 0.892808 24.2433C0.371893 23.7569 0.0550276 23.091 0.00625016 22.38L2.12484e-08 22.1875V2.8125C-8.75273e-05 2.09984 0.270369 1.41372 0.756711 0.892808C1.24305 0.371893 1.90901 0.0550276 2.62 0.00625016L2.8125 2.12484e-08H17.1875ZM5.63125 3.75625C5.13397 3.75625 4.65706 3.95379 4.30542 4.30542C3.95379 4.65706 3.75625 5.13397 3.75625 5.63125C3.75625 6.12853 3.95379 6.60544 4.30542 6.95708C4.65706 7.30871 5.13397 7.50625 5.63125 7.50625H14.3813C14.8785 7.50625 15.3554 7.30871 15.7071 6.95708C16.0587 6.60544 16.2562 6.12853 16.2562 5.63125C16.2562 5.13397 16.0587 4.65706 15.7071 4.30542C15.3554 3.95379 14.8785 3.75625 14.3813 3.75625H5.63125Z"/>
                        </svg>
                        <span>Lihat Laporan</span>
                    </a>
                </li>
                <li class="mt-4">
                    <a @click="toEditBarang" class="button-sidenavbar text-inactive" href="#!">
                        <svg width="20" height="20" viewBox="0 0 20 20" class="mr-5" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 0H6C2.691 0 0 2.691 0 6V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H14C17.309 20 20 17.309 20 14V6C20 2.691 17.309 0 14 0ZM6.999 15H5V13.001L10.53 7.479L12.529 9.478L6.999 15ZM13.472 8.535L11.473 6.536L12.997 5.013L14.996 7.012L13.472 8.535Z"
                                fill="#747474"/>
                        </svg>

                        <span>Edit Barang</span>
                    </a>
                </li>
                <li class="relative">
                    <a class="button-sidenavbar fixed w-1/5 bottom-10 text-inactive" href="#!">
                        <svg width="20" height="22" viewBox="0 0 20 22" class="mr-5" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.15793 0C2.32039 0 1.51716 0.33271 0.924936 0.924936C0.33271 1.51716 0 2.32039 0 3.15793V17.8949C0 18.7325 0.33271 19.5357 0.924936 20.1279C1.51716 20.7202 2.32039 21.0529 3.15793 21.0529H9.47379C10.3113 21.0529 11.1146 20.7202 11.7068 20.1279C12.299 19.5357 12.6317 18.7325 12.6317 17.8949V3.15793C12.6317 2.32039 12.299 1.51716 11.7068 0.924936C11.1146 0.33271 10.3113 0 9.47379 0H3.15793ZM13.9928 5.57164C14.1902 5.3743 14.4579 5.26344 14.737 5.26344C15.0161 5.26344 15.2838 5.3743 15.4812 5.57164L19.6918 9.78222C19.8891 9.97962 20 10.2473 20 10.5264C20 10.8056 19.8891 11.0733 19.6918 11.2707L15.4812 15.4812C15.2827 15.673 15.0168 15.7791 14.7408 15.7767C14.4648 15.7743 14.2008 15.6636 14.0056 15.4684C13.8104 15.2732 13.6997 15.0092 13.6973 14.7332C13.6949 14.4572 13.801 14.1913 13.9928 13.9928L16.4065 11.5791H7.3685C7.08933 11.5791 6.82158 11.4682 6.62417 11.2708C6.42676 11.0734 6.31586 10.8056 6.31586 10.5264C6.31586 10.2473 6.42676 9.97951 6.62417 9.7821C6.82158 9.58469 7.08933 9.47379 7.3685 9.47379H16.4065L13.9928 7.06008C13.7954 6.86268 13.6846 6.59498 13.6846 6.31586C13.6846 6.03674 13.7954 5.76904 13.9928 5.57164Z"/>
                        </svg>

                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- Sidenavbar End -->

        <!-- Content Home Start -->
        <div class="content">
            <h1 class="title-content"> Lihat Barang </h1>
            <!-- Card Start -->
            <div class="block justify-center mt-5">
                <div class="card-edit-barang mt-5" href="#!">
                    <img class="item-image flex-none" src="https://cdn.discordapp.com/attachments/976696861207433219/984030204844453888/Rectangle_3.jpg">
                    <p class="font-Default ml-5">
                        <span class="title-card">Senter Pembesar</span>
                        <br>
                        <span class="description-card">Alat bercahaya yang dapat memperbesar sesuatu</span>
                    </p>

                    <button data-modal-toggle="pinjam-modal" type="submit" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[15px] text-sm inline-flex items-center px-14 py-3.5 text-center ml-auto">Pinjam</button>
                </div>

                <div class="flex w-cardw mt-16">
                    <a href="#!" class="ml-auto">
                        <svg width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.2251 1.07383C34.4052 0.944784 34.6171 0.868114 34.8376 0.852219C35.0581 0.836324 35.2787 0.881817 35.4752 0.983715C35.6717 1.08561 35.8365 1.23998 35.9517 1.42991C36.0668 1.61984 36.1278 1.838 36.1279 2.0605V26.3029C36.1278 26.5254 36.0668 26.7436 35.9517 26.9335C35.8365 27.1234 35.6717 27.2778 35.4752 27.3797C35.2787 27.4816 35.0581 27.5271 34.8376 27.5112C34.6171 27.4953 34.4052 27.4186 34.2251 27.2896L19.2677 16.5381V26.3029C19.2676 26.5254 19.2066 26.7436 19.0915 26.9335C18.9763 27.1234 18.8115 27.2778 18.615 27.3797C18.4185 27.4816 18.1979 27.5271 17.9774 27.5112C17.7569 27.4953 17.545 27.4186 17.3649 27.2896L0.504707 15.1684C0.348591 15.0562 0.22134 14.9082 0.133545 14.7366C0.0457458 14.565 -6.10352e-05 14.3747 -6.10352e-05 14.1817C-6.10352e-05 13.9887 0.0457458 13.7984 0.133545 13.6268C0.22134 13.4552 0.348591 13.3072 0.504707 13.195L17.3649 1.07383C17.545 0.944784 17.7569 0.868114 17.9774 0.852219C18.1979 0.836324 18.4185 0.881817 18.615 0.983715C18.8115 1.08561 18.9763 1.23998 19.0915 1.42991C19.2066 1.61984 19.2676 1.838 19.2677 2.0605V11.8253L34.2251 1.07383Z" fill="#747474"/>
                        </svg>
                    </a>
                    <p class="ml-5 title-card">1</p>
                    <a href="#!" class="ml-5">
                        <svg width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.77291 1.07383C2.59284 0.944784 2.38095 0.868114 2.16045 0.852219C1.93996 0.836324 1.71938 0.881817 1.52287 0.983715C1.32636 1.08561 1.1615 1.23998 1.04637 1.42991C0.93123 1.61984 0.870253 1.838 0.870117 2.0605V26.3029C0.870253 26.5254 0.93123 26.7436 1.04637 26.9335C1.1615 27.1234 1.32636 27.2778 1.52287 27.3797C1.71938 27.4816 1.93996 27.5271 2.16045 27.5112C2.38095 27.4953 2.59284 27.4186 2.77291 27.2896L17.7303 16.5381V26.3029C17.7305 26.5254 17.7914 26.7436 17.9066 26.9335C18.0217 27.1234 18.1866 27.2778 18.3831 27.3797C18.5796 27.4816 18.8002 27.5271 19.0207 27.5112C19.2412 27.4953 19.4531 27.4186 19.6331 27.2896L36.4933 15.1684C36.6495 15.0562 36.7767 14.9082 36.8645 14.7366C36.9523 14.565 36.9981 14.3747 36.9981 14.1817C36.9981 13.9887 36.9523 13.7984 36.8645 13.6268C36.7767 13.4552 36.6495 13.3072 36.4933 13.195L19.6331 1.07383C19.4531 0.944784 19.2412 0.868114 19.0207 0.852219C18.8002 0.836324 18.5796 0.881817 18.3831 0.983715C18.1866 1.08561 18.0217 1.23998 17.9066 1.42991C17.7914 1.61984 17.7305 1.838 17.7303 2.0605V11.8253L2.77291 1.07383Z" fill="black"/>
                        </svg>
                    </a>

                </div>

            </div>
            <!-- Card End -->

            <!-- Edit Modal Start -->
            <div id="pinjam-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-[20px] shadow">
                        <div class="py-6 px-6 lg:px-8">
                            <p class="popup-title mb-5 text-center">Pinjam barang</p>
                            <img class="edit-popup-image mx-auto mb-5" src="https://cdn.discordapp.com/attachments/976696861207433219/984030204844453888/Rectangle_3.jpg">
                            <p class="title-card text-center mt-6">Senter Pembesar</p>
                            <p class="description-card text-center">
                                Alat bercahaya yang dapat memperbesar sesuatu
                            </p>
                            <div class="flex w-full h-full items-center mt-6 bg-gray-200 rounded-[20px]">
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
                            <div class="text-right">
                                <button data-modal-toggle="pinjam-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-[15px] border border-gray-200 text-sm font-medium px-14 py-3.5 hover:text-gray-900 focus:z-10 mr-2">Batal</button>
                                <button data-modal-toggle="pinjam-modal" type="submit" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[15px] text-sm inline-flex items-center px-14 py-3.5 text-center">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Pinjam Modal End -->

            <!-- Modal Success delete Start -->
            <div id="modal-success-delete"
                 class="hidden fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
                <div class="modal-success">
                    <svg width="125" height="125" class="relative rounded-full mx-auto top-10" viewBox="0 0 125 125" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                            stroke="white" stroke-width="7.8125" stroke-miterlimit="10" />
                        <path d="M85.9375 42.9688L53.125 82.0312L39.0625 66.4062" stroke="white" stroke-width="7.8125"
                              stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="mb-2 mx-5 text-white">
                        <p class="font-Default text-center mt-16">
                            <span class="text-32px">Berhasil</span>
                            <br>
                            <span class="text-16px">Data telah dihapus</span>
                        </p>
                    </div>
                    <div class="absolute flex bottom-0 w-full">
                        <button
                            class="btn-konfirm w-full rounded-b-radius20 text-white bg-buttongreen hover:bg-green-500">Close</button>
                    </div>
                </div>
            </div>
            <!-- Modal Success delete End -->

            <!-- Modal Success edit Start -->
            <div id="modal-success-edit"
                 class="hidden fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
                <div class="modal-success">
                    <svg width="125" height="125" class="relative rounded-full mx-auto top-10" viewBox="0 0 125 125" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                            stroke="white" stroke-width="7.8125" stroke-miterlimit="10" />
                        <path d="M85.9375 42.9688L53.125 82.0312L39.0625 66.4062" stroke="white" stroke-width="7.8125"
                              stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="mb-2 mx-5 text-white">
                        <p class="font-Default text-center mt-16">
                            <span class="text-32px">Berhasil</span>
                            <br>
                            <span class="text-16px">Data telah diperbaharui</span>
                        </p>
                    </div>
                    <div class="absolute flex bottom-0 w-full">
                        <button
                            class="btn-konfirm w-full rounded-b-radius20 text-white bg-buttongreen hover:bg-green-500">Close</button>
                    </div>
                </div>
            </div>
            <!-- Modal Success edit End -->

            <!-- Modal Success tambah Start -->
            <div id="modal-success-tambah"
                 class="hidden fixed z-10 inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
                <div class="modal-success">
                    <svg width="125" height="125" class="relative rounded-full mx-auto top-10" viewBox="0 0 125 125" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M109.375 62.5C109.375 36.6211 88.3789 15.625 62.5 15.625C36.6211 15.625 15.625 36.6211 15.625 62.5C15.625 88.3789 36.6211 109.375 62.5 109.375C88.3789 109.375 109.375 88.3789 109.375 62.5Z"
                            stroke="white" stroke-width="7.8125" stroke-miterlimit="10" />
                        <path d="M85.9375 42.9688L53.125 82.0312L39.0625 66.4062" stroke="white" stroke-width="7.8125"
                              stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="mb-2 mx-5 text-white">
                        <p class="font-Default text-center mt-16">
                            <span class="text-32px">Berhasil</span>
                            <br>
                            <span class="text-16px">Data telah ditambahkan</span>
                        </p>
                    </div>
                    <div class="absolute flex bottom-0 w-full">
                        <button
                            class="btn-konfirm w-full rounded-b-radius20 text-white bg-buttongreen hover:bg-green-500">Close</button>
                    </div>
                </div>
            </div>
            <!-- Modal Success tambah End -->

        </div>
    </div>
</template>

