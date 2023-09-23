<!-- 组合式写法页面 -->
<script setup>
  import CustomInput from '../components/CustomInput.vue'
  import { ref, reactive, computed, watch, provide, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  const count = ref(0); // 响应式状态属性
  const countBtnRef = ref();// 获取ref定义的同名元素
  const list = reactive({
    pageSize: 10,
    total: 10,
    page: 1,
    item: {
      name: 'cjl',
      id: 1,
    },
    arr: [{type: 1, query: 'query2'}, {type: 2, query: 'query2'}]
  })
  // computed形式控制message
  const message = computed(() => `clickCompB${count.value}`); // 计算属性
  const router = useRouter(); // 获取路由实例
  // 监听属性
  watch(count, (newv, prev) => {
    console.log(prev, '监听到count改变', newv);
    list.arr[0].query = list.arr[0].query + newv;
    list.pageSize = 11
  });
  watch(list, (newv, prev) => {
    console.log(prev.arr[0].query, '监听到list改变', newv.arr[0].query);
  });
  // !!监听不到这个变化，因为拿到的是个Number
  watch(list.pageSize, (newv, prev) => {
    console.log(prev, '直接监听list.pageSize改变', newv);
  });
  // 需要监听一个返回这个值的函数
  watch(() => list.pageSize, (newv, prev) => {
    console.log(prev, '监听函数list.pageSize改变', newv);
  });
  watch(list.arr, (newv, prev) => {
    console.log(prev[0].query, '监听到list.arr改变', newv[0].query);
  });
  provide('listItem', {
    item: list.item,
    changeItemId: () => {
      list.item.id += 1
    }
  });
  function clickCompB() {
    count.value ++;
  };
  function onClickToAbout() {
    router.push({
      name: 'about'
    })

  };
  onMounted(() => {
    console.log(list);
    list.item.name = 'sdfsf'
  })
  
</script>

<template>
<div>
   {{ message }}
   <button @click="onClickToAbout">点击跳转到about页面</button>
   <button
    ref="countBtnRef"
    @click="clickCompB">点击按钮更改count</button>
  <CustomInput 
    from="A"
    :value="count"
    obj=""
  >
  <template v-slot:header><div>header插槽内容</div></template>
  <template v-slot="slotprops">默认插槽内容{{ slotprops }}</template>
  <template v-slot:bottom><div>bottom插槽内容</div></template>
</CustomInput>
  <div>list {{ list }}</div>
</div>

  
</template>