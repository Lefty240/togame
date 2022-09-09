<!-- eslint-disable prettier/prettier -->
<!--
 * @Author: 粟雄
 * @Date: 2022-09-08 14:28:57
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-09 15:11:05
 * @Description: 
-->
<script setup lang="ts">
import { zhCN, dateZhCN, NConfigProvider } from 'naive-ui'
</script>

<template>
  <n-config-provider :locale="zhCN" :theme="theme">
    <!-- 容器 -->
    <router-view></router-view>
  </n-config-provider>
</template>

<style lang="scss" scoped>
div {
  color: $test-color;
}
</style>
