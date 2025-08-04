<script setup lang="ts">
import NumColumn from "@/components/number/NumColumn.vue";
import NumBlockRect from "@/components/roll-no/NumBlockRect.vue";

const {
  x = 0,
  y = 0,
  size = 6,
  text = "",
  decimal = false,
} = defineProps<{
  x: number;
  y: number;
  size?: number;
  text: string;
  decimal?: boolean;
}>();
</script>

<template>
  <g :transform="`translate(${x}, ${y})`">
    <text x="-20" y="18">{{ text.padStart(3, "&nbsp;") }}</text>
    <NumBlockRect v-for="i in size" :key="i" :x="(i - 1) * 30" :y="0" />
    <NumColumn v-for="i in size" :key="i" :x="15 + (i - 1) * 30" :y="47" :decimal />
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
