<template>
  <div id="comment">
    <div id="wrap">
      <div id="node">
        <el-container class="node-bg">
          <el-header>
            <top></top>
          </el-header>
          <el-container>
            <el-main>
              <router-view></router-view>
            </el-main>
            <el-aside width="200px">Aside</el-aside>
          </el-container>
          <el-footer>
            <nav-footer></nav-footer>
          </el-footer>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../../components/top/Top";
import NavFooter from "../../components/footer/Footer";
export default {
  name: "Comment",
  components: {
    Top,
    NavFooter
  },
  props: {},
  data() {
    return {};
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
#comment{
  width: 100%;
  height: 60px;
  background: #333333;

  #wrap {
    width: 1435px;
    margin: 0 auto;

    #node {
      width: 100%;
      background: #e1e1e1;

      #node-bg {
        width: 100%;
        height: 60px;
        background-color: #333333;
      }

      .el-header {
        background-color: #333333;
        color: #cccccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>
