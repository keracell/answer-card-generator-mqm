<script setup lang="ts">
import BullsEyeMarker from "@/components/common/BullsEyeMarker.vue";
import RollNo from "@/components/roll-no/RollNo.vue";
import OptionXType from "@/components/option-x/OptionXType.vue";
import AnswerCardHeader from "@/components/common/AnswerCardHeader.vue";

const sizeWidth = 1600*.65;
const sizeHeight = 1880*.65;
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

      <RollNo :x="150" :y="135" />

      <g v-for="(j, index) in [10, 10, 10]" :key="j" :transform="`translate(440, ${index * 315 + 180})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 0).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [10, 10, 10]" :key="j" :transform="`translate(695, ${index * 315 + 180})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 30).toString()" :x="0" :y="(i - 1) * 30" />
      </g>


    </svg>
  </div>
</template>
