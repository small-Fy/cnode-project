<template>
  <div id="box">
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        pass: ""
      }
    };
  },
  methods: {
    login() {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: this.ruleForm.username
        })
      );
      this.$router.push('/home');
      console.log(this);
    },
    register() {}
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
#box {
  width: 30%;
  height: 400px;
  margin: 0 auto;
  margin-top: 200px;
}
</style>
