<template>
  <m-progress :percentage="50" isAnimation :time="1000"></m-progress>
  <m-progress
    type="circle"
    :percentage="100"
    status="success"
    isAnimation
    :time="1000"
  ></m-progress>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
