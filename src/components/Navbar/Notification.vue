<template>
  <div id="notification"
       @click="jumpToNotification">
    <el-badge :is-dot="isDot">
      <el-tooltip effect="dark"
                  :content="tooltipContent"
                  placement="bottom">
        <SvgIcon class-name='notification-icon'
                 :icon-class="'system-message'" />
      </el-tooltip>
    </el-badge>
  </div>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";
import SvgIcon from "../SvgIcon";
export default {
  name: "notification",
  components: {
    SvgIcon,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      unreadNum: (state) => state.notifications.unreadNum,
      messageList: (state) => state.notifications.messageList,
    }),
    tooltipContent: function () {
      return this.$t("navBarTooltips.notification", {
        num: this.unreadNum,
      });
    },
    isDot: function () {
      return this.unreadNum > 0;
    },
  },
  watch: {
    messageList: function () {
      const last = _.last(this.$store.state.notifications.messageList);
      this.$notify({
        title: last.title,
        message: last.message,
        duration: 6000,
        offset: 70,
        type: last.type,
      });
    },
  },
  created() {
    this.$store.dispatch("GetMessage");
  },
  methods: {
    jumpToNotification() {
      this.$router.push("/notification/all").catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
#notification {
  display: inline-block;
  margin: 0 8px;
  vertical-align: top;
  color: #5a5e66;
  .notification-icon {
    font-size: 22px;
    cursor: pointer;
    vertical-align: -5px !important;
  }
  .el-badge /deep/ .is-dot {
    right: 7px;
    top: 12px;
  }
}
</style>