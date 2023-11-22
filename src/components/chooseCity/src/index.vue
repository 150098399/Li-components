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
          <el-select
            v-model="selectValue"
            placeholder="请搜索城市"
            size="small"
            filterable
            :filter-method="filterMethod"
            @change="changeSelect"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-col>
      </el-row>

      <!-- 按城市 -->
      <template v-if="radioValue === '按城市'">
        <div class="city">
          <div
            class="city-item"
            v-for="(value, key) in cities"
            :key="key"
            @click="clickChat(key)"
          >
            {{ key }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px" :id="key">
              <el-col :span="2">{{ key }}:</el-col>
              <el-col :span="22" class="city-name">
                <div
                  class="city-name-item"
                  v-for="(item, index) in value"
                  :key="item.id"
                  @click="clickItem(item)"
                >
                  {{ item.name }}
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>

      <!-- 按省份 -->
      <template v-else>
        <div class="province">
          <div
            class="province-item"
            v-for="(item, index) in Object.keys(provinces)"
            :key="index"
            @click="clickChat(item)"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template
            v-for="(item, index) in Object.values(provinces)"
            :key="index"
          >
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row style="margin-bottom: 10px" :id="item1.id">
                <el-col :span="3">{{ item1.name }}:</el-col>
                <el-col :span="21" class="province-name">
                  <div
                    class="province-name-item"
                    v-for="(item2, index2) in item1.data"
                    :key="index2"
                    @click="clickProvince(item2)"
                  >
                    {{ item2 }}
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import city from '../lib/city';
import { City } from './types';
import province from '../lib/province.json';

const emits = defineEmits(['changeCity', 'changeProvince']);

const result = ref<string>('请选择');
const visible = ref<boolean>(false);
const radioValue = ref<string>('按省份');
const selectValue = ref<string>('');
// 所有城市数据
const cities = ref(city.cities);
// 所有省份数据
const provinces = ref(province);
const options = ref<City[]>([]);

// 暂存处理过的所有城市数据
const allCity = ref<City[]>([]);

// 按字母-点击城市
const clickItem = (item: City) => {
  result.value = item.name;
  visible.value = false;
  emits('changeCity', item);
};

// 按省份-点击城市
const clickProvince = (item: string) => {
  result.value = item;
  visible.value = false;
  emits('changeProvince', item);
};

// 点击字母
const clickChat = (item: string) => {
  const el = document.getElementById(item);
  if (el) {
    el.scrollIntoView();
  }
};

// 搜索
const filterMethod = (val: string) => {
  const values = Object.values(cities.value).flat(Infinity) as City[];
  if (val === '') {
    options.value = values;
  } else {
    if (radioValue.value === '按城市') {
      // 中英文过滤
      options.value = values.filter((item) => {
        return item.name.includes(val) || item.spell.includes(val);
      });
    } else {
      // 中文过滤
      options.value = values.filter((item) => {
        return item.name.includes(val);
      });
    }
  }
};

const changeSelect = (val: number) => {
  const city = allCity.value.find((item) => item.id === val)!;
  result.value = city.name;
  if (radioValue.value === '按城市') {
    emits('changeCity', city);
  } else {
    emits('changeProvince', city.name);
  }
};

onMounted(() => {
  // 获取下拉框城市数据
  const values = Object.values(cities.value).flat(Infinity) as City[];
  options.value = values;
  allCity.value = values;
});
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

.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;

  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #eee;
    cursor: pointer;
  }
}

.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
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
