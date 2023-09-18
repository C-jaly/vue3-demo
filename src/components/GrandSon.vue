<template>
  <div class="gsonStyle">
    <h1>孙组件</h1>
    <div>注入的数据ID {{ item.id }} 注入的数据name {{ item.name }}</div>
    <!-- <div>注入的数据page {{ page }}</div> -->
    <button class="default" type="default" @click="changeInject">
      点击修改inject的数据
    </button>
    <button class="default" type="default" @click="clickToEmitB">
      点击emit上级组件传递的方法
    </button>
  </div>
</template>

<script setup>
  import { inject, onMounted } from 'vue';

  const emit = defineEmits(['clickButton'])

  const { item, changeItemId } = inject('listItem', {});
  function changeInject() {
    changeItemId();
  }
  function clickToEmitB() {
    emit('clickButton', 1);
  }
</script>
<style scoped>
.gsonStyle {
  background-color:aqua;
}
</style>