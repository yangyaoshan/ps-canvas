import { h, ref, defineComponent } from "vue";
import { ElDropdown } from "element-plus";
export default defineComponent({
  components: {
    ElDropdown,
  },
  setup(props, context) {
    return () => (
      <div class="top-config">
        <div class="top-config__control">
          <el-dropdown>
            <span class="el-dropdown-link">
              Dropdown List
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            {{
              dropdown: () => (
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item disabled>Action 4</el-dropdown-item>
                  <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              ),
            }}
          </el-dropdown>
        </div>
        <div class="top-config__toolbar"></div>
      </div>
    );
  },
});
