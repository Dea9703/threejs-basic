<template>
  <div class="login">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="rules"
      label-width="90px"
    >
      <h1 class="title">three-basic</h1>
      <el-form-item label="Mobile" prop="mobile">
        <el-input v-model="loginForm.mobile" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click="fetchLogin(loginFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance } from 'element-plus'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const loginFormRef = ref<FormInstance>()
const checkMobile = (_: any, value: string, callback:Function) => {
  const mobileRex = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
  if (!value) {
    return callback(new Error('请输入手机号'))
  } else if (!mobileRex.test(value)) {
    return callback(new Error('请输入格式正确手机号'))
  } else {
    return callback()
  }
}

const checkPassword = (_: any, value: string, callback:Function) => {
  const pwdRex = /^\+?[1-9]\d*$/
  if (!value) {
    return callback(new Error('请输入手密码'))
  } else if (!pwdRex.test(value)) {
    return callback(new Error('请输入数字验证码'))
  } else {
    return callback()
  }
}
const rules = reactive({
  mobile: [{ validator: checkMobile, trigger: ['blur', 'change'] }],
  password: [{ validator: checkPassword, trigger: ['blur', 'change'] }]
})

const loginForm = reactive({ mobile: '', password: '' })
const fetchLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      await userStore.fetchLogin(loginForm)
      router.replace('/')
    } else {
      return false
    }
  })
}

</script>

<style lang="scss" scoped>
.login {
    position: relative;
    min-height: 100vh;
    background-image: url(@/assets/images/login-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.el-form {
    width: 520px;
    box-sizing: border-box;
    padding: 30px 20px;
    border-radius: 10px;
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba($color: #31a293, $alpha: .3);
    .title {
        color: #606266;
        text-align: center;
        margin: 20px 0;
    }
}
</style>
