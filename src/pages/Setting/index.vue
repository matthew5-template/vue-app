<template>
  <div @click="onClick">{{ title }} {{ count }}</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      title: 'setting'
    }
  },
  computed: {
    ...mapState({
      count: ({ setting }) => setting.count
    })
  },
  methods: {
    ...mapActions('setting', ['increaseSetting']),
    onClick() {
      this.increaseSetting(1)
    }
  }
}
</script>
