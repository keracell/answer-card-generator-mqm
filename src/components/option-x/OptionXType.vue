<script setup="" lang="ts">
import CircleWithText from "@/components/common/CircleWithText.vue";

const {
  x = 0,
  y = 0,
  options = 5,
  text = "",
  xGap = 30,
  internal = false,
} = defineProps<{
  x: number;
  y: number;
  options?: number;
  text: string;
  xGap?: number;
  internal?: boolean;
}>();
</script>

<template>
  <g :transform="`translate(${x}, ${y})`">
    <text x="10" y="5" :fill="internal ? 'var(--color-pink, pink)' : 'var(--color-number)'">{{
      text.padStart(3, "&nbsp;")
    }}</text>
    <CircleWithText v-for="i in options" :key="i" :x="40 + (i - 1) * xGap" :y="0" :text="String.fromCharCode(i + 64)" />
  </g>
</template>

<style scoped>
text {
  font-family: Arial, serif;
  font-size: 15px;
  text-anchor: middle;
}
</style>
