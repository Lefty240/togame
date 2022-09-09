<!--
 * @Author: 粟雄
 * @Date: 2022-09-08 14:28:57
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-09 15:05:31
 * @Description: 
-->
<script setup lang="ts">
import { NButton } from 'naive-ui'
import { mainStore } from '@/store/index'
const store = mainStore()
</script>

<template>
  <div>{{ store.name }}</div>
  <button @click="store.changeName">change</button>
  <NButton>测试</NButton>
</template>

<style lang="scss" scoped>
div {
  color: $test-color;
}
</style>
