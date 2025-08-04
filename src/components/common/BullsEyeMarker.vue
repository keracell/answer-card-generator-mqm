<script setup lang="ts">
const { x = 0, y = 0 } = defineProps<{
  x: number;
  y: number;
}>();
</script>

<template>
  <g :transform="`translate(${x}, ${y})`">
    <circle class="marker" cx="50" cy="50" r="4" />
    <circle class="marker" cx="50" cy="50" r="20" />
    <circle class="marker" cx="50" cy="50" r="36" />
  </g>
</template>

<style scoped>
.marker {
  fill: none;
  stroke: black;
  stroke-width: 8;
}
</style>
