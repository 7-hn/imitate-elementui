<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>

export default {
  name: 'Form',
  components: {
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
