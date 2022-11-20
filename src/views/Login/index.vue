<template>
  <div>
    <el-button type="primary" size="large" @click="fetchLogin">login</el-button>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/api/user'

const fetchLogin = async () => {
  const data = {}
  const res = await login(data)
  console.log(res)
}

</script>

<style lang="scss" scoped>

</style>
