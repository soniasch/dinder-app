<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/"><img alt="Dinder logo" class="logo" src="@/assets/cute-logo.png" width="125" height="125" /></RouterLink>

  </header>

  <RouterView />
</template>

<style lang="scss">
  @import "./assets/_mq.scss";
  @import "./assets/app.scss";
</style>
