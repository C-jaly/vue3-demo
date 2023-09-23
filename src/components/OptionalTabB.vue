<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => {}
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    bInput(e) {
      if (this.modelModifiers.capitalize) {
        // 对返回参数做一些操作操作
        this.$emit('update:modelValue', e.target.value)
      } else {
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
}
</script>

<template>
  <div>
    <div>组件内容TabB</div>
    <div>
      <input :value="modelValue" @input="bInput" placeholder="请输入内容" />
      <slot />
    </div>
  </div>
</template>