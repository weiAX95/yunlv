<template>
  <view class="container">
    <view class="operate">
      <view class="search">
        <input type="text" placeholder="请输入联系人姓名搜索" />
        <i class="icon"></i>
      </view>
      <view class="add">
        <button @click="add">添加</button>
      </view>
    </view>
    <view class="list">
      <view class="list-item" v-for="(item, index) in linkmanList" :key="index">
        <view class="list-left">
          <view class="select" v-if="isSelected">
            <span class="isSelected"></span>
          </view>
          <view class="list-left-detail">
            <view class="list-left-detail-prefix">
              <view class="name">{{ item.name }}</view>
              <view class="cardType">{{
                item.cardType == 1 ? '身份证' : ''
              }}</view>
            </view>
            <view class="list-left-detail-info">
              <view class="info">
                <text class="sex">{{ item.sex }}</text>
                <text class="adult">{{ item.adult }}</text>
                <text class="phone">{{ item.phone }}</text>
              </view>
              <view class="cardID">{{ item.cardNum }}</view>
            </view>
          </view>
        </view>
        <view class="list-right">
          <view class="edit" @click="edit">
            <span class="iconfont icon-edit"></span>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: '',
  data() {
    return {
      isSelected: false,
      linkmanList: [
        {
          name: '张三丰',
          sex: '男',
          adult: '成人',
          phone: '13000000000',
          cardType: 1,
          cardNum: '	110101199003073036'
        },
        {
          name: '张三丰',
          sex: '男',
          adult: '成人',
          phone: '13111111111',
          cardType: 1,
          cardNum: '110101199003079331'
        }
      ]
    };
  },
  methods: {
    edit() {},
    add() {
      uni.navigateTo({
        url: './add'
      });
    }
  }
});
</script>
<style lang='scss' scoped>
@import url('../../../../static/iconfont');

.container {
  background: #f1f3f7;
  height: 100%;
  overflow: hidden;
  .operate {
    display: flex;
    padding: 0 21rpx;
    display: flex;
    margin-top: 17rpx;
    .search {
      flex: 1;
      border-radius: 10rpx;
      background: #fff;
      margin-right: 10rpx;
      height: 62rpx;
      input {
        width: 100%;
        height: 100%;
        padding: 0 23rpx;
        font-size: 24rpx;
      }
    }
    .add {
      width: 130rpx;
      height: 62rpx;
      button {
        background: #11477f;
        line-height: 62rpx;
        font-size: 24rpx;
        color: #fff;
      }
    }
  }

  .list {
    .list-item {
      margin-top: 10rpx;
      display: flex;
      padding: 24rpx 49rpx 21rpx 36rpx;
      background: #ffffff;
      .list-left {
        flex: 9;
        display: flex;
        .select {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .isSelected {
            width: 35rpx;
            height: 35rpx;
            border: 1px solid #ccc;
            border-radius: 50%;
          }
        }
        .list-left-detail {
          margin-left: 31rpx;
          display: flex;
          .list-left-detail-prefix {
            .name {
              font-weight: bold;
              color: #353535;
              font-size: 30rpx;
            }
            .cardType {
              margin-top: 18rpx;
              font-size: 24rpx;
              color: #333333;
            }
          }
          .list-left-detail-info {
            margin-left: 40rpx;
            .info {
              font-size: 24rpx;
              color: #888888;
              margin-top: 7rpx;
              .sex {
                margin-right: 20rpx;
              }
              .adult {
                margin-right: 46rpx;
              }
            }
            .cardID {
              margin-top: 18rpx;
              font-size: 24rpx;
              color: #333333;
            }
          }
        }
      }
      .list-right {
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        .edit {
          color: #124880;
        }
      }
    }
  }
}
</style>