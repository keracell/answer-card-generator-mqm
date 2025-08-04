<script setup lang="ts">
import CircleWithText from "@/components/common/CircleWithText.vue";

const {
  x = 0,
  y = 0,
  yGap = 30,
} = defineProps<{
  x: number;
  y: number;
  yGap?: number;
}>();
</script>

<template>
  <g :transform="`translate(${x}, ${y})`">
    <CircleWithText v-for="i in 10" :key="i" :text="(i - 1).toString()" :x="0" :y="(i - 1) * yGap" />
  </g>
</template>
