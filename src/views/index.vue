<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="2">
          <img src="../assets/imgs/wsc-logo-CH.png">
        </el-col>
        <el-col :span="20">
          <el-menu
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            default-active="/docEdit"
            router
          >
            <el-menu-item index="1">数据统计</el-menu-item>
            <el-submenu index="2">
              <template slot="title">模块配置</template>
              <el-menu-item index="2-1">首页轮播图</el-menu-item>
              <el-menu-item index="2-2">产品页</el-menu-item>
              <el-menu-item index="2-3">搜索热词</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">帮助中心</template>
              <el-menu-item index="/docEdit">内容编辑</el-menu-item>
              <el-menu-item index="/docVerify">文档审核</el-menu-item>
              <el-menu-item index="3-3">文档翻译</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">用户反馈</el-menu-item>
            <el-menu-item index="5">设置</el-menu-item>

            <el-submenu index="6" style="float: right">
              <template slot="title">中国站</template>
              <el-menu-item index="6-1">国际站</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="2">
          <div style="float: right;color: #fff;">
            <i class="el-icon-s-custom"></i>
            <span>yufy</span>
            <span>&nbsp;|&nbsp;</span>
            <a>退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    name: "index"
  }
</script>

<style scoped>
  .el-header {
    background-color: #545c64;
    color: #333;
    line-height: 60px;
  }

  .el-main {
    padding-left: 100px;
    padding-right: 100px;
    background-color: #F3F6FB;
  }

  .router-link-active {
    color: #ffd04b;
  }

  img {
    width: 100px;
    height: 20px;
    vertical-align: text-bottom;
  }

</style>
