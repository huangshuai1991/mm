<template>
  <div>
    <logo :isCollapse="isCollapse"></logo>
    <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu mode="vertical"
               :show-timeout="200"
               :default-active="$route.path"
               :collapse="isCollapse"
               background-color="#6959CD"
               text-color="white"
               active-text-color="#42b983">
        <sidebar-item :routes="routers"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import logo from "./logo";
import { routes } from "@/router";
export default {
  data() {
    return {
      routers: routes,
    };
  },
  components: { SidebarItem, logo },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>
