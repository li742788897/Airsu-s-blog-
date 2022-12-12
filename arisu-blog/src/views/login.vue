<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_form">
        <div
          style="
            margin: 20px 0;
            text-align: center;
            font-size: 34px;
            color: white;
          "
        >
          <b>arcueid's 小站 </b>
        </div>
        <div style="display: flex; width: 100%; justify-content: center;  margin: 23px 0;">
            <span class="formItem">用户名</span>
            <div class="tags-content">
          <input class="tags-input" v-model="username" placeholder="请输入..." />
        </div>
        
        </div>
        <div style="display: flex; width: 100%; justify-content: center;">
            <span class="formItem">密码</span>
            <div class="tags-content">
          <input class="tags-input" v-model="username" placeholder="请输入..." />
        </div>
        
        </div>
      </div>
    </div>
    <vue-particles
      color="#6495ED"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="5"
      linesColor="#3A5FCD"
      :linesWidth="1.5"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
// import { setRoutes } from "@/router";

export default {
  name: "Login",
  data() {
    return {
      user: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // login() {
    //   this.$refs["userForm"].validate((valid) => {
    //     if (valid) {
    //       // 表单校验合法
    //       this.request.post("/user/login", this.user).then((res) => {
    //         if (res.code === "200") {
    //           localStorage.setItem("user", JSON.stringify(res.data)); // 存储用户信息到浏览器
    //           localStorage.setItem("menus", JSON.stringify(res.data.menus)); // 存储用户信息到浏览器
    //           // 动态设置当前用户的路由
    //           setRoutes();
    //           this.$router.push("/");
    //           this.$message.success("登录成功");
    //         } else {
    //           this.$message.error(res.msg);
    //         }
    //       });
    //     }
    //   });
    // },
  },
};
</script>

<style less scoped>
.login_container {
  /* background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%); */
  background-image: url("../images/acrueid.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
.login_box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_form {
  background-color: #000;
  width: 600px;
  height: 320px;
  padding: 25px;
  border-radius: 10px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.7);
  text-align: center;
}
.tags-content {
    transform: translate(-3%, -10%);
  /* gap: 6px; */
  width: 45%;
  box-sizing: border-box;
  /* padding: 3px 0px; */
  /* border: 1px solid #000; */
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #333;
  outline-color: #4f46e5;
  /* background-color: rgba(0, 0, 0, 0.3); */
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.7);
  overflow: auto;
  cursor: text;
}
.tags-input {
    /* 透明化input框 */
  border-color: transparent;
  color:#fff;
  /* 透明化input框北京颜色 */
  background-color:rgba(0,0,0,0);
  width: 95%;
  /* 去掉点击后出现的边框 */
  outline: none;
  /* border: 1px solid rgba(0, 0, 0, 0); */
}
.formItem{
    font-size: 14px;
    margin: 0px 10px;
    color: #000;
}
</style>
