<template>
  <div class="main-panel">
    <canvas class="main-panel__layer"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let cnvWidth = ref(0);
let cnvHeight = ref(0);
</script>

<style scoped lang="scss">
.main-panel__layer {
  background-image: url("../assets/images/ps-transparent-bg.png");
}
</style>
