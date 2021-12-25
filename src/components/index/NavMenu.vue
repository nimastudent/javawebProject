<template>
  <div class="navmenu" >
      <el-menu
      :default-active="currentPath"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="red"
      style="min-width: 1300px">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <span style="position: absolute;padding-top: 20px;right: 53%;font-size: 20px;font-weight: bold">万物商城</span>
      <el-input
        class="input"
        placeholder="快速搜索..."
        prefix-icon="el-icon-search"
        size="medium"
        style="width: 300px;position:absolute;margin-top: 12px;right: 11%"
        v-model="keywords">
      </el-input>
    </el-menu>
  </div>
</template>

<script>
export default {
    name: 'NavMenu',
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/jotter', navItem: '购物车'},
          {name: '/login', navItem: '登录'},
          {name: '/register', navItem: '注册'}
        ],
        keywords: ''
      }
    },
    computed: {
      hoverBackground () {
        return '#ffd04b'
      },
      currentPath () {
        var x = this.$route.path.indexOf('/', 1)
        if (x !== -1) {
          return this.$route.path.substring(0, x)
        } else {
          return this.$route.path
        }
      }
    }
  }
</script>
<style >
 a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
  .navmenu{
    
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
  }
  .input{
    border: 1px grey solid;
  }
</style>