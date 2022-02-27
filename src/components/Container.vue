<template>
  <div class="app">
    <el-container>
      <el-aside class="app-side app-side-left"
                :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
        <div class="app-side-logo">
          <img src="@/assets/nh1.jpg"
               :width="isCollapse ? '60' : '60'"
               height="60" />
        </div>
        <div>
          <el-menu default-active="1-1"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">调试工具</span>
              </template>
              <el-menu-item-group >
                <el-menu-item index="1-1">传入图片</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group >
                <el-menu-item index="/debug/text">传入文字</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group >
                <el-menu-item index="1-3">传入视频</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">

              </el-submenu>
            </el-submenu>
            <el-menu-item >
              <i class="el-icon-menu"></i>
              <span slot="title">竞品耗时评测</span>
            </el-menu-item>
            <el-menu-item index="3"
                          disabled>
              <i class="el-icon-document"></i>
              <span slot="title">UI异常检测</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">录屏中识别文字或者图片</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>

      <el-container>
        <el-header class="app-header">
          <div style="width: 60px; cursor: pointer;"
               @click.prevent="toggleSideBar">
            <!--            <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>-->
            <!--            <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>-->
          </div>
          <!-- 我是样例菜单 -->
          <el-menu
            class="el-menu-demo tab-page"
            mode="horizontal"
            @select="handleSelect"
            active-text-color="#409EFF">
            <el-menu-item index="/ocr" @click="goTo('/ocr')">图像ocr</el-menu-item>
<!--            <el-menu-item index="/diff" @click="goTo('/diff')">图像diff</el-menu-item>-->
            <el-menu-item index="/cluster" @click="goTo('/cluster')">图像聚类</el-menu-item>
<!--            <el-menu-item index="/Wrong_word_detect" @click="goTo('/Wrong_word_detect')">错别字检测</el-menu-item>-->
<!--            <el-menu-item index="/Wrong_word_auto_correct" @click="goTo('/Wrong_word_auto_correct')">错别字自动纠错</el-menu-item>-->
          </el-menu>

          <router-view></router-view>
        </el-header>

        <!--        <el-main class="app-body">-->
        <!--          <template>-->
        <!--            <router-view/>-->
        <!--          </template>-->
        <!--        </el-main>-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Container',
  data() {
    return {
      username: '',
      isCollapse: false
    }
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse
    },
    logout: function () {
      this.$confirm('确认退出?', '提示', {})
        .then(() => {
          sessionStorage.removeItem('user');
          this.$router.push('/login');
        })
        .catch(() => { });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path){
      this.$router.replace(path);
    }
  },
  mounted: function () {
    let user = sessionStorage.getItem('user');
    if (user) {
      this.username = user;
    }
  },
}
</script>

<style>
</style>

