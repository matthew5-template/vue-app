<template>
  <div>
    {{ title }}
    <div @click="onHomeClick">home {{ homeCount }}</div>
    <div @click="onSettingClick">setting {{ settingCount }}</div>
    <a-button @click="onAllClick">all</a-button>
    <a-switch />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { getHomepageJson } from '@/apis/homepage'
export default {
  data() {
    return {
      title: 'homepage'
    }
  },
  computed: {
    ...mapState({
      homeCount: ({ homepage }) => homepage.count,
      settingCount: ({ setting }) => setting.count
    })
  },
  methods: {
    ...mapActions('homepage', ['increase2Times', 'increaseAll']),
    ...mapActions('setting', ['increaseSetting']),
    ...mapMutations('setting', ['increase']),
    onHomeClick() {
      this.increase2Times(1)
      // this.$router.push('/setting')
    },
    onSettingClick() {
      this.increaseSetting(1)
      // this.increase(1)
    },
    onAllClick() {
      this.increaseAll(1)
      getHomepageJson()
    }
  }
}
</script>
