<script setup lang="ts">
import BullsEyeMarker from "@/components/common/BullsEyeMarker.vue";
import RollNo from "@/components/roll-no/RollNo.vue";
import OptionXType from "@/components/option-x/OptionXType.vue";
import NumericType from "@/components/number/NumericType.vue";
import MatrixType from "@/components/option-x/MatrixType.vue";
import AnswerCardHeader from "@/components/common/AnswerCardHeader.vue";

const sizeWidth = 1550;
const sizeHeight = 1800;
const markerSize = 100;
</script>

<template>
  <div class="body">
    <AnswerCardHeader />

    <svg :viewBox="`30 0 ${sizeWidth} ${sizeHeight}`" xmlns="http://www.w3.org/2000/svg">
      <BullsEyeMarker :x="30" :y="0" />
      <BullsEyeMarker :x="sizeWidth - markerSize" :y="0" />
      <BullsEyeMarker :x="30" :y="sizeHeight - markerSize" />
      <BullsEyeMarker :x="sizeWidth - markerSize" :y="sizeHeight - markerSize" />

      <RollNo :x="150" :y="125" />

      <g v-for="(j, index) in [5]" :key="j" :transform="`translate(125, ${index * 315 + 500})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <MatrixType :x="125" :y="690" text="6" :cols="2" :rows="4" />

      <g v-for="(j, index) in [3]" :key="j" :transform="`translate(125, ${index * 315 + 830})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 6).toString()" :x="0" :y="(i - 1) * 30" />
      </g>


      <NumericType :x="150" :y="930" text="10" />

      <MatrixType :x="125" :y="1290" text="11" :cols="2" :rows="4" />

      <g v-for="(j, index) in [3]" :key="j" :transform="`translate(125, ${index * 315 + 1430})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 11).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType :x="430" :y="100" text="15" decimal  />

      <g v-for="(j, index) in [5]" :key="j" :transform="`translate(405, ${index * 315 + 500})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 15).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [10, 10]" :key="j" :transform="`translate(405, ${index * 315 + 680})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 21).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType :x="430" :y="1300" text="42" decimal  />

      <NumericType v-for="i in 3" :key="i" :x="710" :y="100 + (i - 1) * 400" :text="(42 + i).toString()" decimal />

      <MatrixType :x="685" :y="1290" text="46" :cols="5" :rows="3" />

      <g v-for="(j, index) in [9]" :key="j" :transform="`translate(685, ${index * 315 + 1410})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 46).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [10, 10, 10, 6]" :key="j" :transform="`translate(965, ${index * 315 + 120})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 55).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType :x="990" :y="1300" text="92" decimal />

      <NumericType v-for="i in 3" :key="i" :x="1270" :y="100 + (i - 1) * 400" :text="(92 + i).toString()" decimal />

      <MatrixType :x="1245" :y="1290" text="96" :cols="5" :rows="3" />
    </svg>
  </div>
</template>
