<!--
 * @Author: 粟雄
 * @Date: 2022-09-14 16:29:11
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-14 16:48:25
 * @Description: 
-->
<template>
  <div class="home">home</div>
</template>
<script lang="ts" setup>
import { defineComponent } from 'vue'
import userStore from '@/store/user/index'
import { storeToRefs } from 'pinia'
const store = userStore()
const { token } = storeToRefs(store)
console.log(token.value)
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
