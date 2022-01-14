<script setup>
function onMenuSelect(index, indexPath) {
  console.log('----index', index, indexPath)
}
</script>

<template>
  <el-container class="page-loaders">
    <el-header class="page-header">Header</el-header>
    <el-container>
      <el-aside class="page-aside">
        <el-menu
          class="menu"
          :unique-opened="true"
          @select="onMenuSelect"
          :router="true"
        >
          <el-menu-item index="/ouro">Ouroboro</el-menu-item>
          <el-submenu index="2">
            <template v-slot:title>Loader2</template>
            <el-menu-item index="2-1">哈哈哈</el-menu-item>
          </el-submenu>
          <el-menu-item index="11">哈哈1</el-menu-item>
          <el-menu-item index="12">哈哈2</el-menu-item>
          <el-menu-item index="3">哈哈3</el-menu-item>
          <el-menu-item index="4">哈哈4</el-menu-item>
          <el-menu-item index="5">哈哈5</el-menu-item>
          <el-menu-item index="6">哈哈6</el-menu-item>
          <el-menu-item index="7">哈哈7</el-menu-item>
          <el-menu-item index="8">哈哈8</el-menu-item>
          <el-menu-item index="9">哈哈9</el-menu-item>
          <el-menu-item index="10">哈哈10</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="page-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.page-loaders {
  height: 100vh;
  .page-header {
    background-color: #455a64;
    color: white;
    box-shadow: 0px 1px 1px rgba($color: #000000, $alpha: 0.6);
  }
  .page-aside {
    .menu {
      height: calc(100vh - 60px);
      overflow: auto;
    }
  }
}
</style>
