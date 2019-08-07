<template>
  <el-container>
    <el-header class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>帮助中心</el-breadcrumb-item>
        <el-breadcrumb-item>文档更新</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main class="main">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="Document审核" name="first">Document审核</el-tab-pane>
        <el-tab-pane label="Document权限" name="second">Document权限</el-tab-pane>
        <el-tab-pane label="PDF审核" name="third">PDF审核</el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "doc-verify",
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>
