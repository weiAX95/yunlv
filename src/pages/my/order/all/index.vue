<template>
  <view class="container">
    <view class="all">
      <view class="all_type">全部类型</view>
      <view class="icon">
        <span class="iconfont icon-down"></span>
      </view>
      <OrderList></OrderList>
    </view>

    <view class="list">
      <view
        class="item"
        v-for="(item, index) in contentList"
        :key="index"
        @click="toInfo(item)"
      >
        <view class="itemTop">
          <view class="orderType">{{ item.type }}</view>
          <view class="state">
            <view class="state0" v-if="item.state == 0">未完成</view>
            <view class="state1" v-else-if="item.state == 1">未完成</view>
          </view>
        </view>
        <view class="title">{{ item.title }}</view>
        <view class="orderBottom">
          <view class="orderTime">{{ item.order.departureTime }}</view>
          <view class="price">{{ item.order.price }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from 'vue';
import OrderList from '../../../../components/order/orderMask/index';
export default Vue.extend({
  name: 'all',
  data() {
    return {
      typeList: ['全部', '酒店', '车辆', '门票', '签证', '商品', '旅游路线'],
      contentList: [
        {
          type: '线路',
          state: 0,
          title:
            '[产地直供]安徽黄桃-黄桃之乡新摘现发啊实打实啊abcdefghigklmnopqrstuvwxyz',
          order: {
            sn: 'C20042801583675798',
            total: '￥200000.0',
            num: '成人*5 儿童*5',
            orderTime: '2020-06-04 20:20:20',
            departureTime: '2020-10-10',
            buyName: '郭正林',
            phone: '18936838623',
            payway: 1
          },
          express: {
            name: '郭正林',
            phone: '18936838623',
            address: '山西省太原市小店区保利金香槟2-1',
            expressNumber: '9898313060289'
          }
        }
      ]
    };
  },
  methods: {
    onReachBottom(e) {
      uni.showToast({
        title: '数据加载中',
        duration: 2000
      });
    },
    toInfo(args) {
      let data = JSON.stringify(args);
      uni.navigateTo({
        url: '../orderDetail/index?data=' + data
      });
    }
  },
  components: {
    OrderList
  }
});
</script>

<style lang='scss' scoped>
@import url('../../../../static/iconfont.css');
page {
  background: #f2f4f5;
}
.container {
  .all {
    display: flex;

    justify-content: center;
    height: 60rpx;
    line-height: 60rpx;
    background: #ffffff;
    width: 100%;
    font-size: 24rpx;
    font-weight: 400;
    color: #353535;
    text-align: center;
    .icon {
      margin-left: 10rpx;
      color: #11477f;
      .iconfont {
        font-size: 30rpx;
      }
    }
  }
  .list {
    padding: 10rpx 0;
    .item {
      padding: 20rpx 37rpx;
      box-sizing: border-box;
      margin-top: 10rpx;
      background: #ffffff;
      padding-top: 22rpx;
      .itemTop {
        display: flex;
        justify-content: space-between;
        .orderType {
          font-size: 24rpx;
          font-weight: 400;
          color: #12477f;
        }
        .state {
          font-size: 24rpx;
          font-weight: 400;
          color: #878787;
        }
      }
      .title {
        margin-top: 21rpx;
        color: #353535;
        font-weight: 400;
        font-size: 28rpx;
        overflow: hidden;
        margin-right: 60rpx;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .orderBottom {
        display: flex;
        margin-top: 46rpx;
        justify-content: space-between;
        .orderTime {
          color: #3b4753;
          font-size: 28rpx;
          font-weight: 400;
        }
        .price {
          font-weight: bold;
          color: #e55925;
          font-size: 32rpx;
        }
      }
    }
  }
}
</style>