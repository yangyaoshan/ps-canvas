<template>
  <div>
    <canvas
      v-contextmenu="{ name: 'canvas-layer', id: '123' }"
      class="canvas-layer"
      ref="canvasLayer"
      v-bind="$attrs"
    ></canvas>
    <context-menu name="canvas-layer">
      <!-- <context-menu-submenu :label="'查看'">
      </context-menu-submenu> -->
      <context-menu-item>取消选择</context-menu-item>
      <context-menu-item>填充</context-menu-item>
    </context-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
// import { calcRectParams } from "../utils/calc";
import SelectRectangle from "../classes/SelectRectangle";

const canvasLayer = ref();
let cnv: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

// defineProps({
//   drawPosition: {
//     type: Object,
//   }
// })

const props = defineProps<{
  drawPosition: DrawPosition;
  command: ToolCommand;
  drawStatus: DrawStatus;
}>();
// const emit = defineEmits(["end"]);
const drawPosition = props.drawPosition;
let operator: SelectRectangle;
// let cnvStyle: CnvStyle;
onMounted(() => {
  cnv = canvasLayer.value;
  ctx = cnv.getContext("2d") as CanvasRenderingContext2D;
  // cnvStyle = {
  //   left: cnv.offsetLeft,
  //   top: cnv.offsetTop,
  //   width: cnv.width,
  //   height: cnv.height,
  // };
  operator = new SelectRectangle(cnv, ctx);
  window.requestAnimationFrame(draw);
});
function draw() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  ctx.save();
  // ctx.strokeStyle = "rgba(0,0,0,1)";
  // const params: {
  //   x: number;
  //   y: number;
  //   width: number;
  //   height: number;
  // } = calcRectParams(drawPosition, cnvStyle);
  // ctx.setLineDash([3, 2]);
  // ctx.lineCap = "square";
  // ctx.strokeRect(params.x, params.y, params.width, params.height);
  operator.draw(drawPosition);

  ctx.restore();
  window.requestAnimationFrame(draw);
}
function isInRange(
  position: MousePosition,
  { left, top, width, height }: CnvStyle
) {
  return (
    position.x >= left &&
    position.y >= top &&
    position.x <= left + width &&
    position.y <= top + height
  );
}
</script>

<style scoped lang="scss">
canvas {
}
</style>
