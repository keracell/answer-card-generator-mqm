<script setup lang="ts">
import BullsEyeMarker from "@/components/common/BullsEyeMarker.vue";
import RollNo from "@/components/roll-no/RollNo.vue";
import OptionXType from "@/components/option-x/OptionXType.vue";
import NumericType from "@/components/number/NumericType.vue";
import AnswerCardHeader from "@/components/common/AnswerCardHeader.vue";
import MatrixType from "@/components/option-x/MatrixType.vue";

const sizeWidth = 1600*.79;
const sizeHeight = 1880*.79;
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

      <RollNo :x="120" :y="53" />

      <g v-for="(j, index) in [10, 5]" :key="j" :transform="`translate(125, ${index * 315 + 415})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [5]" :key="j" :transform="`translate(125, ${index * 315 + 915})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 20).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [9]" :key="j" :transform="`translate(125, ${index * 315 + 1100})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 30).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <g v-for="(j, index) in [4]" :key="j" :transform="`translate(395, ${index * 315 + 70})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 39).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType v-for="i in 3" :key="i" :x="420" :y="200 + (i - 1) * 400" :text="(43 + i).toString()" decimal />

      <NumericType v-for="i in 2" :key="i" :x="685" :y="200 + (i - 1) * 400" :text="(46 + i).toString()" decimal />

      <g v-for="(j, index) in [12]" :key="j" :transform="`translate(660, ${index * 315 + 1015})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 55).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType :x="980" :y="53" text="68" decimal />

      <g v-for="(j, index) in [7]" :key="j" :transform="`translate(955, ${index * 315 + 460})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 68).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType :x="980" :y="690" text="76" decimal />



      <g v-for="(j, index) in [3]" :key="j" :transform="`translate(955, ${index * 315 + 1105})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 76).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <MatrixType :x="955" :y="1240" text="80" :cols="2" :rows="4" />
    </svg>
  </div>
</template>
