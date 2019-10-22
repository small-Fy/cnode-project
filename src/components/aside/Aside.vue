<template>
  <div id="aside">
    <div class="panel">
      <div class="inner">
        <p>CNode：Node.js专业中文社区</p>
        <div>
          您可以<span>登录</span>或
          <span>注册</span>，也可以
        </div>
       <div class="span-info"> 通过 GitHub 登录</div>
      </div>
    </div>
    <div class="panelImg">
      <div class="img">
        <img src="../../assets/images/QQ图片20191021112551.jpg" alt="">
        <div></div>
        <img src="../../assets/images/QQ图片20191021112519.jpg" alt="">
        <div></div>
        <img src="../../assets/images/QQ图片20191021112543.jpg" alt="">
      </div>
    </div>
    <div class="panelTopic">
      <div class="header">无人回复的话题</div>
      <div class="topic">
        <span class="topic_title">node后台前后端分离快速权限开发框架</span>
        <span class="topic_title">想快速掌握node开发的来</span>
        <span class="topic_title">请问node-xlsx解析excel空行数据为空数组怎么回事呀？</span>
        <span class="topic_title">发现一个用node.js做的后台权限管理框架</span>
        <span class="topic_title">请问有谁了解 VuePress JAMStack Headless cms 么</span>
      </div>
    </div>
<!--    <div class="panelTop">-->
<!--      <div class="header">-->
<!--        <span>积分榜</span>-->
<!--        <span>TOP100>></span>-->
<!--      </div>-->
<!--      <div class="inner">-->
<!--        <div>-->
<!--          <span>21725</span>-->
<!--          <span>i5ting</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span>15650</span>-->
<!--          <span>alsotang</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span>9350</span>-->
<!--          <span>leapon</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span>9030</span>-->
<!--          <span>atian25</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span>8780</span>-->
<!--          <span>jiyinyiyong</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span>7305</span>-->
<!--          <span>yakczh</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span>6815</span>-->
<!--          <span>im-here</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span>6095</span>-->
<!--          <span>DevinXian</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span>5815</span>-->
<!--          <span>chapgaga</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span>5350</span>-->
<!--          <span>magicdawn</span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Aside",
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
#aside {
  margin-top: 20px;
  .panel {
    background-color: white;
    font-size: 13px;
    margin-bottom: 13px;
    width: 290px;
    height: 116px;
    .inner {
      padding: 10px;
      border-radius: 0 0 3px 3px;
      line-height: 2em;
      span {
        color: #778087;
      }
      .span-info {
        width: 130px;
        height: 28px;
        padding: 5px 15px;
        font-size: 14px;
        cursor: pointer;
        border-radius: 3px;
        color: #fff;
        background-color: #5bc0de;
      }
    }
    p {
      margin: 0 0 10px;
      font-size: 14px;
    }
  }
  .panelImg{
    background-color: white;
    margin-bottom: 13px;
    width: 290px;
    height: 235px;
    .img{
      padding: 10px;
      border-radius: 0 0 3px 3px;
      div{
        height: 10px;
      }
      img{
        width: 270px;
        height: 65px;
      }
    }

  }
  .panelTopic{
    width: 290px;
    height: 220px;
    font-size: 13px;
    margin-bottom: 13px;
    .header{
      color: #444;
      border-radius: 3px 3px 0 0;
      padding: 10px;
      background-color: #f6f6f6;
      width: 270px;
      height: 20px;
    }
    .topic{
      padding: 10px;
      border-radius: 0 0 3px 3px;
      background-color: #fff;
      .topic_title{
        color: #778087;
        max-width: 270px;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        /*text-overflow: ellipsis;*/
      }
    }
  }
  .panelTop{
    width: 290px;
    height: 343px;
  }
}
</style>
