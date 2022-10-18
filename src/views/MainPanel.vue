<template>
  <div
    class="main-panel"
    :class="`main-panel--${command}`"
    ref="mainPanel"
    @mousedown="mousedown"
    @mousemove="mousemove"
    @mouseup="mouseup"
  >
    <div
      v-if="appInfo"
      class="main-panel__layer"
      :style="{ width: appInfo.width + 'px', height: appInfo.height + 'px' }"
    >
      <CanvasLayer
        :width="appInfo.width"
        :height="appInfo.height"
        :drawPosition="drawPosition"
        :command="command"
        :drawStatus="drawStatus"
        @end="endDraw"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import CanvasLayer from "../components/CanvasLayer.vue";

const store = useStore();
const appInfo = computed(() => store.state.appInfo);
const layers = computed(() => store.state.layer.layers);
const command = computed(() => store.state.layer.toolCommand);
const mainPanel = ref();
// console.log("file: MainPanel.vue ~ line 30 ~ mainPanel", mainPanel.value);
let drawPosition: DrawPosition = {
  start: {
    x: 0,
    y: 0,
  },
  end: {
    x: 0,
    y: 0,
  },
};

// 是否处于编辑状态中，鼠标按下进入，抬起退出
let drawStatus: Ref<DrawStatus> = ref("end");
let panelOffset;
onMounted(() => {
  panelOffset = {
    x: mainPanel.value.offsetLeft,
    y: mainPanel.value.offsetTop,
  };
  console.log(
    "file: MainPanel.vue ~ line 46 ~ onMounted ~ panelOffset",
    panelOffset
  );
  // debugger;
});
function mousedown(e: MouseEvent) {
  if (e.button === 0) {
    const x = e.clientX;
    const y = e.clientY;
    drawPosition.start.x = x;
    drawPosition.start.y = y;
    drawPosition.end.x = x;
    drawPosition.end.y = y;
    drawStatus.value = "start";
    console.log("file: MainPanel.vue ~ line 23 ~ start ~ x, y", x, y);
  }
}
function mouseup(e: MouseEvent) {
  if (e.button === 0 && drawStatus.value !== "end") {
    const x = e.clientX;
    const y = e.clientY;
    drawPosition.end.x = x;
    drawPosition.end.y = y;
    console.log("file: MainPanel.vue ~ line 23 ~ mouseup ~ x, y", x, y);
    drawStatus.value = "end";
  }
}
function mousemove(e: MouseEvent) {
  if (e.button === 0 && drawStatus.value !== "end") {
    const x = e.clientX;
    const y = e.clientY;
    drawPosition.end.x = x;
    drawPosition.end.y = y;
    drawStatus.value = "moving";
    console.log("file: MainPanel.vue ~ line 23 ~ mousemove ~ x, y", x, y);
  }
}
function clearDrawPosition(position: DrawPosition) {
  position.start.x = 0;
  position.start.y = 0;
  position.end.x = 0;
  position.end.y = 0;
}
function endDraw() {
  drawStatus.value = "end";
}
// TODO:边界问题待解决
</script>

<style scoped lang="scss">
.main-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  &.main-panel--SelectRectangle,
  &.main-panel--SelectCircle,
  &.main-panel--DrawOval,
  &.main-panel--DrawRectangle {
    cursor: crosshair;
  }
  .main-panel__layer {
    background: #fff;
    // background-image: url("../assets/images/ps-transparent-bg.png");
  }
}
</style>
