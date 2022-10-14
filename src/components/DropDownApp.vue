<template>
  <ElDropdown>
    <span class="el-dropdown-link">文件</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :key="item.command" v-for="item in dropdownItem">
          {{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </ElDropdown>
</template>

<script setup lang="ts">
const dropdownItem = [
  {
    name: "新建图层",
    command: "newLayer",
  },
];
</script>

<style scoped></style>
