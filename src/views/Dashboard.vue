<template>
  <div>
    <div class="example-table-box">
      <p>基础表格</p>
      <ins-table border
                 stripe
                 :data="data"
                 :column="basicColumn">
      </ins-table>
    </div>
    <div class="example-table-box">
      <p>支持render渲染</p>
      <ins-table border
                 :data="data"
                 :column="renderColumn"></ins-table>
    </div>
    <div class="example-table-box">
      <p>支持slot插槽</p>
      <ins-table border
                 :data="data"
                 :column="slotColumn">
        <template v-slot:zip="{ row }">
          <el-tag class="el-icon-message-solid"
                  type="success">
            {{ row.zip }}
          </el-tag>
        </template>
      </ins-table>
    </div>
    <div class="example-table-box">
      <p>支持组件引入</p>
      <ins-table border
                 :data="data"
                 :column="componentColumn"></ins-table>
    </div>

    <div class="example-table-box">
      <p>支持树形数据</p>
      <ins-table border
                 :data="data"
                 :column="componentColumn"
                 default-expand-all
                 row-key="id"
                 :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"></ins-table>
    </div>

    <div class="example-table-box">
      <p>支持selection/index/expand</p>
      <ins-table border
                 :data="data"
                 :column="typesColumn"></ins-table>
    </div>

    <div class="example-table-box">
      <p>带分页功能</p>
      <ins-table border
                 :data="data"
                 :column="complexColumn"
                 :columnsProps="columnsProps"
                 @selection-change="selectionChange"
                 pagination
                 :auto-scroll="false"
                 :total="100"
                 :page.sync="listQuery.page"
                 :limit.sync="listQuery.limit"
                 @pagination="getList">
      </ins-table>
    </div>
  </div>
</template>

<script>
import InsTable from "../components/InsTable";
import TableData from "../mock/table";

export default {
  name: "Dashboard",
  components: {
    InsTable,
  },
  mixins: [TableData],
  data() {
    return {
      columnsProps: {
        width: "auto",
      },
      total: 0,
      listQuery: {
        page: 2,
        limit: 20,
      },
      editForm: {},
      dialogVisible: false,
    };
  },
  methods: {
    selectionChange(rows) {
      console.log("selected", rows);
    },
    getList() {},
    openDialog({ row }) {
      this.editForm = Object.assign({}, row);
      this.dialogVisible = true;
    },
  },
};
</script>
<style lang="less">
.example-table-box {
  margin: 25px 50px;
  p {
    text-align: left;
    font-weight: 700;
  }
}
</style>
