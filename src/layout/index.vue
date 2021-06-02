<template>
  <div class="app-wrapper flex flex-col">
    <div class="w-full h-12">
      <HeaderBar />
    </div>
    <div class="flex-1 overflow-y-scroll">
      <router-view v-slot="{ Component }">
        <keep-alive :include="keepAliveRoutes">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div class="w-full h-14">
      <tabbar />
    </div>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import HeaderBar from '@/components/headerBar'
import { computed } from 'vue'
import store from '@/store'

export default {
  name: 'Layout',
  components: {
    Tabbar,
    HeaderBar
  },
  setup() {
    const keepAliveRoutes = computed(() => store.getters.cachedViews)

    return {
      keepAliveRoutes
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.app-wrapper {
  .clearfix();
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
