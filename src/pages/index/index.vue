<template>
  <view class="container">
    <view class="title">{{ title }}</view>
    <view class="search">
      <input type="text" class="iconfont" :placeholder="searchTip" />
    </view>
    <view class="tabBar">
      <scroll-view :scroll-x="true">
        <view class="tabBar_view">
          <view
            class="tabBar_item"
            :class="{ active: item.isActive }"
            v-for="(item, index) in tabbarList"
            :key="index"
            @click="tabbarSelect(item)"
            >{{ item.name }}</view
          >
        </view>
      </scroll-view>
    </view>
    <view class="detailList">
      <view v-for="(item, index) in detailList" :key="index" class="list_item">
        <view class="img">
          <image :src="item.imgSrc" mode="aspectFit" />
          <text>{{ item.title }}</text>
        </view>
        <view class="saleInfo">
          <view class="saleVolume">
            <span>销量:{{ item.saleVolume }}</span>
          </view>
          <view class="price">
            <view class="currPrice">{{ item.price }}</view>
            <view class="oldPrice">{{ item.oldPrice }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      title: '云旅科技',
      searchTip: '搜索目的地/景点/酒店/商品',
      tabbarList: [
        { name: '全部', ident: 'all', isShow: true, isActive: true },//isShow 是否展示这个tabbar  //isActive是否选中
        { name: '周边游', ident: 'rim', isShow: true, isActive: false },
        { name: '国内游', ident: 'inland', isShow: true, isActive: false },
        { name: '出境游', ident: 'outbound', isShow: true, isActive: false },
        { name: '门票', ident: 'tickets', isShow: true, isActive: false },
        { name: '住宿', ident: 'hotel', isShow: true, isActive: false },
        { name: "美食", ident: "cate", isShow: true, isActive: false },
        { name: "包车", ident: "chartered", isShow: true, isActive: false },
        { name: "商城", ident: "shopping", isShow: true, isActive: false }
      ],
      detailList: [
        { title: '春节热卖&【泰国-霞光海域】升级版·曼谷-芭提雅-格兰岛5晚6日游....春节热卖&【泰国-霞光海域】升', saleVolume: "3368", price: "300", oldPrice: '300', imgSrc: '../../static/images/30cfcf98ad60a9158685ceca0a346e29.jpeg' },
        { title: '春节热卖', saleVolume: "3368", price: "300", oldPrice: '300', imgSrc: '../../static/images/30cfcf98ad60a9158685ceca0a346e29.jpeg' },
        { title: '春节热卖', saleVolume: "3368", price: "300", oldPrice: '300', imgSrc: '../../static/images/30cfcf98ad60a9158685ceca0a346e29.jpeg' }
      ]
    };
  },
  methods: {
    tabbarSelect(args: any): void {
      let o = this;

      o.tabbarList.forEach((item, index: number) => {
        item.isActive = false;
      });
      args.isActive = true;
      //接口部分
      o.detailList = [];
      o.detailList.push({
        title: "切换",
        saleVolume: "1234",
        price: "1000",
        oldPrice: "1200",
        imgSrc: "../../static/images/demo.jpeg"
      });
    }
  }
});
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-direction: column;
  .title {
    border-bottom: 1rpx solid #aaaaaa;
    height: 120rpx;
    line-height: 170rpx;
    font-size: 36rpx;
    font-weight: 400;
    color: #353535;
    padding-left: 25rpx;
  }
  .search {
    margin: 30rpx 33rpx 0;
    height: 63rpx;
    line-height: 63rpx;
    font-size: 24rpx;
    background: #f1f2f3;
    border-radius: 32rpx;
    input {
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
  .tabBar {
    margin-top: 43rpx;
    margin-bottom: 34rpx;
    font-size: 28rpx;
    font-weight: 400;
    color: #333333;
    .tabBar_view {
      display: flex;
      width: 120%;
      margin: 0 25rpx;
      box-sizing: border-box;
      .tabBar_item {
        margin-right: 25rpx;
        white-space: nowrap;
      }
      .active {
        border-bottom: 2px solid #3d7cfa;
      }
    }
  }
  .detailList {
    .list_item {
      padding: 0 24rpx;
      margin-bottom: 27rpx;
    }
    .img {
      position: relative;
      width: 100%;
      height: 380rpx;
      image {
        width: 100%;
        height: 100%;
      }
      text {
        display: -webkit-box;
        font-size: 32rpx;
        white-space: wrap;
        text-overflow: ellipsis;
        font-weight: 400;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        position: absolute;
        margin: 0 24rpx 23rpx;
        color: #ffffff;
        bottom: 0;
        left: 0;
        max-height: 90rpx;
      }
    }
    .saleInfo {
      margin-top: 34rpx;
      display: flex;
      justify-content: space-between;
      .saleVolume {
        font-size: 24rpx;
        font-weight: 400;
        color: #b2b2b2;
        line-height: 52rpx;
      }
      .price {
        display: flex;
        .currPrice {
          font-size: 36rpx;
          font-weight: bold;
          color: #ed591d;
        }
        .oldPrice {
          font-size: 24rpx;
          font-weight: 400;
          color: #666666;
          line-height: 52rpx;

          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
