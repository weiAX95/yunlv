declare module "*.vue" {
    import Vue from 'vue';
    export default Vue;
}
// uni 的断言有问题  后续解决
declare module "uni" {
    import uni from '@dcloudio/types/uni-app/index';
    export default uni;
}
//奇葩编译问题 有时候main.ts中的引入vue ts会报找不到路径的问题   加上断言后出现一堆编译问题出来   所有不加vue的断言
// declare module "vue";

//uview 目前没找到文件下有关的ts文件   当前增加一个断言 解决error 问题
// declare module "uview-ui";