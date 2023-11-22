<template>
  <m-choose-date
    @startChange="startChange"
    @endChange="endChange"
  ></m-choose-date>
</template>

<script lang="ts" setup>
interface dateEndVal {
  startDate: Date;
  endDate: Date;
}
const startChange = (val: Date) => {
  console.log(val);
};

const endChange = (val: dateEndVal) => {
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
