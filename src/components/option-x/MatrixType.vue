<script setup lang="ts">
import OptionXType from "@/components/option-x/OptionXType.vue";
const {
  x = 0,
  y = 0,
  text,
  rows = 3,
  cols = 5,
} = defineProps<{
  x: number;
  y: number;
  text: string;
  rows?: number;
  cols?: number;
}>();
</script>

<template>
  <g :transform="`translate(${x}, ${y})`">
    <text x="10" y="0">{{ text.padStart(3, "&nbsp;") }}</text>
    <OptionXType v-for="i in rows" :key="i" :options="cols" :text="i.toString()" :x="30" :y="(i - 1) * 30" internal />
  </g>
</template>

<style scoped>
text {
  font-family: Arial, serif;
  font-size: 15px;
  text-anchor: middle;
  fill: var(--color-number, pink);
}
</style>
