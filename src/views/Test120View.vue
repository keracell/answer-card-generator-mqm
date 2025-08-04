<script setup lang="ts">
import BullsEyeMarker from "@/components/common/BullsEyeMarker.vue";
import RollNo from "@/components/roll-no/RollNo.vue";
import OptionXType from "@/components/option-x/OptionXType.vue";
import AnswerCardHeader from "@/components/common/AnswerCardHeader.vue";

const sizeWidth = 1600*.8;
const sizeHeight = 1880*.8;
const markerSize = 100;
</script>

<template>
  <div class="body">
    <AnswerCardHeader />

    <svg :viewBox="`0 0 ${sizeWidth} ${sizeHeight}`" xmlns="http://www.w3.org/2000/svg">
      <BullsEyeMarker :x="0" :y="0" />
      <BullsEyeMarker :x="sizeWidth - markerSize" :y="0" />
      <BullsEyeMarker :x="0" :y="sizeHeight - markerSize" />
      <BullsEyeMarker :x="sizeWidth - markerSize" :y="sizeHeight - markerSize" />

      <RollNo :x="150" :y="125" />

      <g v-for="(j, index) in [10, 10]" :key="j" :transform="`translate(125, ${index * 315 + 500})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [10, 10, 10]" :key="j" :transform="`translate(425, ${index * 315 + 185})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 20).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [10, 10, 10]" :key="j" :transform="`translate(665, ${index * 315 + 185})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 50).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [10, 10, 10]" :key="j" :transform="`translate(905, ${index * 315 + 185})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 80).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

    </svg>
  </div>
</template>
