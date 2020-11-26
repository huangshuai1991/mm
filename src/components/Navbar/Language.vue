<template>
  <el-dropdown trigger="click"
               class='international'
               @command="handleSetLanguage">
    <div>
      <el-tooltip :content="$t('navBarTooltips.locales')"
                  placement="bottom">
        <SvgIcon class-name='international-icon'
                 icon-class="Language" />
      </el-tooltip>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh"
                        :disabled="language==='zh'">{{$t('language.chinese')}}</el-dropdown-item>
      <el-dropdown-item command="en"
                        :disabled="language==='en'">{{$t('language.english')}}</el-dropdown-item>
      <el-dropdown-item command="ja"
                        :disabled="language==='ja'">{{$t('language.japanese')}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import SvgIcon from "../SvgIcon";
export default {
  name: "lang-select",
  components: { SvgIcon },
  computed: {
    language() {
      return this.$store.getters.language;
    },
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("setLanguage", lang);
      this.$message({
        message: this.$t("language.select-success"),
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.international-icon {
  font-size: 22px;
  cursor: pointer;
  vertical-align: -5px !important;
}
.el-dropdown {
  color: #5a5e66;
}
</style>


