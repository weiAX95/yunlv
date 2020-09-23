<template>
  <view class="container">
    <view class="logo">
      <image src="../../static/images/logo.png" mode="aspectFit" />
    </view>
    <view class="loginType">
      <button class="telephone" @click="telephone" open-data="getPhoneNumber">
        手机号一键登录
      </button>
      <view class="otherTelep" @click="otherTelep">其他手机号登录</view>
    </view>
    <TeleLogin
      class="TeleLogin"
      v-if="dialog.show"
      :type="dialog.type"
    ></TeleLogin>
  </view>
</template>
<script lang='ts'>
import Vue from "vue";
import TeleLogin from '../../components/login/TeleLogin.vue';
export default Vue.extend({
  data() {
    return {
      dialog: {
        show: false,
        type: "self"
      }
    };
  },
  created() {
    let o = this;
    uni.$on('mask', args => {

      let keys: string[] = Object.keys(args);
      if (keys.length = 1) {
        let res: any = keys[0];
        o.dialog[res] = args[res];
      } else if (keys.length > 1) {
        keys.forEach(item => {
          this.dialog[item] = args[item];
        });
      } else {
        return;
      }

    });
  },
  destroyed() {
    uni.$off('mask', function () { });
  },
  methods: {
    getPhoneNumber() {

    },
    telephone() {
      this.dialog.type = 'self';
      this.dialog.show = true;
    },
    otherTelep() {
      this.dialog.type = 'other';
      this.dialog.show = true;
    }
  },
  components: {
    TeleLogin
  },
})
</script>
<style lang='scss' scoped>
.container {
  height: 100%;
  position: absolute;
  width: 100%;
  .logo {
    margin: 79rpx auto 0;
    width: 216rpx;
    height: 234rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .telephone {
    margin: 136rpx 43rpx 0;
    box-shadow: 0px 8px 24px 2px rgba(248, 192, 21, 0.36);
    height: 90rpx;
    background: #f8c015ff;
    border-radius: 45rpx;
    text-align: center;
    line-height: 90rpx;
    font-size: 32rpx;
    font-weight: bold;
  }
  .otherTelep {
    text-align: center;
    margin-top: 40rpx;
    font-weight: bold;
    font-size: 28rpx;
    color: #333333;
  }
  .TeleLogin {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
  }
}
</style>