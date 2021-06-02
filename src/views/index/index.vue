<template>
  <div class="bg-gray-200">
    <!-- 轮播图 -->
    <div class="w-full h-40">
      <van-swipe ref="swipe" class="w-full h-40 bg-blue-400 text-center text-xl" :autoplay="3000" indicator-color="white" lazy-render>
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <!-- 公告 -->
    <div class="w-full h-6 px-2">
      公告
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import { ref } from 'vue'
export default {
  name: 'Index',
  components: {},
  setup() {

  },
  data() {
    return {}
  },
  mounted() {
    this.$refs.swipe.resize()
  }
}
</script>

<style scoped lang="less"></style>
