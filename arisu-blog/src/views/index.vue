<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><message /></el-icon>工作心得
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="java=true">Java笔记</el-menu-item>
                <el-menu-item index="1-2">前端记录</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>作品随笔
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">游戏杂谈</el-menu-item>
                <el-menu-item index="2-2">古典文学</el-menu-item>
              </el-menu-item-group>
              <el-menu-item index="2-3">哲学感想</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><setting /></el-icon>资源记录
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">音乐记录</el-menu-item>
                <el-menu-item index="3-2">网址记录</el-menu-item>
                <el-menu-item index="3-2">du密码记录</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <div class="main">
          <div>
            <p>这是个菜鸟程序员的小小日记本</p>
            <p>これわ初心者のちっぽけ日記帳です</p>
            　
          </div>
        </div>
        <div v-if="java"> <java></java></div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import java from '@/components/java'
export default {
  components:{
    java,
  },
  data(){
    return {
    java:false,
  }
  }
};
</script>

<style scss scoped>
.common-layout {
  padding: 10px;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid grey;
}
</style>