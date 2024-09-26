<script setup lang="ts">
import { loadLanguageAsync } from './utils/functions'

loadLanguageAsync(localStorage.getItem('lang')??'en')
</script>

<template>
  <RouterView />
</template>
