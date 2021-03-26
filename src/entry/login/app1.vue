<template>
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="info">信息按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <div class="test">123
    <p class="son">789</p>
  </div>
</template>

<script>
import axios  from 'axios';
// import Home from './page/home/index.vue';
export default {
  components: {
    // Home
  },
  data() {
    return {
      text: 'lrxu'
    };
  },
  methods: {
    click() {
      axios.get('/v1/cities/');
    }

  }
};
</script>

<style lang="scss" scoped>
  .test{
    color: red;
    .son{
      color: blue;
    }
  }
</style>