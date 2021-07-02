<template>
  <el-aside width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>导航2</span>
        </template>
        <el-submenu index="2-2">
          <template slot="title">
            <i class="el-icon-place"></i>
            <span>导航2-2</span>
          </template>
          <el-menu-item index="2-4-1">导航2-4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo {
    min-height: calc(100vh - 60px);
    overflow: auto;
  }
</style>
