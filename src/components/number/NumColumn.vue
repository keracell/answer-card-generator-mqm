<script setup lang="ts">
import CircleWithText from "@/components/common/CircleWithText.vue";

const {
  x = 0,
  y = 0,
  yGap = 30,
  decimal = false,
} = defineProps<{
  x: number;
  y: number;
  yGap?: number;
  decimal?: boolean;
}>();
</script>

<template>
  <g :transform="`translate(${x}, ${y})`">
    <CircleWithText v-for="i in 10" :key="i" :text="(i % 10).toString()" :x="0" :y="(i - 1) * yGap" />
    <CircleWithText v-if="decimal" text="," :x="0" :y="10 * yGap" :text-y="1" text-size="32px" />
  </g>
</template>
