<script setup lang="ts">
import BullsEyeMarker from "@/components/common/BullsEyeMarker.vue";
import RollNo from "@/components/roll-no/RollNo.vue";
import OptionXType from "@/components/option-x/OptionXType.vue";
import NumericType from "@/components/number/NumericType.vue";
import MatrixType from "@/components/option-x/MatrixType.vue";
import AnswerCardHeader from "@/components/common/AnswerCardHeader.vue";

const sizeWidth = 1600;
const sizeHeight = 1880;
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

      <g v-for="(j, index) in [10, 10, 2]" :key="j" :transform="`translate(125, ${index * 315 + 500})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType :x="150" :y="1200" text="23" decimal />
      <NumericType v-for="i in 3" :key="i" :x="430" :y="100 + (i - 1) * 400" :text="(23 + i).toString()" decimal />

      <MatrixType :x="405" :y="1310" text="27" />

      <g :transform="`translate(405, 1480)`">
        <OptionXType v-for="i in 10" :key="i" :text="(30 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [10, 2]" :key="j" :transform="`translate(675, ${index * 315 + 105})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + 40 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType v-for="i in 3" :key="i" :x="700" :y="500 + (i - 1) * 400" :text="(52 + i).toString()" decimal />
      <NumericType :x="980" :y="100" text="56" decimal />

      <MatrixType :x="955" :y="510" text="57" />

      <g v-for="(j, index) in [10, 10, 2]" :key="j" :transform="`translate(955, ${index * 315 + 680})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + 60 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType :x="980" :y="1400" text="83" decimal />

      <NumericType v-for="i in 3" :key="i" :x="1260" :y="100 + (i - 1) * 400" :text="(83 + i).toString()" decimal />

      <MatrixType :x="1235" :y="1310" text="87" />
    </svg>
  </div>
</template>
