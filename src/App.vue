<template>
  <div class="ps-canvas">
    <TopConfig />
    <div class="ps-canvas__main-container">
      <Toolbar />
      <MainPanel />
      <RightConfig />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopConfig from "./views/TopConfig.vue";
import Toolbar from "./views/Toolbar.vue";
import MainPanel from "./views/MainPanel.vue";
import RightConfig from "./views/RightConfig.vue";
</script>

<style scoped></style>
