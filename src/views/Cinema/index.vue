<!--
 * @Author: your name
 * @Date: 2019-10-21 10:38:13
 * @LastEditTime: 2019-10-22 11:08:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\Administrator\Desktop\bbb\bbb\src\views\Cinema\index.vue
 -->
<template>
  <div id="main">
    <Header title="喵喵电影" />
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <CiList />
    </div>
    <TabBar />
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import CiList from "@/components/CiList";

export default {
  name: "Cinema",
  components: {
    Header,
    TabBar,
    CiList
  }
};
</script scoped>
<style>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>