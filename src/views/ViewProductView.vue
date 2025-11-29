<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-56 bg-white shadow-lg flex flex-col">
      <!-- Logo -->
      <div class="p-6 border-b">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold">E</div>
          <div>
            <div class="font-bold text-gray-900">E-Commerce</div>
            <div class="text-xs text-gray-600">Admin Panel</div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-2">
        <router-link to="/dashboard" class="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
          </svg>
          <span>Dashboard</span>
        </router-link>
        
        <div class="flex items-center gap-3 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 000-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7z"></path>
          </svg>
          <span>Products</span>
        </div>

        <router-link to="/orders" class="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 6H6.28l-.31-1.243A1 1 0 005 4H3z"></path>
          </svg>
          <span>Orders</span>
        </router-link>

        <router-link to="/customers" class="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 10a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Customers</span>
        </router-link>
      </nav>

      <!-- Bottom Menu -->
      <div class="p-4 border-t space-y-2">
        <button class="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
          </svg>
          <span>Settings</span>
        </button>

        <button @click="handleLogout" class="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Navigation Bar -->
      <div class="bg-white shadow-sm px-8 py-4 flex justify-between items-center border-b">
        <div class="flex items-center gap-2 text-gray-600">
          <span class="text-sm">Products</span>
          <span>/</span>
          <span class="text-sm font-medium text-gray-900">{{ product?.title || 'Product' }}</span>
        </div>
        <div class="flex items-center gap-4">
          <button class="text-gray-600 hover:text-gray-900">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H19.5V2.5H10.5z"></path>
            </svg>
          </button>
          <img src="https://via.placeholder.com/40" alt="Profile" class="w-10 h-10 rounded-full" />
        </div>
      </div>

      <!-- Content -->
      <div v-if="isLoading" class="flex items-center justify-center flex-1">
        <div class="text-center">
          <svg class="animate-spin h-12 w-12 text-blue-900 mx-auto" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p class="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>

      <div v-else-if="product" class="flex-1 overflow-auto">
        <div class="p-8">
          <div class="grid grid-cols-3 gap-8">
            <!-- Left: Product Image -->
            <div class="col-span-1">
              <div class="bg-white rounded-lg shadow-md p-6">
                <img :src="product.thumbnail" :alt="product.title" class="w-full h-96 object-cover rounded-lg" />
              </div>
            </div>

            <!-- Middle: Product Details -->
            <div class="col-span-2 space-y-6">
              <!-- Product Header -->
              <div class="bg-white rounded-lg shadow-md p-6">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ product.title }}</h1>
                <p class="text-gray-600 mb-6">{{ product.description }}</p>
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                  Edit Product
                </button>
              </div>

              <!-- Product Details Grid -->
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white rounded-lg shadow-md p-6">
                  <span class="text-gray-600 text-sm">Price</span>
                  <p class="text-3xl font-bold text-gray-900 mt-2">${{ product.price }}</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                  <span class="text-gray-600 text-sm">Category</span>
                  <p class="text-xl font-semibold text-blue-600 mt-2">{{ product.category }}</p>
                </div>
              </div>

              <!-- Stock Information -->
              <div class="bg-white rounded-lg shadow-md p-6">
                <span class="text-gray-600 text-sm">Stock</span>
                <div class="flex items-center gap-2 mt-2">
                  <span :class="['w-3 h-3 rounded-full', getStockIndicator(product.stock)]"></span>
                  <span :class="['text-lg font-semibold', getStockColor(product.stock)]">
                    {{ getStockLabel(product.stock) }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Description Section -->
          <div class="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p class="text-gray-700 leading-relaxed">{{ product.description }}</p>
          </div>

          <!-- Customer Reviews -->
          <div class="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
            
            <!-- Review Summary -->
            <div class="grid grid-cols-2 gap-8 mb-8 pb-8 border-b">
              <!-- Left: Rating -->
              <div class="flex items-start">
                <div class="text-center">
                  <div class="text-5xl font-bold text-gray-900 mb-2">{{ product.rating || 4.5 }}</div>
                  <div class="flex justify-center mb-2">
                    <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= Math.round(product.rating || 4.5) ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p class="text-gray-600 text-sm">Based on 120 reviews</p>
                </div>
              </div>

              <!-- Right: Rating Breakdown -->
              <div class="space-y-3">
                <div v-for="(rating, idx) in [5, 4, 3, 2, 1]" :key="idx" class="flex items-center gap-3">
                  <span class="text-gray-600 w-3">{{ rating }}</span>
                  <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-yellow-400" :style="{ width: getRatingPercentage(rating) + '%' }"></div>
                  </div>
                  <span class="text-gray-600 text-sm w-8 text-right">{{ getRatingPercentage(rating) }}%</span>
                </div>
              </div>
            </div>

            <!-- Individual Reviews (placeholder) -->
            <div class="space-y-4">
              <div class="text-gray-600 text-sm">Customer reviews will appear here</div>
            </div>
          </div>

          <!-- Delete Button -->
          <div class="mt-8 mb-8">
            <button
              @click="handleDelete"
              :disabled="deleteLoading"
              class="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              {{ deleteLoading ? 'Deleting...' : 'Delete Product' }}
            </button>
          </div>
        </div>
      </div>

      <div v-else class="flex items-center justify-center flex-1">
        <div class="text-center">
          <p class="text-gray-600 text-lg">Product not found</p>
        </div>
      </div>
    </div>

    <!-- Confirm Delete Modal -->
    <transition name="modal">
      <div v-if="showConfirm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Confirm Delete</h2>
          <p class="text-gray-600 mb-6">Are you sure you want to delete this product? This action cannot be undone.</p>
          <div class="flex gap-3">
            <button
              @click="showConfirm = false"
              class="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              @click="confirmDelete"
              :disabled="deleteLoading"
              class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '../stores/products'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()
const authStore = useAuthStore()
const isLoading = ref(true)
const product = ref(null)
const deleteLoading = ref(false)
const showConfirm = ref(false)

onMounted(async () => {
  const id = route.params.id
  product.value = await productStore.fetchProductById(id)
  isLoading.value = false
})

const handleDelete = () => {
  showConfirm.value = true
}

const confirmDelete = async () => {
  deleteLoading.value = true
  try {
    await productStore.deleteProduct(route.params.id)
    router.push('/products')
  } catch (error) {
    alert(error)
  } finally {
    deleteLoading.value = false
    showConfirm.value = false
  }
}

const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}

const getStockIndicator = (stock) => {
  if (stock > 50) return 'bg-green-500'
  if (stock > 0) return 'bg-orange-500'
  return 'bg-red-500'
}

const getStockColor = (stock) => {
  if (stock > 50) return 'text-green-600'
  if (stock > 0) return 'text-orange-600'
  return 'text-red-600'
}

const getStockLabel = (stock) => {
  if (stock > 50) return `${stock} In Stock`
  if (stock > 0) return `${stock} Low Stock`
  return 'Out of Stock'
}

const getRatingPercentage = (rating) => {
  // Mock rating distribution
  const distribution = {
    5: 75,
    4: 15,
    3: 5,
    2: 3,
    1: 2
  }
  return distribution[rating] || 0
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div {
  transform: scale(0.9);
}

.modal-leave-to > div {
  transform: scale(0.9);
}
</style>
