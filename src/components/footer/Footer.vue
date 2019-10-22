<template>
  <div>
    <div class="footer">
      <div class="centent">
        <div class="rowOne">
          <span>RSS</span>
          <i>|</i>
          <span>源码地址</span>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
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
.footer {
  background: #fff;
  height: 190px;
  display: flex;
  margin: 0 auto;
  .centent{
    width: 88%;
    height: 150px;
    .rowOne {
      height: 26px;
      line-height: 26px;
      i{
        margin: 0 2px;
      }
    }
  }

}
</style>
