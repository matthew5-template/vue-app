<template>
  <div>
    <div>{{ title }}</div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'this is root',
    }
  },
}
</script>

<style></style>
