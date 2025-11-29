import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAuthStore } from './auth'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const isLoading = ref(false)
  const error = ref(null)
  const authStore = useAuthStore()

  const fetchProducts = async () => {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()
      if (response.ok) {
        products.value = data.products
      } else {
        error.value = 'Failed to fetch products'
      }
    } catch (e) {
      error.value = 'Network error'
    } finally {
      isLoading.value = false
    }
  }

  const fetchProductById = async (id) => {
    const product = products.value.find(p => p.id == id)
    if (product) return product
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await response.json()
      return data
    } catch (e) {
      return null
    }
  }

  const addProduct = async (payload) => {
    if (!authStore.token) throw new Error('Not authenticated')
    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authStore.token}`
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      if (response.ok) {
        products.value.push(data)
        return data
      } else {
        throw new Error(data.message || 'Failed to add product')
      }
    } catch (e) {
      throw new Error(e.message || 'Network error')
    }
  }

  const updateProduct = async (id, payload) => {
    if (!authStore.token) throw new Error('Not authenticated')
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authStore.token}`
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      if (response.ok) {
        const index = products.value.findIndex(p => p.id == id)
        if (index !== -1) {
          products.value[index] = data
        }
        return data
      } else {
        throw new Error(data.message || 'Failed to update product')
      }
    } catch (e) {
      throw new Error(e.message || 'Network error')
    }
  }

  const deleteProduct = async (id) => {
    if (!authStore.token) throw new Error('Not authenticated')
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${authStore.token}`
        }
      })
      if (response.ok) {
        products.value = products.value.filter(p => p.id != id)
        return true
      } else {
        throw new Error('Failed to delete product')
      }
    } catch (e) {
      throw new Error(e.message || 'Network error')
    }
  }

  return { products, isLoading, error, fetchProducts, fetchProductById, addProduct, updateProduct, deleteProduct }
})
