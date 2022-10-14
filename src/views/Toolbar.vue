<template>
  <div class="toolbar">
    <ToolbarButton
      :key="obj.key"
      v-for="obj in iconList"
      :sign="obj.key"
      :icon="obj.icon"
      :selected="obj.key === selectedButton"
      @click="clickToolbarButton"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import ToolbarButton from "../components/ToolbarButton.vue";
let selectedButton = ref("move");
const iconList = reactive([
  {
    icon: "iconfont icon-move",
    key: "move",
  },
  {
    icon: "iconfont icon-select-circle",
    key: "select-circle",
  },
  {
    icon: "iconfont icon-select-rectangle",
    key: "select-rectangle",
  },
  {
    icon: "iconfont icon-oval",
    key: "draw-oval",
  },
  {
    icon: "iconfont icon-rectangle",
    key: "draw-rectangle",
  },
  {
    icon: "iconfont icon-pancel",
    key: "draw-pancel",
  },
  {
    icon: "iconfont icon-dropper",
    key: "get-color",
  },
  {
    icon: "iconfont icon-text",
    key: "input-text",
  },
  {
    icon: "iconfont icon-rubber",
    key: "clear-canvas",
  },
  {
    icon: "iconfont icon-crop",
    key: "crop-canvas",
  },
]);
function clickToolbarButton(key: string) {
  selectedButton.value = key;
}
</script>

<style scoped></style>
