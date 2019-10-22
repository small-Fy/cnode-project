<template>
  <div>
    <el-card id="main">
      <el-main>
        <!--            导航栏-->
        <div class="navigation">
          <div v-for="(item, index) in header" :key="index">
            <div
              :class="{ bg: index === num }"
              @click="changeColor(index)"
              class="word"
            >
              {{ item }}
            </div>
          </div>
        </div>

        <div class="content" v-if="true">
          <div
            v-for="(item, index) in arr.slice(
              pages * (pagesNum - 1),
              pagesNum * pages
            )"
            :key="index"
          >
            <div v-if="item.author" class="row">
              <div>
                <img :src="item.author.avatar_url" alt="" />
                <span>{{ item.reply_count }}</span>
                <span>/</span>
                <span>{{ item.visit_count }}</span>
                <span v-if="item.top === true">置顶</span>
                <span v-if="item.top === false && item.tab === 'ask'"
                  >问答</span
                >
                <span v-if="item.top === false && item.tab === 'share'"
                  >分享</span
                >
                <span class="text" @click="skip(item)">{{ item.title }}</span>
              </div>
              <!--              <div>-->
              <!--                {{ item.create_at }}-->
              <!--              </div>-->
              <div>
                <div v-if="item.day">{{ item.day }}天前</div>
                <div v-if="item.hour">{{ item.hour }}小时前</div>
                <div v-if="item.min">{{ item.min }}分钟前</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <router-view></router-view>
        </div>
        <!--分页-->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="40"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40"
          >
          </el-pagination>
        </div>
      </el-main>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  props: {},
  data() {
    return {
      arr: [],
      newArr: [],
      header: ["全部", "精华", "分享", "问答", "招聘", "客户端测试"],
      num: 0,
      currentPage: 1,
      pages: 40,
      pagesNum: 1,
      flag: true
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/topics")
        .then(res => {
          this.arr = res.data;
          let nowTime = Date.now();
          this.arr.map(item => {
            let differentTime =
              nowTime-this.$dayjs(item.last_reply_at).valueOf();
            let time = differentTime / 1000 / 60 / 60;
            if (time < 1) {
              let min = Math.floor(time * 60);
              this.$set(item, "min", min);
            } else if (time > 24) {
              let day = Math.ceil(time / 24);
              this.$set(item, "day", day);
            } else {
              let hour = Math.floor(time);
              this.$set(item, "hour", hour);
            }
          });
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeColor(index) {
      this.num = index;
    },
    handleSizeChange(val) {
      // this.newArr=this.arr.slice(currentPage-1*val,val)
      this.pages = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // this.newArr=this.arr.slice((val-1)*pageSizes,pageSizes*val-1)
      // this.newArr=this.arr.slice((val-1)*10,10*val-1);
      this.pagesNum = val;
      console.log(`当前页: ${val}`);
    },
    skip(item) {
      this.$router.push({ name: "detail", query: { id: item.id }});
    }
  },
  mounted() {
    this.getCity();
  }
};
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  .word {
    padding: 3px 4px;
    border-radius: 3px;
    font-size: 14px;
    color: #80bd01;
  }
  .bg {
    background-color: #80bd01;
    color: #fff;
  }
}
.content {
  img {
    width: 30px;
    height: 30px;
    .row {
      display: flex;
      justify-content: space-around;
      .text {
        max-width: 750px;
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
