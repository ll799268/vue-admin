<template>
  <el-submenu :index="sunMenu.id">
    <template slot="title">
      <i :class="sunMenu.icon"></i>
      <span slot="title">{{ sunMenu.title }}</span>
    </template>
    <menu-item v-for="(item, index) in sunMenu.children"
      :key="index" 
      :menuItem="item" />
  </el-submenu>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  props: {
    sunMenu: {
      default: {},
      type: Object
    }
  },
  components: { 
    MenuItem
  }
}
</script>