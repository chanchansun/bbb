/*
 * @Author: your name
 * @Date: 2019-10-21 10:57:37
 * @LastEditTime: 2019-10-22 10:04:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\Administrator\Desktop\bbb\bbb\src\router\movie\index.js
 */
export default{
    path:'/movie',
    component:()=>import('@/views/Movie'),
    children:[
        {
            path:'city',
            component :()=>import('@/components/City')
        },
        {
            path:'nowplaying',
            component :()=>import('@/components/NowPlaying')
        },
        {
            path:'commingsoon',
            component :()=>import('@/components/CommingSoon')
        },
        {
            path:'search',
            component :()=>import('@/components/Search')
        },
        {
            path:'/movie',
            redirect:'/movie/nowplaying'
        }
       

    ]
}