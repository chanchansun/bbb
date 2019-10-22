<!--
 * @Author: your name
 * @Date: 2019-10-21 14:11:14
 * @LastEditTime: 2019-10-21 15:35:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\Administrator\Desktop\bbb\bbb\src\components\Header\index.vue
 -->
<template>

<header id="header">
	<h1>{{title}}</h1>
</header>
</template>

<script>
export default{
    name:'Header',
    props:{
        title:{
            type:String,
            default:'喵喵电影'
        }
    }
}
</script>

<style scoped>
#header{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
#header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>