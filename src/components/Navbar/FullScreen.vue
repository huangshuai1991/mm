<template>
  <div id="screenfull"
       @click="getFullScreen">
    <el-tooltip :content="tooltipContent"
                placement="bottom">
      <SvgIcon class-name='screenfull-icon'
               :icon-class="iconClass" />
    </el-tooltip>
  </div>
</template>

<script>
import SvgIcon from "../SvgIcon";
import screenfull from "screenfull";
export default {
  name: "fullScreen",
  components: {
    SvgIcon,
  },
  data() {
    return {
      isFullscreen: false,
    };
  },
  computed: {
    iconClass: function () {
      return this.isFullscreen ? "exitFullScreen" : "screenfull";
    },
    tooltipContent: function () {
      return this.isFullscreen
        ? this.$t("navBarTooltips.cancleFullScreen")
        : this.$t("navBarTooltips.fullScreen");
    },
  },
  methods: {
    // 全屏事件
    getFullScreen() {
      if (screenfull.isEnabled) {
        this.isFullscreen = !this.isFullscreen;
        screenfull.toggle();
      } else {
        this.$message.warning("您的浏览器无法进入全屏模式");
        return false;
      }
    },
    // Esc 全屏监测
    checkFull() {
      let isFull =
        window.fullScreen ||
        document.webkitIsFullScreen ||
        document.msFullscreenEnabled;
      if (isFull === undefined) {
        isFull = false;
      }
      return isFull;
    },
  },
  mounted() {
    window.onresize = () => {
      // 全屏下监控是否按键了ESC
      if (!this.checkFull()) {
        // 退出全屏
        this.isFullscreen = false;
      }
    };
  },
};
</script>

<style lang="less" scoped>
#screenfull {
  display: inline-block;
  margin: 0 8px;
  vertical-align: top;
  .screenfull-icon {
    font-size: 22px;
    cursor: pointer;
    vertical-align: -5px !important;
  }
}
</style>