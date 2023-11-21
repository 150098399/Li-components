<template>
  <div class="flex">
    <m-trend text="营业额" upIcon="Sunny"></m-trend>
    <m-trend text="销售额" type="down" downIcon="Sunny"></m-trend>
    <m-trend>插槽形式</m-trend>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
