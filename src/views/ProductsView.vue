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
      <!-- Header -->
      <div class="bg-white px-8 py-6 border-b flex justify-between items-start">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Products</h1>
          <p class="text-gray-600">Manage your inventory and view product performance.</p>
        </div>
        <router-link
          to="/products/new"
          class="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
          </svg>
          Add New Product
        </router-link>
      </div>

      <!-- Search and Filters -->
      <div class="bg-white px-8 py-4 border-b">
        <div class="flex gap-4 items-center">
          <div class="flex-1 relative">
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by product name..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="relative">
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8">
              <option>Category</option>
            </select>
            <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="relative">
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8">
              <option>Stock Status</option>
            </select>
            <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Table Content -->
      <div class="flex-1 overflow-auto">
        <div v-if="isLoading" class="flex items-center justify-center h-full">
          <div class="text-center">
            <svg class="animate-spin h-12 w-12 text-blue-900 mx-auto" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>

        <div v-else-if="error" class="p-8 text-center text-red-600">
          {{ error }}
        </div>

        <div v-else-if="filteredProducts.length" class="bg-white">
          <table class="w-full">
            <thead>
              <tr class="border-b bg-gray-50">
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Product</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Stock</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="product in filteredProducts"
                :key="product.id"
                @click="viewProduct(product.id)"
                class="border-b hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <!-- Product Column -->
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img :src="product.thumbnail" :alt="product.title" class="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div class="font-medium text-gray-900">{{ product.title }}</div>
                      <div class="text-sm text-gray-600 line-clamp-1">{{ truncatedDescription(product.description) }}</div>
                    </div>
                  </div>
                </td>

                <!-- Category Column -->
                <td class="px-6 py-4">
                  <span class="inline-block px-3 py-1 text-sm font-medium rounded-full" :class="getCategoryBadgeClass(product.category)">
                    {{ product.category }}
                  </span>
                </td>

                <!-- Price Column -->
                <td class="px-6 py-4 text-gray-900 font-medium">${{ product.price }}</td>

                <!-- Stock Column -->
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <span :class="['w-3 h-3 rounded-full', getStockIndicator(product.stock)]"></span>
                    <span :class="['text-sm font-medium', getStockColor(product.stock)]">
                      {{ getStockLabel(product.stock) }}
                    </span>
                  </div>
                </td>

                <!-- Actions -->
                <td class="px-6 py-4 text-center">
                  <button class="text-gray-500 hover:text-gray-700">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Pagination -->
          <div class="px-6 py-4 border-t flex items-center justify-between bg-white">
            <p class="text-sm text-gray-600">Showing 1 to 4 of 25 results</p>
            <div class="flex gap-2">
              <button class="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </button>
              <button class="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div v-else class="flex items-center justify-center h-full">
          <div class="text-center">
            <p class="text-gray-600">No products found</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '../stores/products'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const productStore = useProductStore()
const authStore = useAuthStore()
const searchQuery = ref('')

const isLoading = computed(() => productStore.isLoading)
const error = computed(() => productStore.error)
const products = computed(() => productStore.products)

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value
  return products.value.filter(product =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const viewProduct = (id) => {
  router.push(`/products/${id}`)
}

const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}

const truncatedDescription = (desc) => {
  return desc.length > 60 ? desc.slice(0, 60) + '...' : desc
}

const getCategoryBadgeClass = (category) => {
  const categoryClasses = {
    'Electronics': 'bg-blue-100 text-blue-700',
    'Groceries': 'bg-purple-100 text-purple-700',
    'Apparel': 'bg-pink-100 text-pink-700',
    'default': 'bg-gray-100 text-gray-700'
  }
  return categoryClasses[category] || categoryClasses.default
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

onMounted(() => {
  if (products.value.length === 0) {
    productStore.fetchProducts()
  }
})
</script>
