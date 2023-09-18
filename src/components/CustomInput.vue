<script setup>
  import GrandSon from '../components/GrandSon.vue'
  import { ref, computed, watch } from 'vue';

  defineProps({
    value: Number,

  });
  function CClickButton(v) {
    alert(`孙组件触发子组件传递的事件参数${v}`)
  }
</script>

<template>
  <div class="sonStyle">
    <h1>子组件</h1>
    <div>传入的value{{ value }}</div>
    <!-- slot相关内容 -->
    <div>
      <slot name="header"></slot>
      <slot :value="value"></slot>
      <!-- 等同于 -->
      <slot v-bind="{value}"></slot>
      <slot name="bottom" ></slot>

    </div>
    <GrandSon @clickButton="CClickButton" />
  </div>
</template> 
<style scoped>
.sonStyle {
  background-color: bisque;
}
</style>