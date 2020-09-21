<template>
  <div @click="onClick">{{ title }}</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'setting'
    }
  },
  methods: {
    onClick() {
      this.$router.push('/homepage')
    }
  }
}
</script>
