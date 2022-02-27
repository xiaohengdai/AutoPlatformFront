# stitch-frontend

> frontend using vue.js and element-ui of my picture stitching system

## Build Setup

``` bash
brew install node    安装npm

# install dependencies
解决办法：

1、执行：

npm config get proxy
npm config get https-proxy
如果返回值不为null，继续执行：
（这一步很重要，一定要保证两个命令的返回值都为null,话说回来，应该出现这个错误这两个返回值有不为null的）
npm config set proxy null
npm config set https-proxy null
2、执行：


rm -rf node_modules
rm -rf package-lock.json
npm cache clear --force


npm install cnpm --registry=https://registry.npm.taobao.org --legacy-peer-deps -D  //局部安装


# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



主要使用的element ui来写的前端界面 ,axios来和后端通信

使用element UI el-upload组件实现视频文件上传及上传进度显示方法总结：https://blog.csdn.net/jerrica/article/details/80854506
封装el-upload，实现可上传视频、播放视频、编辑视频、移除视频，上传进度条展示：https://blog.csdn.net/qq_41775006/article/details/113560283?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link
解决Flask+Vue跨域请求问题：https://www.jianshu.com/p/eecfab0b6a36



遇到问题:
1、failed to load response data :No data found for resource with given identifier,
解决：vue el-upload上传控件一直报跨域问题 post请求变成get请求：https://blog.csdn.net/m0_37735354/article/details/86603453

2、github 版本库git push上去，却发现没更新
解决：git push -u origin master

3、图片裁剪问题
npm install vue-img-cutter@2.2.5 --save-dev --registry=https://registry.npm.taobao.org
使用开源组件vue-img-cutter:https://github.com/acccccccb/vue-img-cutter


4、页面布局问题
vue+elementui搭建后台管理界面(2首页):https://www.cnblogs.com/wbjxxzx/p/9942867.html
vuejs之结合使用vue+element-ui搭建后台管理页面:https://www.cnblogs.com/xiximayou/p/12336619.html

5、怎么通过码云(Gitee.com)创建自己的博客建立主页
https://cloud.tencent.com/developer/article/1452503
