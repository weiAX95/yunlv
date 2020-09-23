<template>
  <view class="container">
    <Mask class="mask">
      <block v-if="type == 'self'">
        <view class="title">四季风旅游</view>
        <view class="teleLoginForm">
          <view>你的手机号码</view>
          <view>1300000000000</view>
        </view>
        <view class="other" @click="jumpOhter">使用其他手机号登录</view>
        <view class="self_btns">
          <button>允许</button>
          <button>拒绝</button>
        </view>
      </block>
      <block v-if="type == 'other'">
        <view class="other_title">短信验证登录</view>
        <view class="other_form">
          <view class="teleNum">
            <input
              type="text"
              v-model="teleNum"
              placeholder="请填写注册或绑定手机号"
            />
          </view>
          <view class="code">
            <input type="text" v-model="code" placeholder="请填写短信动态码" />
          </view>
        </view>
      </block>
    </Mask>
  </view>
</template>

<script lang='ts'>
import Vue from 'vue';
import Mask from '../Mask/index.vue';
export default {
  name: "TeleLogin",
  props: {
    type: String
  },
  data() {
    return {
      self: {
        telephone: 123123
      },
      other: {
        teleNum: null,
        code: null
      }
    };
  },
  methods: {
    jumpOhter() {
      uni.$emit('mask', { type: 'other' });
    }
  },
  components: {
    Mask
  }

}
</script>

<style lang='scss' scoped>
.container {
  .mask {
    width: 100%;
    height: 100%;
    .title {
      font-size: 28rpx;
    }
    .teleLoginForm {
      view {
        margin-top: 15rpx;
        font-size: 27rpx;
        border-bottom: 1px solid #ccc;
      }
    }
    .other {
      margin-top: 15rpx;
      font-size: 27rpx;
      color: blue;
    }
    .self_btns {
      margin-top: 20rpx;
      display: flex;
      button {
        font-size: 25rpx;
      }
    }
  }
  .other_title {
    text-align: center;
    font-size: 28rpx;
  }
  .other_form {
    padding: 0 50rpx;
    .teleNum {
      background-color: #ccc;
    }
    .code {
      margin-top: 10rpx;
      background-color: #ccc;
    }
  }
}
</style>