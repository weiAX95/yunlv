<template>
  <view class="container">
    <view class="mask" @click="close"></view>
    <view class="card">
      <slot></slot>
    </view>
  </view>
</template>

<script lang='ts'>
import Vue from 'vue';
export default {
  name: "Mask",
  data() {
    return {};
  },
  methods: {
    close() {
      uni.$emit('mask', { show: false });

    },

  },
  components: {
  }

}
</script>

<style lang='scss' scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .mask {
    flex: 1;
    background-color: #000;
    opacity: 0.1;
  }
  .card {
    background-color: #ffffff;
    min-height: 100rpx;
    border-radius: 20rpx 20rpx 0 0;
    padding: 30rpx;
    box-sizing: border-box;
  }
}
</style>