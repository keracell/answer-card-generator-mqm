<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="no-print">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/blok">Blok</RouterLink>
    <RouterLink to="/test-120">Test-110</RouterLink>
    <RouterLink to="/mag">Mag</RouterLink>
    <RouterLink to="/b89">B89</RouterLink>
    <RouterLink to="/b11">B11</RouterLink>
    <RouterLink to="/b10">B10</RouterLink>
  </nav>
  <div class="page">

    <RouterView />
  </div>
</template>

<style>
@media print {
  .no-print {
    display: none !important;
  }

  [class*="devtools"] {
    display: none !important;
  }

  .page {
    margin: 1cm;
  }
}
</style>
