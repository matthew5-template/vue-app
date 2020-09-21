<template>
  <div @click="onClick">{{ title }}</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'homepage'
    }
  },
  methods: {
    onClick() {
      this.$router.push('/setting')
    }
  }
}
</script>
