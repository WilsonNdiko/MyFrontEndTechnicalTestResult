import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || null)
  const user = ref(null)
  const isAuthenticated = computed(() => !!token.value)

  async function login(credentials) {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password
        })
      })
      const data = await response.json()
      
      if (response.ok && data.accessToken) {
        token.value = data.accessToken
        user.value = data
        localStorage.setItem('token', data.accessToken)
        return { success: true }
      } else if (response.ok && data.token) {
        token.value = data.token
        user.value = data
        localStorage.setItem('token', data.token)
        return { success: true }
      } else {
        console.error('Login error:', data)
        return { success: false, message: data.message || 'Invalid username or password' }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: 'Network error. Please check your internet connection.' }
    }
  }

  function logout() {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
  }

  function restoreSession() {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      token.value = savedToken
    }
  }

  return { token, user, isAuthenticated, login, logout, restoreSession }
})
