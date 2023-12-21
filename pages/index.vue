<script setup lang="ts">
useHead({
  title: 'SipalingLaundry'
});
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <section id="hero">
    <div class="bg-primary-darken-1">
      <VContainer fluid>
        <VRow justify="space-between" class="mx-md-12 align-center pt-md-8">
          <VCol md="5" sm="5">
            <h2 class="text-white font-weight-bold">Laundry</h2>
            <h3 class="text-white font-weight-medium">Dry Cleaning</h3>
            <p class="mt-5 text-justify text-body-1">
              Selamat datang di
              <span class="text-secondary font-weight-bold text-h6"
                >SipalingLaundry</span
              >, solusi terbaik untuk kebutuhan laundry Anda. Dapatkan pelayanan
              cepat, efisien, dan terpercaya untuk mencuci dan merawat pakaian
              Anda. Dengan harga yang kompetitif dan hasil cuci yang memuaskan,
              kami memberikan kenyamanan dan kebersihan yang Anda butuhkan.
              Layanan pickup dan delivery kami membuat proses laundry menjadi
              lebih praktis dan mudah. Hubungi kami sekarang dan rasakan
              perbedaan dengan
              <span class="text-secondary font-weight-bold text-h6"
                >SipalingLaundry</span
              >!
            </p>
          </VCol>
          <VCol md="6" sm="6" cols="12">
            <div
              style="
                position: relative;
                padding-bottom: 56.25%;
                height: 0;
                overflow: hidden;
              "
            >
              <video
                loop
                autoplay
                muted
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  object-fit: cover; /* Ensure the video covers the container */
                  border-radius: 1rem; /* Apply rounded corners */
                "
              >
                <source src="~/assets/animations/anim2.mp4" />
              </video>
            </div>
          </VCol>
        </VRow>
      </VContainer>
      <div class="d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fill-opacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,96C384,85,480,107,576,138.7C672,171,768,213,864,208C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  </section>
  <div>
    AAAAAAAAAAAAA
  </div>
</template>

<style scoped>
h2 {
  font-size: 3.75rem !important;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em !important;
  font-family: "Poppins", sans-serif !important;
  text-transform: none !important;
}

h3 {
  font-size: 3rem !important;
  font-weight: 300;
  line-height: 3.125rem;
  letter-spacing: normal !important;
  font-family: "Poppins", sans-serif !important;
  text-transform: none !important;
}
</style>
