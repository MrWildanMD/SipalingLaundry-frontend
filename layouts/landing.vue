<script lang="ts" setup>
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();

const bottomNavStyle = computed(() => {
  if (mdAndUp.value) {
    return "width: 40%; max-width: 100%; bottom: 20px; left: 50%; transform: translateX(-50%);";
  } else {
    return "width: 80%; max-width: 100%; bottom: 20px; left: 50%; transform: translateX(-50%);";
  }
});
</script>

<template>
  <VLayout>
    <VAppBar flat class="px-lg-16 text-white" color="primary-darken-1" elevation="6">
      <VAppBarTitle class="font-poppins"
      style="font-weight: 700;"
        >SipalingLaundry</VAppBarTitle
      >
      <template v-slot:append>
        <VBtn
          to="/auth"
          prepend-icon="mdi-login-variant"
          variant="outlined"
          nuxt
          class="font-poppins"
          style="font-weight: 700;"
          >Clientzone</VBtn
        >
      </template>
    </VAppBar>

    <VMain>
      <slot />
    </VMain>

    <div class="bottom-nav">
    <a href="#" class="nav-item">
      <span class="mdi mdi-home nav-icon"></span>
      Home
    </a>
    <a href="#" class="nav-item">
      <span class="mdi mdi-folder nav-icon"></span>
      Files
    </a>
    <a href="#" class="nav-item">
      <span class="mdi mdi-magnify nav-icon"></span>
      Search
    </a>
    <a href="#" class="nav-item">
      <span class="mdi mdi-account nav-icon"></span>
      Profile
    </a>
  </div>
  </VLayout>
</template>

<style scoped>
.bottom-nav {
    position: fixed;
    bottom: 15px; /* Adjust the bottom spacing */
    left: 50%;
    transform: translateX(-50%);
    width: 45%; /* Adjust the width */
    background-color: #e07cd7; /* Change this to your secondary background color */
    border-radius: 20px; /* Adjust the border-radius */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
    padding: 8px; /* Adjust the padding */
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff; /* Change text color to white for better visibility */
    text-decoration: none;
    font-size: 12px; /* Adjust the font size */
  }

  .nav-icon {
    font-size: 20px; /* Adjust the icon size */
    margin-bottom: 3px; /* Adjust the margin */
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .bottom-nav {
      width: 70%; /* Adjust the width for smaller screens */
    }
  }

  @media (max-width: 480px) {
    .bottom-nav {
      width: 85%; /* Adjust the width for smaller screens */
      bottom: 10px;
      padding: 5px;
    }

    .nav-item {
      font-size: 10px; /* Adjust the font size */
    }

    .nav-icon {
      font-size: 18px; /* Adjust the icon size */
      margin-bottom: 2px; /* Adjust the margin */
    }
  }
</style>
