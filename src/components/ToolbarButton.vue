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
  sign: {
    type: String,
    require: true,
  },
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
  emit("click", props.sign);
}
</script>

<style scoped></style>
