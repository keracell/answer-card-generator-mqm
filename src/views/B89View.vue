<script setup lang="ts">
import BullsEyeMarker from "@/components/common/BullsEyeMarker.vue";
import RollNo from "@/components/roll-no/RollNo.vue";
import OptionXType from "@/components/option-x/OptionXType.vue";
import NumericType from "@/components/number/NumericType.vue";
import MatrixType from "@/components/option-x/MatrixType.vue";
import AnswerCardHeader from "@/components/common/AnswerCardHeader.vue";

const sizeWidth = 1600*.87;
const sizeHeight = 1880*.87;
const markerSize = 100;
</script>

<template>
  <div class="body">
    <AnswerCardHeader />

    <svg :viewBox="`0 -10 ${sizeWidth} ${sizeHeight}`" xmlns="http://www.w3.org/2000/svg">
      <BullsEyeMarker :x="0" :y="-10" />
      <BullsEyeMarker :x="sizeWidth - markerSize" :y="-10" />
      <BullsEyeMarker :x="0" :y="sizeHeight - markerSize - 10" />
      <BullsEyeMarker :x="sizeWidth - markerSize" :y="sizeHeight - markerSize - 10" />

      <RollNo :x="150" :y="125" />

      <g v-for="(j, index) in [10, 8]" :key="j" :transform="`translate(125, ${index * 315 + 500})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [8]" :key="j" :transform="`translate(125, ${index * 315 + 1090})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 20).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [5]" :key="j" :transform="`translate(125, ${index * 315 + 1370})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 30).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [10]" :key="j" :transform="`translate(405, ${index * 315 + 100})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 35).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType v-for="i in 3" :key="i" :x="430" :y="410 + (i - 1) * 380" :text="(45 + i).toString()" decimal />

      <NumericType v-for="i in 3" :key="i" :x="700" :y="85 + (i - 1) * 380" :text="(48 + i).toString()" decimal />


      <g v-for="(j, index) in [10]" :key="j" :transform="`translate(675, ${index * 315 + 1245})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 55).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [2]" :key="j" :transform="`translate(970, ${index * 315 + 100})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 65).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType :x="995" :y="180" text="68" decimal />


      <g v-for="(j, index) in [7]" :key="j" :transform="`translate(970, ${index * 315 + 580})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 68).toString()" :x="0" :y="(i - 1) * 30" />
      </g>


      <NumericType :x="995" :y="810" text="76" decimal />

      <g v-for="(j, index) in [3]" :key="j" :transform="`translate(970, ${index * 315 + 1245})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 76).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <MatrixType :x="970" :y="1390" :rows="4" :cols="2" text="80"/>
    </svg>
  </div>
</template>
