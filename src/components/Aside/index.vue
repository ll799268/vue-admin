<template>
  <el-aside width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :router="true">
      <template v-for="(item, index) in menu">
        <sub-menu v-if="item.children"
          :key="index" 
          :sunMenu="item" />
        <menu-item v-else
          :key="index" 
          :menuItem="item" />
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import routerConfig from '@router/serviceRoutes'
import MenuItem from './MenuItem.vue'
import SubMenu from './SubMenu.vue'
export default {
  components: { 
    MenuItem,
    SubMenu
  },
  data () {
    return {
      menu: []
    }
  },
  created () {
    this.menu = routerConfig
  }
}
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo {
    min-height: calc(100vh - 60px);
    overflow: auto;
  }
</style>
