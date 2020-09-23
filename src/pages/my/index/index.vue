<template>
  <view class="container">
    <view class="topTitle">{{ topTitle }}</view>
    <view class="userInfo" @click="login">
      <view class="avator">
        <image :src="userInfo.src" mode="aspectFit" />
      </view>
      <view class="notLog">未登录/注册</view>
    </view>
    <view class="order">
      <block v-for="(item, index) in orderInfo" :key="index">
        <view :class="item.className" @click="goPage(item)">
          <view class="icon">
            <span class="iconfont" :class="item.icon"></span>
          </view>
          <view>{{ item.title }}</view>
        </view>
      </block>
    </view>
    <view class="otherInfo">
      <block v-for="(item, index) in otherInfo" :key="index">
        <view :class="item.className" @click="goPage(item)">
          <view class="left">
            <view class="icon">
              <span class="iconfont" :class="item.icon"></span>
            </view>
            <view class="title">{{ item.title }}</view>
          </view>
          <view class="arrows">
            <span
              class="iconfont"
              :class="{ 'icon-right': item.arrows }"
            ></span>
          </view>
        </view>
      </block>
    </view>
  </view>
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      topTitle: '云旅旅游',
      userInfo: {
        src: "../../../static/images/avator.png"
      },
      orderInfo: [
        { className: 'all', icon: "icon-order", title: "全部订单", url: "../order/all/index" },
        { className: 'obligation', icon: "icon-money", title: "待付款", url: "../order/obligation/index" },
        { className: 'notTrip', icon: "icon-time", title: "未出行", url: "../order/notTrip/index" }
      ],
      otherInfo: [  //后续添加只需要加一条数据,修改图标   然后把样式粘一份就好
        { className: "personManager", icon: "icon-user", title: "出行人管理", arrows: true, url: "../order/personManager/index" },
        { className: "collect", icon: "icon-Heart", title: "我的收藏", arrows: true, url: "../order/collect/index" },
        { className: "exit", icon: "icon-exit", title: "退出登录", arrows: true, url: "" }
      ]
    };
  },
  methods: {
    login() {
      uni.navigateTo({
        url: '../../login/index'
      });
    },
    goPage(args: { className: string, url: string; }) {
      let name = args.className;
      if (name !== 'exit') {
        uni.navigateTo({
          url: args.url
        });
      } else {
        this.exit();
      }
    },
    exit() {
      uni.showModal({
        content: '确定退出登录',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if (result.confirm) {

          }
        },
        fail: () => { },
        complete: () => { }
      });
    }

  }
});
</script>

<style lang='scss' scoped>
@import url('../../../static/iconfont.css');
.container {
  background: url('../../../static/images/beijing@2x.png') no-repeat;
  width: 100%;
  height: 100%;
  background-position: 0 0;
  background-size: contain;
  padding: 64rpx 25rpx 0;
  box-sizing: border-box;
  .topTitle {
    font-weight: 400;
    color: #ffffff;
    font-size: 32rpx;
  }
  .userInfo {
    width: 100%;
    .avator {
      width: 156rpx;
      height: 156rpx;
      display: flex;
      margin: 0 auto;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .notLog {
      margin-top: 12rpx;
      font-size: 36rpx;
      font-weight: 400;
      color: #fefefe;
      text-align: center;
    }
  }

  .order {
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20rpx;
    margin: 80rpx 45rpx 0;
    box-shadow: 0px 14px 22px 2px rgba(0, 0, 0, 0.06);
    font-size: 24rpx;
    color: #333;
    padding: 20rpx;
    box-sizing: border-box;
    .all {
      .icon {
        color: #fff;
        text-align: center;
        line-height: 80rpx;
        border-radius: 50%;
        background: linear-gradient(110deg, #ffa080, #ff5d55);
        width: 80rpx;
        height: 80rpx;
      }
    }
    .obligation {
      .icon {
        color: #fff;
        text-align: center;
        line-height: 80rpx;
        border-radius: 50%;
        background: linear-gradient(110deg, #7fd5fd, #5a8ffb);
        width: 80rpx;
        height: 80rpx;
      }
    }
    .notTrip {
      .icon {
        color: #fff;

        text-align: center;
        line-height: 80rpx;
        background: linear-gradient(110deg, #ffe680, #fbb95a);
        border-radius: 50%;
        width: 80rpx;
        height: 80rpx;
      }
    }
  }
  .otherInfo {
    background: #ffffff;
    margin: 35rpx 15rpx 0;
    padding: 0 23rpx;
    box-sizing: border-box;

    box-shadow: 1px -16px 19px 2px rgba(0, 0, 0, 0.04),
      0px 16px 19px 2px rgba(0, 0, 0, 0.04);

    border-radius: 20rpx;
    .personManager {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f5f5f5;
      min-height: 100rpx;
      line-height: 100rpx;
      .left {
        display: flex;
        .title {
          color: #333333;
          font-size: 30rpx;
          font-weight: 500;
        }
        .icon {
          color: #fff;
          margin-top: 30rpx;
          width: 44rpx;
          background: #ed4a47;
          height: 44rpx;
          line-height: 44rpx;
          border-radius: 14rpx;
          text-align: center;
          margin-right: 20rpx;
        }
      }
      .arrows {
        .iconfont {
          color: #c3c3c3;
          font-size: 30rpx;
        }
      }
    }
    .collect {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f5f5f5;
      min-height: 100rpx;
      line-height: 100rpx;
      .left {
        display: flex;
        .title {
          color: #333333;
          font-size: 30rpx;
          font-weight: 500;
        }
        .icon {
          color: #fff;
          margin-top: 30rpx;
          width: 44rpx;
          background: #50e3c2;
          height: 44rpx;
          line-height: 44rpx;
          border-radius: 14rpx;
          text-align: center;
          margin-right: 20rpx;
          .iconfont {
            font-size: 30rpx;
          }
        }
      }
      .arrows {
        .iconfont {
          color: #c3c3c3;
          font-size: 30rpx;
        }
      }
    }
    .exit {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f5f5f5;
      min-height: 100rpx;
      line-height: 100rpx;
      .left {
        display: flex;
        .title {
          color: #333333;
          font-size: 30rpx;
          font-weight: 500;
        }
        .icon {
          color: #fff;
          margin-top: 30rpx;
          width: 44rpx;
          background: #50e3c2;
          height: 44rpx;
          line-height: 44rpx;
          border-radius: 14rpx;
          text-align: center;
          margin-right: 20rpx;
          .iconfont {
            font-size: 30rpx;
          }
        }
      }
      .arrows {
        .iconfont {
          color: #c3c3c3;
          font-size: 30rpx;
        }
      }
    }
  }
}
</style>