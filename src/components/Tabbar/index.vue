<template>
  <van-tabbar
    v-model="active_tabbar"
    fixed
    :placeholder="true"
    :route="true"
  >
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Tabbar',
  setup(props) {
    const active_tabbar = ref(0)
    const tabbarData = reactive([
      {
        icon: 'wap-home-o',
        title: '主页',
        to: {
          name: 'Index'
        }
      },
      {
        icon: 'gem-o',
        title: '工具',
        to: {
          name: 'Tools'
        }
      },
      {
        icon: 'user-o',
        title: '关于',
        to: {
          name: 'About'
        }
      }
    ])
    return {
      active_tabbar,
      tabbarData
    }
  }
}
</script>

<style>

</style>
