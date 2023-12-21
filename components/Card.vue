<template>
  <div class="bg-white p-8 rounded-xl shadow-md">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <div class="text-slate-500">{{ props.title }}</div>
      </div>
      <v-icon size="lg" class="text-4xl text-primary">{{ props.icon }}</v-icon>
    </div>
    <div class="mt-4">
      <div class="text-4xl text-slate-500 font-bold">{{ props.value }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: String,
  title: String,
  value: String,
});
</script>
