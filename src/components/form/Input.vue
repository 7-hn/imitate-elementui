<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handlerInput"/>
  </div>
</template>

<script>
export default {
  name: 'Input',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handlerInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
