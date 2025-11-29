<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
    <!-- Platform Logo -->
    <div class="mb-12 text-center">
      <div class="flex items-center justify-center gap-2">
        <div class="w-8 h-8 bg-blue-900 rounded"></div>
        <span class="text-2xl font-bold text-blue-900">Platform Logo</span>
      </div>
    </div>

    <!-- Login Card -->
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <!-- Header -->
      <h1 class="text-3xl font-bold text-center text-gray-900 mb-2">Welcome Back</h1>
      <p class="text-center text-gray-600 mb-8">Sign in to manage your products.</p>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- Email or Username -->
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-2">Email or Username</label>
          <input
            v-model="credentials.username"
            id="username"
            type="text"
            placeholder="you@example.com"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div class="relative">
            <input
              v-model="credentials.password"
              :type="showPassword ? 'text' : 'password'"
              id="password"
              placeholder="Enter your password"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg v-if="showPassword" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
              </svg>
              <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path>
                <path d="M15.171 13.576l1.414 1.414a1 1 0 11-1.414 1.414l-1.414-1.414m2.827-2.827l1.415 1.414a1 1 0 11-1.414 1.415l-1.415-1.415m-2.454-2.454l1.414 1.414a1 1 0 11-1.414 1.415l-1.415-1.415"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Remember me & Forgot Password -->
        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input
              v-model="rememberMe"
              type="checkbox"
              class="rounded border-gray-300"
            />
            <span class="ml-2 text-sm text-gray-700">Remember me</span>
          </label>
          <a href="#" class="text-sm text-blue-600 hover:text-blue-700">Forgot Password?</a>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-blue-900 hover:bg-blue-950 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          {{ isLoading ? 'Logging in...' : 'Login' }}
        </button>
      </form>

      <!-- Error Message -->
      <transition name="fade">
        <div v-if="error" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p class="text-red-700 text-sm">{{ error }}</p>
        </div>
      </transition>
    </div>

    <!-- Footer -->
    <div class="mt-12 text-center text-gray-600 text-sm">
      <p>© 2024 Platform Inc. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const credentials = reactive({
  username: '',
  password: ''
})
const isLoading = ref(false)
const error = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)

const handleLogin = async () => {
  error.value = ''
  isLoading.value = true
  const result = await authStore.login(credentials)
  isLoading.value = false
  if (result.success) {
    router.push('/products')
  } else {
    error.value = result.message
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active {
  animation: fadeIn 0.3s ease-in-out;
}

.fade-leave-active {
  animation: fadeIn 0.3s ease-in-out reverse;
}
</style>
