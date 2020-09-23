<template>
  <view class="container">
    <view class="typeList">
      <slot></slot>
    </view>
    <view class="mask"></view>
  </view>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: '',
  data() {
    return {};
  },
  methods: {}
});
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  .typeList {
    background: #fff;
  }
  .mask {
    background: #000;
    opacity: 0.5;
    flex: 1;
  }
}
</style>