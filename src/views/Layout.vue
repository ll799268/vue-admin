<template>
  <el-container>
    <el-header class="header flex-start">logo</el-header>
    <el-container>
      <Aside />
      <Main />
    </el-container>
  </el-container>
</template>

<script>
import Aside from '@components/Aside'
import Main from '@components/Main'
export default {
  components: {
    Aside,
    Main
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background: #409EFF;
    color: #fff;
  }
</style>
