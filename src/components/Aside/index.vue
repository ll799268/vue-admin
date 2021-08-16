<template>
  <el-aside width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :router="true"
      @select="selectCallback"
      background-color="#344054"
      active-text-color="#409fff"
      text-color="#fff">
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
      menu: routerConfig
    }
  },
  methods: {
    selectCallback(index, indexPath) {
      this.$store.commit('CALC_BREADCRUMB_LIST', indexPath)
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
