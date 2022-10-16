<template>
  <div class="top-config">
    <div class="top-config__control">
      <DropDownApp />
    </div>
    <div class="top-config__toolbar">
      {{ store.state.layer.toolCommand }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import DropDownApp from "../components/DropDownApp.vue";
const store = useStore();
</script>

<style lang="scss" scoped></style>
