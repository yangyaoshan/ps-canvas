<template>
  <div class="toolbar-button">
    <button
      :class="{ 'toolbar-button__inner': true, selected: selected }"
      @click="handleClick"
    >
      <i :class="props.icon"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);
const props = defineProps({
  icon: {
    type: String,
    require: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
});
function handleClick(ev: Event) {
  ev.stopPropagation();
  emit("click");
}
</script>

<style scoped lang="scss">
// 组件样式start
.toolbar-button {
  > button.toolbar-button__inner {
    border: none;
    width: 26px;
    height: 26px;
    padding: 4px;
    background: none;
    &:hover {
      border: 1px #ccc solid;
    }
    &.selected {
      background: #efefef;
      border: 1px #ccc solid;
    }
    > i {
      font-size: 16px;
    }
  }
}
// 组件样式end
</style>
