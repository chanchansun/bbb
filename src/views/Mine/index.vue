<!--
 * @Author: your name
 * @Date: 2019-10-21 10:37:59
 * @LastEditTime: 2019-10-22 11:09:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\Administrator\Desktop\bbb\bbb\src\views\Mine\index.vue
 -->
<template>
<div id="main">
    <Header title="我的喵喵" />
    <div id="content">
        <Login />
        </div>
    <TabBar />
</div>
</template>
<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Login from '@/components/Login';
export default{
name:'Mine',
components:{
    Header,
    TabBar,
    Login
}

}
</script>
<style scoped>

</style>