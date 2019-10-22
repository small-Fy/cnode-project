<template>
  <div id="box">
    <div class="header">
      <span v-if="details.top === true" class="put_top">置顶</span>
      <span
        v-if="details.top === false && details.tab === 'ask'"
        class="put_top"
        >问答</span
      >
      <span
        v-if="details.top === false && details.tab === 'share'"
        class="put_top"
        >分享</span
      >
      <strong class="text">{{ details.title }}</strong>
    </div>
    <div v-html="details.content"></div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  components: {},
  props: {},
  data() {
    return {
      details: {},
      id: ""
    };
  },
  methods: {
    getDetails() {
      this.$axios
        .req(`/api/topic/${this.id}`)
        .then(res => {
          this.details = res.data;
          // let nowTime=Date.now()
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getDetails();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#box {
  background-color: white;
  /deep/ img {
    width: 100%;
  }
  .header {
    color: #333;
    height: 67px;
    padding: 10px;
    border-bottom: 1px solid #e5e5e5;
    .put_top {
      background: #80bd01;
      padding: 2px 4px;
      color: #fff;
      font-size: 12px;
      border-radius: 3px;
    }
    .text {
      font-size: 22px;
    }
  }
}
</style>
