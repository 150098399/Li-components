<template>
  <m-choose-time
    @startChange="startChange"
    @endChange="endChange"
    :startOptions="startOptions"
    :endOptions="endOptions"
  ></m-choose-time>
</template>

<script lang="ts" setup>
interface endValue {
  startTime: string;
  endTime: string;
}

const startOptions = {
  effect: 'dark',
};

const endOptions = {
  effect: 'light',
};

const startChange = (val: string) => {
  console.log(val);
};

const endChange = (val: endValue) => {
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
