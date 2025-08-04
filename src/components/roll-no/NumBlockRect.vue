<script setup lang="ts">
const { x = 0, y = 0 } = defineProps<{
  x: number;
  y: number;
}>();
</script>
<template>
  <rect class="block-rect" :x="x" :y="y" />
</template>

<style scoped>
.block-rect {
  width: 30px;
  height: 29px;
  fill: none;
  stroke: black;
  stroke-width: 1.5;
}
</style>
