<template>
  <el-menu-item :index="menuItem.id"
    :route="menuItem">
    <template slot="title">
      <i :class="menuItem.icon"></i>
      <span slot="title">{{ menuItem.title }}</span>
    </template>
  </el-menu-item>
</template>

<script>
export default {
  props: {
    menuItem: {
      default: {},
      type: Object
    }
  }
}
</script>