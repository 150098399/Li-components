<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

<script lang="ts" setup>
const changeArea = (val: string) => {
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
