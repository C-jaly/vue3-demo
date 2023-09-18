<script setup>
  import CustomInput from '../components/CustomInput.vue'
  import { ref, reactive, computed, watch, provide } from 'vue'

  const count = ref(0);

  // watch形式控制message
  // const message = ref('hello');
  // watch(count, () => {
  //   message.value = `clickCompB${count.value}`;
  // })

  // computed形式控制message
  const message = computed(() => `clickCompB${count.value}`);

  const list = reactive({
    pageSize: 10,
    total: 10,
    page: 1,
    item: {
      name: 'cjl',
      id: 1,
    }
  })
  provide('listItem', {
    item: list.item,
    changeItemId: () => {
      list.item.id += 1
    }
  });
  function clickCompB() {
    count.value ++;
    list.pageSize += 1;
  };
  
</script>

<template>
<div>
   {{ message }}
   <button
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
  <div>list {{ list }}}</div>
</div>

  
</template>