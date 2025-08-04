<script setup lang="ts">
import BullsEyeMarker from "@/components/common/BullsEyeMarker.vue";
import RollNo from "@/components/roll-no/RollNo.vue";
import OptionXType from "@/components/option-x/OptionXType.vue";
import NumericType from "@/components/number/NumericType.vue";
import AnswerCardHeader from "@/components/common/AnswerCardHeader.vue";

const sizeWidth = 1600*.78;
const sizeHeight = 1880*.78;
const markerSize = 100;
</script>

<template>
  <div class="body">
    <AnswerCardHeader />

    <svg :viewBox="`0 -60 ${sizeWidth} ${sizeHeight}`" xmlns="http://www.w3.org/2000/svg">
      <BullsEyeMarker :x="0" :y="-60" />
      <BullsEyeMarker :x="sizeWidth - markerSize" :y="-60" />
      <BullsEyeMarker :x="0" :y="sizeHeight - markerSize - 60" />
      <BullsEyeMarker :x="sizeWidth - markerSize" :y="sizeHeight - markerSize - 60" />

      <RollNo :x="150" :y="125" />

      <g v-for="(j, index) in [10, 5]" :key="j" :transform="`translate(125, ${index * 315 + 500})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [5]" :key="j" :transform="`translate(125, ${index * 315 + 1040})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 20).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [10,3]" :key="j" :transform="`translate(405, ${index * 315 + 100})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 30).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType v-for="i in 2" :key="i" :x="430" :y="530 + (i - 1) * 400" :text="(43 + i).toString()" decimal />

      <NumericType v-for="i in 3" :key="i" :x="700" :y="130 + (i - 1) * 400" :text="(45 + i).toString()" decimal />

      <g v-for="(j, index) in [10,10]" :key="j" :transform="`translate(970, ${index * 315 + 100})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 55).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [3]" :key="j" :transform="`translate(970, ${index * 315 + 790})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 79).toString()" :x="0" :y="(i - 1) * 30" />
      </g>
    </svg>
  </div>
</template>
