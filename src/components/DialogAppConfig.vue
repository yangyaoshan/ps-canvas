<template>
  <el-dialog width="400px" title="新建" v-bind="$attrs">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="60px"
      class="demo-ruleForm"
      size="small"
      status-icon
    >
      <el-form-item label="宽度" prop="width">
        <el-input v-model="ruleForm.width" />
      </el-form-item>
      <el-form-item label="高度" prop="height">
        <el-input v-model="ruleForm.height" />
      </el-form-item>
      <el-form-item label="背景" prop="background">
        <el-select
          v-model="ruleForm.background"
          placeholder="Select"
          style="width: 100%"
        >
          <el-option
            v-for="item in backgroundOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { getSelects } from "../utils/selects";
import { useStore } from "vuex";
const emit = defineEmits(["update:modelValue"]);
const store = useStore();

const ruleFormRef = ref<FormInstance>();
const backgroundOptions = getSelects("appBackground");
const ruleForm = reactive({
  width: "454",
  height: "340",
  background: backgroundOptions[0].value,
});
const dialogVisible = ref(false);
const rules = reactive<FormRules>({
  width: [{ required: true, message: "请填写宽度", trigger: "blur" }],
  height: [
    {
      required: true,
      message: "请填写高度",
      trigger: "blur",
    },
  ],
  background: [
    {
      required: true,
      message: "请选择背景",
      trigger: "change",
    },
  ],
});

const close = () => {
  emit("update:modelValue", false);
};
if (import.meta.env.DEV === true) {
  store.commit("setAppInfo", ruleForm);
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // console.log("submit!");
      store.commit("setAppInfo", ruleForm);
      close();
      // dialogVisible.value = false;
    }
  });
};
</script>
<style scoped></style>
