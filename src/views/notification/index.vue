<template>
  <div>
    <m-notification :value="10">
      <template #default>
        <m-list
          @clickItem="clickItem"
          @clickAction="clickAction"
          :list="list"
          :actions="actions"
        ></m-list>
      </template>
    </m-notification>
  </div>
</template>

<script lang="ts" setup>
import { list, actions } from './data';

const clickItem = (val: any) => {
  console.log(val);
};
const clickAction = (val: any) => {
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
