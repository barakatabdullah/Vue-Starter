<script setup lang="ts">
const toggleColorScheme = () => {
  const element = document.querySelector("html");
  element?.classList.toggle("dark-mode");
};
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <Button label="Toggle Color Theme" @click="toggleColorScheme" />
  </div>
</template>


<route lang="yaml">
  name: Home
  meta:
  requiresAuth: false
</route>
