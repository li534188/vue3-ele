<template>
  <section class="home-wrapper">
    <header class="home-header">
      <div class="header-nav-main">
        <div class="header-nav-wrapper">
          <nav v-for="item in headerData" :key="item.value" :data-area="item.value">
            {{item.title}}
          </nav>
        </div>
      </div>
      <div class="header-search">
        搜索
      </div>
      <div class="header-refresh">
        刷新
      </div>
    </header>
    <content class="home-content">
    </content>
    <footer class="home-footer">
      <div>
        <nav v-for="item in footerData" :key="item.value" :data-area="item.value">
          {{item.title}}
        </nav>
      </div>
    </footer>
  </section>

</template>

<script>
import axios  from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      headerData: [{
        title: '自选',
        value: '0'
      }, {
        title: '美股',
        value: '1'
      }, {
        title: '港股',
        value: '2'
      }, {
        title: '沪深',
        value: '3'
      }, {
        title: '伦敦',
        value: '4'
      }, {
        title: '新加坡',
        value: '5'
      }],
      footerData: [{
        title: '行情',
        value: '0'
      }, {
        title: '社区',
        value: '1'
      }, {
        title: '交易',
        value: '2'
      }, {
        title: '我的',
        value: '3'
      }, {
        title: '发现',
        value: '4'
      }],
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
  .home-wrapper{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .home-header{
      flex:0 0 10vh;
      display: flex;
      align-items: center;
      .header-nav-main{
        flex:1;
        overflow: scroll;
        .header-nav-wrapper{
          width: 120vw;
          height: 100%;
          overflow: scroll;
        }
        nav{
          width: 20vw;
        }
      }
      .header-search{
        flex: 0 0 10vw;
      }
      .header-refresh{
        flex: 0 0 10vw;
      }
      nav{
        float: left;
      }
    }
    .home-footer{
      flex:0 0 10vh;
      nav{
        float: left;
      }
    }
    .home-content{
      flex: 1;
    }
  }

</style>