<script lang="ts" setup>

</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}

.slide-back-enter-active, .slide-back-leave-active {
  transition: transform 0.5s;
}

.slide-back-enter-from, .slide-back-leave-to {
  transform: translateX(-100%);
}

.slide-back-enter-to, .slide-back-leave-from {
  transform: translateX(0);
}
</style>