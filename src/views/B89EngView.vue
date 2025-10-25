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

      <g v-for="(j, index) in [10, 5]" :key="j" :transform="`translate(125, ${index * 325 + 500})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType :x="140" :y="1015" text="16" decimal />

      <NumericType v-for="i in 3" :key="i" :x="430" :y="175 + (i - 1) * 420" :text="(16 + i).toString()" decimal />

      <NumericType v-for="i in 2" :key="i" :x="700" :y="175 + (i - 1) * 420" :text="(19 + i).toString()" decimal />

      <g v-for="(j, index) in [12]" :key="j" :transform="`translate(675, ${index * 315 + 1032})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 25).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <NumericType :x="995" :y="120" text="38" decimal />


      <g v-for="(j, index) in [7]" :key="j" :transform="`translate(970, ${index * 315 + 540})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 38).toString()" :x="0" :y="(i - 1) * 30" />
      </g>


      <NumericType :x="995" :y="770" text="46" decimal />

      <g v-for="(j, index) in [3]" :key="j" :transform="`translate(970, ${index * 315 + 1190})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 76).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <MatrixType :x="970" :y="1310" :rows="4" :cols="2" text="80"/>
    </svg>
  </div>
</template>
