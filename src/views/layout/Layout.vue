<template>
  <div class="app-wrapper"
       :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened"
         class="drawer-bg"
         @click="handleClickOutside"></div>
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar />
      <Tags />
      <AppMain />
    </div>
  </div>
</template>

<script>
import ResizeMixin from "@/utils/ResizeHandler";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Tags from "@/components/Tags";
import AppMain from "./AppMain";

export default {
  name: "layout",
  mixins: [ResizeMixin],
  components: {
    Sidebar,
    Navbar,
    Tags,
    AppMain,
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("CloseSideBar", { withoutAnimation: false });
    },
  },
};
</script>

<style lang="less" scoped>
.app-wrapper {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  position: relative;
  height: 100%;
  width: 100%;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
