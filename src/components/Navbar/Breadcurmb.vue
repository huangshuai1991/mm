<template>
  <el-breadcrumb class="app-breadcrumb"
                 separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList"
                          :key="item.path">
        <template v-if="item.meta.title">
          <span v-if="item.redirect==='noredirect'||index==levelList.length-1"
                class="no-redirect">{{generateTitle(item.meta.title)}}</span>
          <router-link v-else
                       :to="item.redirect||item.path">{{generateTitle(item.meta.title)}}</router-link>
        </template>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { generateTitle } from "@/utils/i18n";

export default {
  name: "nxBreadcrumb",
  created() {
    this.getBreadcrumb();
  },
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.name);
      const first = matched[0];
      if (first && first.name !== "Dashboard") {
        matched = [
          { path: "/dashboard/dashboard", meta: { title: "dashboard" } },
        ].concat(matched);
      } else {
        matched = [
          { path: "/dashboard/dashboard", meta: { title: "dashboard" } },
        ];
      }
      this.levelList = matched;
    },
  },
};
</script>

<style lang="less" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
