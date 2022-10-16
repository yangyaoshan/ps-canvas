<template>
  <div>
    <ElDropdown
      class="top-config__control__drop-down"
      @command="handleCommand"
      trigger="click"
    >
      <span class="el-dropdown-link">文件</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            :key="item.command"
            :command="item.command"
            v-for="item in dropdownItem"
          >
            {{ item.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </ElDropdown>
    <div>
      <DialogAppConfigVue v-model="newAppVisible" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import DialogAppConfigVue from "./DialogAppConfig.vue";
const store = useStore();
const dropdownItem = [
  {
    name: "新建图层",
    command: "newApp",
  },
];
let newAppVisible = ref(false);
interface CommandHandler {
  [key: string]: Function | undefined;
}
const commandHandler: CommandHandler = {
  newApp() {
    newAppVisible.value = true;
  },
};
function handleCommand(command: string) {
  console.log(
    "file: DropDownApp.vue ~ line 22 ~ handleCommand ~ command",
    command
  );
  const cmd = commandHandler[command];
  cmd && cmd();
  // store.commit("layer/changeTool", {
  //   command
  // });
}
</script>

<style scoped></style>
