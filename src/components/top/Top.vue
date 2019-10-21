<template>
  <div id="app">
    <!--          图标-->
    <div id="wrap">
      <div class="top">
        <div>
          <img
            class="el_image"
            src="../../assets/images/cnode.svg"
            alt="logo"
          />
        </div>

        <!--          搜索框-->
        <div class="el__input_bg">
          <el-input
            size="medium"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="inputSerch"
          ></el-input>
        </div>

        <div class="el__breadcrumb_bg">
          <el-breadcrumb separator="    ">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>新手入门</el-breadcrumb-item>
            <el-breadcrumb-item>API</el-breadcrumb-item>
            <el-breadcrumb-item>关于</el-breadcrumb-item>
            <el-breadcrumb-item>注册</el-breadcrumb-item>
            <el-breadcrumb-item>登录</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
  props: {},
  data() {
    return {
      inputSerch: ""
    };
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  background: #333333;

  #wrap {
    width: 1435px;
    margin: 0 auto;

    .top {
      display: flex;
      justify-content: space-between;
      .el_image {
        display: block;
        width: 120px;
        height: 29px;
      }
    }
  }
}
</style>
