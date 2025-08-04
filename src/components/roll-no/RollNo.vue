<script setup lang="ts">
import NumColumnRollNo from "@/components/roll-no/NumColumnRollNo.vue";
import NumBlockRect from "@/components/roll-no/NumBlockRect.vue";

const {
  x = 0,
  y = 0,
  size = 7,
} = defineProps<{
  x: number;
  y: number;
  size?: number;
}>();
</script>

<template>
  <g :transform="`translate(${x}, ${y})`">
    <rect x="-5" y="-40" class="frame" :width="10 + size * 30" />
    <text x="105" y="-15" w="100">İŞ NÖMRƏSİ</text>
    <NumBlockRect v-for="i in size" :key="i" :x="(i - 1) * 30" :y="0" />
    <NumColumnRollNo v-for="i in size" :key="i" :x="15 + (i - 1) * 30" :y="47" />
  </g>
</template>

<style scoped>
.frame {
  height: 375px;
  stroke: var(--color-pink, pink);
  fill: none;
}

text {
  font-family: Arial, serif;
  font-size: 18px;
  text-anchor: middle;
  fill: var(--color-pink, pink);
}
</style>
