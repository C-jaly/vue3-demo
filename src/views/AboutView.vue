<!-- 选项式写法页面 -->
<template>
  <div class="about">
    <!-- .stop阻止冒泡 .prevent阻止默认行为, .self自身触发, .once触发一次, .passive立即发生, .capture捕获 -->
    <button type='primary' @click="clickToCview">点击跳转下一页面</button>
    <h1 ref="countRef">data中定义的值count： {{ count }}</h1>
    <button ref="countBtnRef" type='primary' @click="clickChangeCount">点击更改count</button>
    <h1>computed中定义的值lastItemName: {{ lastItemName }}</h1>
    <div>
      <label><input type="radio" v-model="isTab" value="OptionalTabA" />A组件</label>
      <label><input type="radio" v-model="isTab" value="OptionalTabB" />B组件</label>
      <KeepAlive>
        <component :is="isTab" @watchEmit="watchEmit" v-model.capitalize="BinputValue">{{ BinputValue }}</component>
      </KeepAlive>
    </div>
  </div>
</template>

<script>
import OptionalTabA from '@/components/OptionalTabA.vue';
import OptionalTabB from '@/components/OptionalTabB.vue';
import { computed } from 'vue';

export default {
  provide() {
    return {
      // 默认非响应式的
      from: this.count,
      // 使用计算属性，可以变为响应式的
      fromResponseval: computed(() =>this.count),
    }
  },
  // 创建实例响应状态
  data() {
    return {
      count: 1,
      isTab: 'OptionalTabA',
      list: [{
        name: 'sd',
        age: 23
      }, {
        name: 'sd',
        age: 23
      }],
      BinputValue: 'hello'
    }
  },
  components: {OptionalTabA, OptionalTabB},
  computed: {
    lastItemName() {
      return this.list && this.list[0].name
    }
  },
  // 默认都是浅层的
  watch: {
    count(prev, next) {
      console.log('watchcount改变', prev, next)
      // ！！！改变引用类型的内部属性，视图会刷新，但是watch不会监听list的改变
      this.list[0].name = '改变没' + this.count
    },
    // 默认是浅层的，修改数组项不会监听
    // list(next, prev) {
    //   console.log(prev, 'list修改了', next)
    // },
    // deep: true设置深层监听
    list: {
      handler (next, prev) {
        console.log(prev, 'deep: true深层监听list修改了', next)
      },
      deep: true
    }
  },
  mounted() {
    console.log('AboutView页面装载完毕')
    // ref是渲染函数的结果创建的，所以必须要挂载以后才能访问
    this.$refs.countBtnRef.click();
  },
  methods: {
    clickChangeCount() {
      this.count ++;
    },
    clickToCview() {
      this.$router.push('/c');
    },
    watchEmit() {
      console.log('watchEmit')
      alert('监听到了子组件事件')
    }
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
