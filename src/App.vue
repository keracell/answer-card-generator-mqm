<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="no-print flex gap-1">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/blok">Blok</RouterLink>
    <RouterLink to="/test-120">Test-110</RouterLink>
    <RouterLink to="/mag">Mag</RouterLink>
    <RouterLink to="/b89">B89</RouterLink>
    <RouterLink to="/b9-eng">B89 (Eng)</RouterLink>
    <RouterLink to="/b11">B11</RouterLink>
    <RouterLink to="/b11-eng">B11 (Eng)</RouterLink>
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

.flex {
  display: flex;
}

.gap-1 {
  gap: 1em;
}
</style>
