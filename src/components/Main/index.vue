<template>
  <el-main>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbListResult"
        :key="index"
        :path="item.path">{{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-warpper">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </el-main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    breadcrumbListResult: 'breadcrumbListResult'
  })
}
</script>

<style lang="scss" scoped>
 .el-main {
   background: #eee;
   padding-bottom: 0;
   .el-breadcrumb {
     background: #fff;
     line-height: 46px;
     padding: 0 10px;
     margin-bottom: 16px;
   }
   .main-warpper {
     background: #fff;
     padding: 10px;
     min-height: calc(100vh - 162px);
   }
 }
</style>
