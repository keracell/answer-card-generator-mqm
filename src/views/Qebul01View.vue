<script setup lang="ts">
import BullsEyeMarker from "@/components/common/BullsEyeMarker.vue";
import RollNo from "@/components/roll-no/RollNo.vue";
import OptionXType from "@/components/option-x/OptionXType.vue";
import NumericType from "@/components/number/NumericType.vue";
import AnswerCardHeader from "@/components/common/AnswerCardHeader.vue";

const sizeWidth = 1600 * 0.95;
const sizeHeight = 1880 * 0.95;
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

      <RollNo :x="150" :y="105" />

      <!-- Col 1: Closed 1-27 -->
      <g v-for="(j, index) in [10, 10, 7]" :key="'c1-' + index" :transform="`translate(130, ${index * 315 + 480})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <!-- Col 2: Numeric 28-30 -->
      <NumericType
        decimal
        v-for="i in 3"
        :key="'n28-' + i"
        :x="440"
        :y="100 + (i - 1) * 380"
        :text="(27 + i).toString()"
      />

      <!-- Col 2: Closed 31-40 -->
      <g v-for="(j, index) in [10]" :key="'c2-' + index" :transform="`translate(420, ${index * 315 + 1270})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 30).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <!-- Col 3: Closed 41-49 -->
      <g v-for="(j, index) in [9]" :key="'c3-' + index" :transform="`translate(680, ${index * 315 + 140})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 40).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <!-- Col 3: Numeric 50-52 -->
      <NumericType
        decimal
        v-for="i in 3"
        :key="'n50-' + i"
        :x="700"
        :y="480 + (i - 1) * 380"
        :text="(49 + i).toString()"
      />

      <!-- Col 4: Numeric 53-55 -->
      <NumericType
        decimal
        v-for="i in 3"
        :key="'n53-' + i"
        :x="960"
        :y="100 + (i - 1) * 380"
        :text="(52 + i).toString()"
      />



      <!-- Col 3: Closed 56-65 -->
      <g v-for="(j, index) in [15]" :key="'c4-' + index" :transform="`translate(940, ${index * 315 + 1270})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 55).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <!-- Col 5: Closed 76-82 -->
      <g v-for="(j, index) in [12]" :key="'c5-' + index" :transform="`translate(1220, ${index * 315 + 100})`">
        <OptionXType v-for="i in j" :key="i" :text="(index * 10 + i + 70).toString()" :x="0" :y="(i - 1) * 30" />
      </g>

      <!-- Col 5: Numeric 83-85 -->
      <NumericType decimal v-for="i in 3" :key="'n83-' + i" :x="1220" :y="480 + (i - 1) * 380" :text="(82 + i).toString()" />
    </svg>
  </div>
</template>
