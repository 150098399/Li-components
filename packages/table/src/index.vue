<template>
  <el-table
    v-bind="$attrs"
    :data="tableData"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    :element-loading-background="elementLoadingBackground"
    @row-click="rowClick"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :align="item.aligin"
        :width="item.width"
      >
        <template #default="scope">
          <!-- 可编辑行 -->
          <template v-if="scope.row.rowEdit">
            <el-input type="small" v-model="scope.row[item.prop]"></el-input>
          </template>
          <!-- 非可编辑行 -->
          <template v-else>
            <!-- 可编辑单元格 -->
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div style="display: flex">
                <el-input
                  size="small"
                  v-model="scope.row[item.prop]"
                ></el-input>
                <div @click.stop="clickEditCell">
                  <slot
                    name="editCell"
                    :scope="scope"
                    v-if="$slots.editCell"
                  ></slot>
                  <div v-else class="icons">
                    <el-icon-check
                      class="confirm"
                      @click="confirm(scope)"
                    ></el-icon-check>
                    <el-icon-close
                      class="cancel"
                      @click="cancel(scope)"
                    ></el-icon-close>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <!-- 自定义列 -->
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <!-- 默认展示 -->
              <span v-else>{{ scope.row[item.prop] }}</span>
              <component
                :is="`el-icon-${toLine(editIcon)}`"
                v-if="item.editable"
                class="edit"
                @click.stop="clickEdit(scope)"
              ></component>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>

    <!-- 自定义操作 -->
    <el-table-column
      :label="actionOptions?.label"
      :align="actionOptions?.aligin"
      :width="actionOptions?.width"
    >
      <template #default="scope">
        <slot name="editRow" :scope="scope" v-if="scope.row.rowEdit"></slot>
        <slot v-else name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
  <div
    class="pagination"
    v-if="pagination"
    :style="{ justifyContent: paginationAliginJustify }"
  >
    <el-pagination
      modelValue:currentPage="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref, onMounted, watch } from 'vue';
import { TableOptions } from '../types';
import { toLine } from '../../utils';
import { cloneDeep } from 'lodash';

let props = defineProps({
  // 表格配置
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
  // 自定义加载图标
  elementLoadingSpinner: {
    type: String,
  },
  // 背景遮罩的颜色
  elementLoadingBackground: {
    type: String,
  },
  // 自定义加载图标 (与 element-loading-spinner 相同)
  elementLoadingSvg: {
    type: String,
  },
  // 加载svg的配置
  elementLoadingSvgViewBox: {
    type: String,
  },
  // 可编辑单元格显示的图标
  editIcon: {
    type: String,
    default: 'edit',
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false,
  },
  // 编辑行的按钮标识
  editRowIndex: {
    type: String,
    default: '',
  },

  // 是否显示分页
  pagination: {
    type: Boolean,
    default: false,
  },
  // 当前是第几页数据
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: [10, 20, 30, 50],
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
  },
  // 分页的排列方式
  paginationAligin: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },
});

// 过滤操作选项之后的配置
let tableOptions = computed(() => props.options.filter((item) => !item.action));
// 找出操作项的配置
let actionOptions = computed(() => props.options.find((item) => item.action));
// 表格是否在加载中
let isLoading = computed(() => !props.data || !props.data.length);

// 分页排列方式
let paginationAliginJustify = computed(() => {
  if (props.paginationAligin === 'left') {
    return 'flex-start';
  } else if (props.paginationAligin === 'center') {
    return 'center';
  } else {
    return 'flex-end';
  }
});

// 当前点击的单元格
const currentEdit = ref<string>('');

// 拷贝一份表格的数据
let tableData = ref<any[]>(cloneDeep(props.data));
// 拷贝一份按钮的标识
let cloneEditRowIndex = ref<string>(cloneDeep(props.editRowIndex));

// 点击编辑图标
const clickEdit = (scope: any) => {
  // 唯一标识
  currentEdit.value = scope.$index + scope.column.id;
};

// 监听父组件传递过来的数据
watch(
  () => props.data,
  (val) => {
    tableData.value = cloneDeep(val);
    tableData.value.map((item) => {
      // 代表当前是否是可编辑状态
      item.rowEdit = false;
    });
  },
  { deep: true }
);

// 监听父组件传过来的标识
watch(
  () => props.editRowIndex,
  (val) => {
    console.log(val);

    if (val) {
      cloneEditRowIndex.value = cloneDeep(val);
    }
  }
);
onMounted(() => {
  tableData.value.map((item) => {
    // 代表当前是否是可编辑状态
    item.rowEdit = false;
  });
});

const clickEditCell = () => {
  currentEdit.value = '';
};
// 点击勾
const confirm = (scope: any) => {
  emits('confirm', scope);
};

// 点击叉
const cancel = (scope: any) => {
  emits('cancel', scope);
};

// 点击每行的事件
const rowClick = (row: any, column: any) => {
  // 判断当前点击的是否是操作项的内容
  if (column.label === actionOptions.value!.label) {
    // 编辑行操作
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      row.rowEdit = !row.rowEdit;
      // 重置其他行的rowEdit
      tableData.value.map((item) => {
        if (item !== row) {
          item.rowEdit = false;
        }
      });
      // 重置按钮的标识
      if (!row.rowEdit) {
        emits('update:editRowIndex', '');
      }
    }
  }
};

// 分页事件
const handleSizeChange = (val: number) => {
  emits('sizeChange', val);
};
const handleCurrentChange = (val: number) => {
  emits('currentChange', val);
};

// 分发事件
const emits = defineEmits([
  'confirm',
  'cancel',
  'update:editRowIndex',
  'sizeChange',
  'currentChange',
]);
</script>

<style lang="scss" scoped>
.edit {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  left: 4px;
  cursor: pointer;
}

.icons {
  display: flex;
  position: relative;
  top: 5px;
  svg {
    width: 1em;
    height: 1em;
    margin-left: 8px;
    cursor: pointer;
  }
  .confirm {
    color: red;
  }
  .cancel {
    color: green;
  }
}

.pagination {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>
