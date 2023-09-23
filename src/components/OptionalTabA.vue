<script>
export default {
  emits: ['watchEmit'],
  // inject: ['from']
  inject: {
    provider: {
      from: 'from', // 重命名
      default: 'default Value' // 默认值
    },
    fromResponseval: {
      default: () => 'default Value'
    }
  }
}
</script>

<template>
  <div>
    组件内容TabA
    <button @click="$emit('watchEmit')">按钮触发父组件事件</button>
    <div>上层组件注入默认为非响应式{{ provider }}</div>
    <div>上层组件注入computed改为响应式{{ fromResponseval }}</div>
  </div>
</template>