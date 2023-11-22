<template>
  <el-popover
    v-model:visible="visible"
    placement="bottom-start"
    :width="430"
    trigger="click"
  >
    <template #reference>
      <div class="result">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{ rotate: visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>

    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="15">
          <el-select v-model="selectValue" placeholder="Select" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            />
          </el-select>
        </el-col>
      </el-row>
      <div class="city">
        <div class="city-item" v-for="(value, key) in cities" :key="key">
          {{ key }}
        </div>
      </div>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import city from '../lib/city';

const result = ref<string>('请选择');
const visible = ref<boolean>(false);
const radioValue = ref<string>('按城市');
const selectValue = ref<string>('');
const cities = ref(city.cities);
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
}
.container {
  padding: 6px;
}
.rotate {
  transform: rotate(180deg);
}

svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  transition: all 0.25s linear;
}
</style>
