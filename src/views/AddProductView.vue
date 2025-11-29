<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <div class="bg-white shadow-sm px-8 py-6 border-b">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Add New Product</h1>
      <p class="text-gray-600">Enter the details below to add a new item to your inventory.</p>
    </div>

    <!-- Content -->
    <div class="px-8 py-8">
      <div class="max-w-4xl">
        <form @submit.prevent="handleSubmit" class="bg-white rounded-lg shadow-md p-8 space-y-8">
          <!-- Product Information Section -->
          <div>
            <h2 class="text-lg font-bold text-gray-900 mb-6 pb-4 border-b">Product Information</h2>
            
            <!-- Product Title -->
            <div class="mb-6">
              <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Product Title</label>
              <input
                v-model="form.title"
                id="title"
                type="text"
                placeholder="Enter product title"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <!-- Product Description -->
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
              <textarea
                v-model="form.description"
                id="description"
                rows="5"
                placeholder="Provide a detailed description of the product"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
            </div>
          </div>

          <!-- Pricing & Inventory Section -->
          <div>
            <h2 class="text-lg font-bold text-gray-900 mb-6 pb-4 border-b">Pricing & Inventory</h2>
            
            <!-- Price and Stock Grid -->
            <div class="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label for="price" class="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <div class="relative">
                  <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">$</span>
                  <input
                    v-model.number="form.price"
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    class="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label for="stock" class="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
                <input
                  v-model.number="form.stock"
                  id="stock"
                  type="number"
                  min="0"
                  placeholder="Enter stock quantity"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <!-- Category -->
            <div>
              <label for="category" class="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                v-model="form.category"
                id="category"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Apparel</option>
                <option value="Groceries">Groceries</option>
                <option value="Home">Home</option>
                <option value="Beauty">Beauty</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
          </div>

          <!-- Media Section -->
          <div>
            <h2 class="text-lg font-bold text-gray-900 mb-6 pb-4 border-b">Media</h2>
            
            <!-- File Upload Area -->
            <div
              @click="triggerFileUpload"
              @dragover.prevent="isDragging = true"
              @dragleave.prevent="isDragging = false"
              @drop.prevent="handleFileDrop"
              :class="['relative border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors', isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400']"
            >
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleFileSelect"
              />
              
              <div v-if="!imagePreview" class="flex flex-col items-center">
                <svg class="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                <p class="text-gray-700 font-medium mb-1">Click to upload or drag and drop</p>
                <p class="text-sm text-gray-500">SVG, PNG, JPG or GIF (MAX. 8255x4000px)</p>
              </div>

              <div v-else class="flex flex-col items-center">
                <img :src="imagePreview" alt="Preview" class="max-h-48 mb-4 rounded" />
                <button
                  type="button"
                  @click.stop="clearImage"
                  class="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Change Image
                </button>
              </div>
            </div>
          </div>

          <!-- Error Message -->
          <transition name="fade">
            <div v-if="error" class="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-red-700 font-medium">{{ error }}</p>
            </div>
          </transition>

          <!-- Action Buttons -->
          <div class="flex gap-4 justify-end pt-6 border-t">
            <router-link
              to="/products"
              class="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </router-link>
            <button
              type="submit"
              :disabled="isLoading"
              class="px-6 py-2 bg-blue-900 hover:bg-blue-950 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <span v-if="isLoading" class="flex items-center">
                <svg class="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </span>
              <span v-else>Save Product</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '../stores/products'

const router = useRouter()
const productStore = useProductStore()
const form = reactive({
  title: '',
  description: '',
  category: '',
  price: 0,
  stock: 0,
  thumbnail: ''
})
const isLoading = ref(false)
const error = ref('')
const imagePreview = ref('')
const isDragging = ref(false)
const fileInput = ref(null)

const triggerFileUpload = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event) => {
  const file = event.target.files?.[0]
  if (file) {
    processFile(file)
  }
}

const handleFileDrop = (event) => {
  isDragging.value = false
  const files = event.dataTransfer.files
  if (files.length > 0) {
    processFile(files[0])
  }
}

const processFile = (file) => {
  if (!file.type.startsWith('image/')) {
    error.value = 'Please select an image file'
    return
  }
  
  const reader = new FileReader()
  reader.onload = (e) => {
    imagePreview.value = e.target?.result
    form.thumbnail = e.target?.result
  }
  reader.readAsDataURL(file)
}

const clearImage = () => {
  imagePreview.value = ''
  form.thumbnail = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const handleSubmit = async () => {
  error.value = ''
  if (!form.title.trim()) {
    error.value = 'Title is required'
    return
  }
  if (!form.category) {
    error.value = 'Category is required'
    return
  }
  if (form.price <= 0) {
    error.value = 'Price must be greater than 0'
    return
  }

  isLoading.value = true
  try {
    const payload = {
      title: form.title.trim(),
      description: form.description.trim() || undefined,
      category: form.category,
      price: form.price,
      stock: form.stock || 0,
      thumbnail: form.thumbnail || undefined
    }
    await productStore.addProduct(payload)
    router.push('/products')
  } catch (e) {
    error.value = e.message || 'Failed to add product'
  } finally {
    isLoading.value = false
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
