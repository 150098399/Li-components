<template>
  <div style="width: 200px">
    <!-- <m-menu :data="data1" defaultActive="2" name="a" index="b" icon="c" children="d" ></m-menu> -->
    <m-infinite-menu
      :data="data1"
      name="a"
      index="b"
      icon="c"
      children="d"
    ></m-infinite-menu>
  </div>
</template>

<script lang="ts" setup>
const data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document',
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document',
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1 ',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1 ',
            b: '3-1-1',
            c: 'Document',
          },
        ],
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
