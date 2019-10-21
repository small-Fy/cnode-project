<template>
  <div>
    <el-card id="main">
      <el-main>
        <!--            导航栏-->
        <div class="navigation">
          <div>全部</div>
          <div>精华</div>
          <div>分享</div>
          <div>问答</div>
          <div>招聘</div>
          <div>客户端测试</div>
        </div>

        <div class="content">
          <!--              {{arr[0].author.avatar_url}}-->


<!--          <div v-for="(item,index) in arr" :key="index">-->
<!--            <img src="item.author.avatar_url" alt="" class="c-img">-->
<!--          </div>-->

        </div>








      </el-main>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {

  },
  props: {},
  data() {
    return {
      arr: []
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/topics")
        .then(res => {
          this.arr = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCity();
  },
};
</script>

<style scoped lang="scss">

</style>
