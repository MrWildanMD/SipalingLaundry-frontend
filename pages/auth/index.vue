<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
useHead({
    title: "Clientzone Auth"
})
const step = ref(1);
const email = ref("");
const password = ref("");
const remember = ref(false);
const loading = ref(false);

const direction = computed(() => {
    if(step.value > 2) return "vertical"
    else return "horizontal"
})

const test = () => {
    alert("LOGIN SUKSES")
    loading.value = false;
}

const login = () => {
    loading.value = true;
    setTimeout(test, 10000);
}

// const login = async () => {
//     await authStore.login({
//         email_hp: email.value,
//         password: password.value
//     });
// }
</script>

<template>
    <VLayout>
        <VAppBar flat>
            <VAppBarNavIcon icon="mdi-arrow-left" nuxt to="/"></VAppBarNavIcon>
        </VAppBar>
        <VMain>
            <VContainer>
        <VRow align="center" justify="center">
            <VCol cols="12" sm="10">
                <VCard class="elevation-6 mt-10">
                    <VWindow v-model="step" :direction="direction">
                        <VWindowItem :value="1">
                            <VRow>
                                <VCol cols="12" sm="6">
                                    <VCardText class="mt-12">
                                        <h4 class="text-center">
                                            Login ke Akun Anda
                                        </h4>
                                        <h5 class="text-center">
                                            Login untuk masuk ke dashboard anda
                                        </h5>
                                        <VRow align="center" justify="center">
                                            <VCol cols="12" sm="8">
                                                <VTextField v-model="email" label="Email/No.HP" outlined dense color="primary-darken-1" autocomplete="false" class="mt-16">
                                                </VTextField>
                                                <VTextField v-model="password" label="Kata Sandi" outlined dense color="primary-darken-1" autocomplete="false" type="password">
                                                </VTextField>
                                                <VRow>
                                                    <VCol cols="12" sm="7">
                                                        <VCheckbox v-model="remember" label="Ingat Saya" class="mt-n1" color="primary-darken-1"></VCheckbox>
                                                    </VCol>
                                                </VRow>
                                                <VBtn :loading="loading" @click.prevent="login" color="primary-darken-1" class="text-white" dark block tile>Login</VBtn>
                                            </VCol>
                                        </VRow>
                                    </VCardText>    
                                </VCol>
                                <VCol cols="12" sm="6" class="bg-primary-darken-1 rounded-bl-xl">
                                    <div style="text-align: center; padding: 180px 0;">
                                        <VCardText class="text-white">
                                            <h3 class="text-center">Lupa kata sandi anda?</h3>
                                            <h6 class="text-center">Anda dapat menyetel ulang kata sandi anda</h6>
                                        </VCardText>
                                        <div class="text-center">
                                            <VBtn tile outlined dark @click="step = 2">
                                                Lupa Kata Sandi
                                            </VBtn>
                                            <VBtn tile outlined dark @click="step = 3">
                                                Daftar
                                            </VBtn>
                                            <VBtn tile outlined dark @click="step = 4">
                                                Verify Email
                                            </VBtn>
                                        </div>
                                    </div>
                                </VCol>
                            </VRow>
                        </VWindowItem>
                        <VWindowItem :value="2">
                            <VRow>
                                <VCol cols="12" sm="6" class="bg-secondary-darken-1 rounded-br-xl">
                                    <div style="text-align: center; padding: 180px 0;">
                                        <VCardText class="text-white">
                                            <h3 class="text-center">Sudah menyetel ulang kata sandi anda?</h3>
                                            <h5 class="text-center">Jika anda sudah menyetel ulang kata sandi anda<br>anda dapat kembali login</h5>
                                        </VCardText>
                                    <div class="text-center">
                                        <VBtn tile outlined dark @click="step--">Login</VBtn>
                                    </div>
                                </div>
                            </VCol>
                            <VCol cols="12" sm="6">
                                <VCardText class="mt-12">
                                    <h4 class="text-center">Mohon masukkan email anda</h4>
                                    <h5 class="text-center text-grey">Jika email anda ada<br>maka anda akan menerima email dari kami</h5>
                                    <VRow align="center" justify="center">
                                        <VCol cols="12" sm="8" >
                                            <VTextField  label="Email" outlined dense color="secondary-darken-1" autocomplete="false" class="mt-4"></VTextField>
                                            <VBtn color="secondary-darken-1" dark block tile>Kirim Permintaan</VBtn>
                                        </VCol>
                                    </VRow>
                                </VCardText>
                            </VCol>
                        </VRow>
                        </VWindowItem>
                        <VWindowItem :value="3">
                            <VRow>
                                <VCol cols="12" sm="6">
                                    <VCardText class="mt-12">
                                        <h4 class="text-center">
                                            Login ke Akun Anda
                                        </h4>
                                        <h5 class="text-center">
                                            Login untuk masuk ke dashboard anda
                                        </h5>
                                        <VRow align="center" justify="center">
                                            <VCol cols="12" sm="8">
                                                <VTextField v-model="email" label="Email/No.HP" outlined dense color="primary-darken-1" autocomplete="false" class="mt-16">
                                                </VTextField>
                                                <VTextField v-model="password" label="Kata Sandi" outlined dense color="primary-darken-1" autocomplete="false" type="password">
                                                </VTextField>
                                                <VRow>
                                                    <VCol cols="12" sm="7">
                                                        <VCheckbox v-model="remember" label="Ingat Saya" class="mt-n1" color="primary-darken-1"></VCheckbox>
                                                    </VCol>
                                                </VRow>
                                                <VBtn @click.prevent="login" color="primary-darken-1" class="text-white" dark block tile>Login</VBtn>
                                            </VCol>
                                        </VRow>
                                    </VCardText>    
                                </VCol>
                                <VCol cols="12" sm="6" class="bg-primary-darken-1 rounded-bl-xl">
                                    <div style="text-align: center; padding: 180px 0;">
                                        <VCardText class="text-white">
                                            <h3 class="text-center">Lupa kata sandi anda?</h3>
                                            <h6 class="text-center">Anda dapat menyetel ulang kata sandi anda</h6>
                                        </VCardText>
                                        <div class="text-center">
                                            <VBtn tile outlined dark @click="step++">
                                                Lupa Kata Sandi
                                            </VBtn>
                                        </div>
                                    </div>
                                </VCol>
                            </VRow>
                        </VWindowItem>
                        <VWindowItem :value="4">
                            <VRow>
                                <VCol cols="12" sm="6" class="bg-secondary-darken-1 rounded-br-xl">
                                    <div style="text-align: center; padding: 180px 0;">
                                        <VCardText class="text-white">
                                            <h3 class="text-center">Sudah menyetel ulang kata sandi anda?</h3>
                                            <h5 class="text-center">Jika anda sudah menyetel ulang kata sandi anda<br>anda dapat kembali login</h5>
                                        </VCardText>
                                    <div class="text-center">
                                        <VBtn tile outlined dark @click="step--">Login</VBtn>
                                    </div>
                                </div>
                            </VCol>
                            <VCol cols="12" sm="6">
                                <VCardText class="mt-12">
                                    <h4 class="text-center">Mohon masukkan email anda</h4>
                                    <h5 class="text-center text-grey">Jika email anda ada<br>maka anda akan menerima email dari kami</h5>
                                    <VRow align="center" justify="center">
                                        <VCol cols="12" sm="8" >
                                            <VTextField  label="Email" outlined dense color="secondary-darken-1" autocomplete="false" class="mt-4"></VTextField>
                                            <VBtn color="secondary-darken-1" dark block tile>Kirim Permintaan</VBtn>
                                        </VCol>
                                    </VRow>
                                </VCardText>
                            </VCol>
                        </VRow>
                        </VWindowItem>
                    </VWindow>
                </VCard>
            </VCol>
        </VRow>
    </VContainer>
        </VMain>
    </VLayout>
</template>

<style scoped>
.rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}

.rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>