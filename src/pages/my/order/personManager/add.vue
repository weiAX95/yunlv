<template>
  <view class="container">
    <view class="top">
      <view class="save">保存</view>
    </view>
    <view class="visitor">
      <view class="title">
        <view>旅客姓名</view>
      </view>

      <view class="name">
        <view class="prefix">姓名</view>
        <view class="name-input">
          <input type="text" placeholder="请填写姓名" />
        </view>
      </view>

      <view class="spell">
        <view class="surname">
          <view class="prefix">姓氏拼音</view>
          <view class="surname-input">
            <input placeholder="请输入" />
          </view>
        </view>
        <view class="spell-name">
          <view class="prefix">名字拼音</view>
          <view class="spell-name-input">
            <input type="text" placeholder="请输入" />
          </view>
        </view>
      </view>

      <view class="birth">
        <view class="prefix">出生日期</view>
        <view class="birth-input">
          <input type="text" disabled="disabled" />
        </view>
      </view>
      <view class="sex">
        <view class="prefix"></view>
        <view class="sex-input">
          <radio-group>
            <label for="man"> <radio value="男" id="man" />男 </label>
            <label for="woman"> <radio value="女" id="woman" />女 </label>
          </radio-group>
        </view>
      </view>
    </view>
    <view class="age">
      <view class="prefix">年龄</view>
      <view class="age-input">
        <input type="text" placeholder="请填写年龄" />
      </view>
    </view>

    <view class="certificate">
      <view class="title">证件信息</view>
      <view class="card-type">
        <view class="prefix">证件类型</view>
        <view class="card-type-input">
          <input type="text" placeholder="请填写姓名" />
        </view>
      </view>
      <view class="card-num">
        <view class="prefix">证件类型</view>
        <view class="card-num-input">
          <input type="text" placeholder="请填写证件号" />
        </view>
      </view>
      <view class="valid">
        <view class="prefix">出境证件有效日期</view>
        <view class="valid-input">
          <input type="text" placeholder="请选择日期" />
        </view>
      </view>
    </view>

    <view class="address">
      <view class="region">
        <view class="prefix">邮寄地址</view>
        <view class="region-input">
          <input type="text" placeholder="选择省市区" />
        </view>
      </view>
      <view class="address-detail">
        <view class="prefix"></view>
        <view class="address-detail-input">
          <input type="text" placeholder="请填写详细地址" />
        </view>
      </view>
    </view>
    <view class="self">
      <view class="prefix">设置为本人</view>
      <view class="btn"></view>
    </view>
  </view>
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {};
  }
})
</script>

<style lang='scss' scoped>
.container {
  height: 100%;
  background-color: #f1f4f8;
  overflow: hidden;
  .top {
    border-radius: 15px;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 20rpx;
    padding: 0 20rpx;
    .save {
      width: 98rpx;
      height: 46rpx;
      line-height: 46rpx;
      font-size: 24rpx;
      background: #12487f;
      border-radius: 6px;
      color: #fff;
      text-align: center;
    }
  }
  .visitor {
    .name {
      .prefix {
        height: 100%;
      }
    }
    margin-top: 16rpx;
    background: #fff;
    border-radius: 15px;
  }
  .certificate {
    background: #fff;
    border-radius: 15px;
  }
  .address {
    background: #fff;
    border-radius: 15px;
  }
  .self {
    background: #fff;
    border-radius: 15px;
  }

  .birth-input {
    border: 1px solid #ccc;
  }
}
</style>