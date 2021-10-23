<template>
  <div>
    <span>{{ label }}</span>
    <slot></slot>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
