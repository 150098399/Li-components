<template>
  <m-table
    border
    :data="tableData"
    :options="options"
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    isEditRow
    v-model:editRowIndex="editRowIndex"
    pagination
    :total="total"
    :currentPage="current"
    paginationAligin="right"
    @confirm="confirm"
    @cancel="cancel"
    @sizeChange="sizeChange"
    @currentChange="currentChange"
  >
    <!-- 自定义操作 -->
    <template #action="{ scope }">
      <el-button type="primary" @click="edit(scope)">编辑</el-button>
      <el-button type="danger" @click="del(scope)">删除</el-button>
    </template>
    <template #editRow="{ scope }">
      <el-button>确认</el-button>
      <el-button>取消</el-button>
    </template>

    <!-- 自定义列 -->
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top" width="auto">
        <template #default>
          <div>name: {{ scope.row.name }}</div>
          <div>address: {{ scope.row.address }}</div>
        </template>
        <template #reference>
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-popover>
    </template>

    <!-- 自定义编辑的确认取消图标 -->
    <!-- <template #editCell>
      <div style="display: flex">
        <el-button type="primary">ok</el-button>
        <el-button>cal</el-button>
      </div>
    </template> -->
  </m-table>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { TableOptions } from "../../components/table/types";
import axios from "axios";
interface TableData {
  date: string;
  name: string;
  address: string;
}
let tableData = ref<TableData[]>([]);

let current = ref<number>(1);
let pageSize = ref<number>(10);
let total = ref<number>(0);

onMounted(() => {
  getData();
});

// 表格配置
const options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    aligin: "right",
    editable: true,
  },
  {
    label: "姓名",
    slot: "name",
    prop: "name",
    aligin: "center",
    width: 200,
  },
  {
    label: "地址",
    prop: "address",
    aligin: "center",
    editable: true,
  },
  {
    prop: "",
    label: "操作",
    aligin: "center",
    action: true,
  },
];

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;

const editRowIndex = ref<string>("");
const edit = (scope: any) => {
  console.log(scope);
  editRowIndex.value = "edit";
};

const del = (scope: any) => {
  console.log(scope);
};

const confirm = (scope: any) => {
  console.log("父", scope);
};
const cancel = (scope: any) => {
  console.log("父", scope);
};
const sizeChange = (val: number) => {
  pageSize.value = val;
  getData();
};
const currentChange = (val: number) => {
  current.value = val;
  getData();
};

const getData = () => {
  axios
    .post("/api/list", {
      current: current.value,
      pageSize: pageSize.value,
    })
    .then((res: any) => {
      tableData.value = res.data.data.rows;
      total.value = res.data.data.total;
    });
};
</script>

<style lang="scss" scoped></style>
