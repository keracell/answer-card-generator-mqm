<script setup lang="ts">
const {
  x = 0,
  y = 0,
  text,
  radius = 12,
  textY = 5,
} = defineProps<{
  x: number;
  y: number;
  text: string;
  radius?: number;
  textY?: number;
}>();
</script>

<template>
  <circle :cx="x" :cy="y" :r="radius" />
  <text :x="x" :y="y + textY">{{ text }}</text>
</template>

<style scoped>
circle {
  stroke: var(--color-pink, pink);
  stroke-width: 1.5;
  fill: none;
}

text {
  font-family: Arial, serif;
  font-size: 14px;
  text-anchor: middle;
  fill: var(--color-pink, pink);
}
</style>
