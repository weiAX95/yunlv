<template>
  <view class="container">
    <view class="infoTop">
      <view class="sn">
        <view class="left">
          <view>订单编号:</view>
          <view>{{ info.order.sn }}</view>
        </view>
        <view class="state">
          <span v-if="info.state == -1">已取消</span>
          <span v-else-if="info.state == 0">未完成</span>
          <span v-else-if="info.state == 1">已完成</span>
        </view>
      </view>
      <view class="total">
        <view class="total-name">订单总额</view>
        <view class="total-content">{{ info.order.total }}</view>
      </view>
    </view>

    <view class="orderConent">
      <view class="title">{{ info.title }}</view>
      <view class="number">
        <view class="number-name">购买数量</view>
        <view class="number-content">{{ info.order.num }}</view>
      </view>
      <view class="orderTime">
        <view class="orderTime-name">出发日期</view>
        <view class="orderTime-content">{{ info.order.departureTime }}</view>
      </view>
    </view>

    <view class="notice">
      <view class="title">提醒须知</view>
      <view class="content"
        >【售后服务标准】
        1、坏果包赔付，坏多少赔多少！请在快递签收后24小时内联系客服申请售后，坏果和快递单一起的照片，提供后我们立即赔付！
        2、理赔时效：签收24小时 3、赔付标准：（价格/果子总数）*坏果...</view
      >
    </view>
    <view class="orderInfo">
      <view class="title">订单信息</view>
      <view class="linkman">
        <view class="linkman-title">下单人:</view>
        <view class="linkman-info">
          <view class="name">{{ info.order.buyName }}</view>
          <view class="teleP">{{ info.order.phone }}</view>
        </view>
      </view>
      <view class="express">
        <view class="express-title">支付方式:</view>
        <view class="express-content">
          <span v-if="info.order.payway == 1">快捷支付</span>
        </view>
      </view>
      <view class="orderSn">
        <view class="orderSn-title">订单编号:</view>
        <view class="orderSn-content">{{ info.order.sn }}</view>
      </view>
      <view class="orderTime">
        <view class="orderTime-title">下单时间:</view>
        <view class="orderTime-content">{{ info.order.orderTime }}</view>
      </view>
    </view>
    <view class="expressInfo">
      <view class="title">快递信息</view>
      <view class="linkman">
        <view class="linkman-title">联系人:</view>
        <view class="linkman-content">
          <view class="linkman-content-name">{{ info.express.name }}</view>
          <view class="linkman-content-phone">{{ info.express.phone }}</view>
        </view>
      </view>
      <view class="address">
        <view class="address-title">邮寄地址:</view>
        <view class="address-content">{{ info.express.address }}</view>
      </view>
      <view class="odd">
        <view class="sn">
          <view class="sn-title">快递单号:</view>
          <view class="sn-content">{{ info.express.expressNumber }}</view>
        </view>
        <view class="operation" @click="copySn">复制</view>
      </view>
    </view>
  </view>
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  onLoad(option: { data: string; }) {
    this.info = JSON.parse(option.data);
  },
  data() {
    return {
      info: {}
    };
  },
  methods: {
    copySn() {
      let info: any = this.info;
      uni.setClipboardData({
        data: info.express.expressNumber,
        success: function () {
          // uni.showToast({
          //     icon:'none',
          //     duration:2000,
          //     title:'复制成功'
          // })
        }
      });
    }
  }
})
</script>

<style lang='scss' scoped>
page {
  background: #f1f3f7;
}
.container {
  .infoTop {
    background: #fff3cd;
    overflow: hidden;
    padding: 0 36rpx 0 42rpx;
    .sn {
      margin-top: 38rpx;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        font-size: 28rpx;
        color: #3b4753;
        font-weight: 400;
        view {
          margin-right: 20rpx;
        }
      }
      .state {
        color: #535353;
        font-size: 32rpx;
        font-weight: bold;
      }
    }
    .total {
      display: flex;
      margin-top: 30rpx;
      margin-bottom: 20rpx;
      .total-name {
        font-size: 28rpx;
        margin-right: 20rpx;
        color: #3b4753;
        vertical-align: bottom;
      }
      .total-content {
        color: #ee4a2a;
        font-weight: Bold;
        font-size: 28rpx;
      }
    }
  }
  .orderConent {
    background: #fff;
    .title {
      margin: 25rpx 40rpx 0;
      padding: 30rpx 0;
      font-size: 30rpx;
      color: #353535;
      font-weight: 400;
      border-bottom: 1rpx solid #e5e5e5;
    }
    .number {
      display: flex;
      margin: 27rpx 40rpx 0;

      .number-name {
        color: #353535;
        font-size: 25rpx;
        margin-right: 20rpx;
      }
      .number-content {
        color: #353535;
        font-size: 24rpx;
      }
    }
    .orderTime {
      display: flex;
      padding-bottom: 44rpx;
      margin: 27rpx 40rpx 0;
      .orderTime-name {
        color: #353535;
        font-size: 25rpx;
      }
      .orderTime-content {
        color: #353535;
        font-size: 24rpx;
        margin-left: 20rpx;
      }
    }
  }

  .notice {
    margin-top: 37rpx;
    background: #fff;
    padding: 0 21rpx 36rpx 30rpx;
    .title {
      height: 74rpx;
      line-height: 74rpx;
      font-size: 30rpx;
      font-weight: bold;
      color: #353535;
      border-bottom: 1rpx solid #e5e5e5;
    }
    .content {
      margin-top: 22rpx;
      font-size: 28rpx;
      color: #333333;
    }
  }

  .orderInfo {
    margin-top: 23rpx;
    background: #fff;
    padding: 0 21rpx 36rpx 30rpx;
    color: #353535;
    font-size: 28rpx;

    .title {
      height: 74rpx;
      line-height: 74rpx;
      font-size: 30rpx;
      font-weight: bold;
      color: #353535;
      border-bottom: 1rpx solid #e5e5e5;
    }
    .linkman {
      margin-top: 39rpx;
      display: flex;
      .linkman-title {
        margin-right: 20rpx;
      }
      .linkman-info {
        display: flex;
        .name {
          margin-right: 20rpx;
        }
      }
    }
    .express {
      margin-top: 30rpx;
      display: flex;
      .express-title {
        margin-right: 20rpx;
      }
    }
    .orderSn {
      margin-top: 30rpx;
      display: flex;
      .orderSn-title {
        margin-right: 20rpx;
      }
    }
    .orderTime {
      margin-top: 30rpx;
      display: flex;
      .orderTime-title {
        margin-right: 20rpx;
      }
    }
  }

  .expressInfo {
    margin-top: 22rpx;
    background: #fff;
    padding: 0 21rpx 36rpx 30rpx;
    .title {
      height: 74rpx;
      line-height: 74rpx;
      font-size: 30rpx;
      font-weight: bold;
      color: #353535;
      border-bottom: 1rpx solid #e5e5e5;
    }
    .linkman {
      display: flex;
      font-size: 28rpx;
      color: #353535;
      margin-top: 39rpx;
      .linkman-title {
        margin-right: 20rpx;
      }
      .linkman-content {
        display: flex;
        .linkman-content-name {
          margin-right: 20rpx;
        }
      }
    }

    .address {
      display: flex;
      font-size: 28rpx;
      color: #353535;
      margin-top: 30rpx;
      .address-title {
        margin-right: 20rpx;
      }
    }

    .odd {
      display: flex;
      margin-top: 28rpx;
      justify-content: space-between;
      font-size: 28rpx;
      color: #353535;
      .sn {
        display: flex;
        .sn-title {
          margin-right: 20rpx;
        }
      }
      .operation {
        color: #12477f;
      }
    }
  }
}
</style>