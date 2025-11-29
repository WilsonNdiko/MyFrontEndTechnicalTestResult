# Product Management App

A Vue.js 3 application for managing products with authentication, built with DummyJSON API integration. Features modern UI design with Tailwind CSS and comprehensive state management.

## 🎯 Features

- **User Authentication**: Token-based session with localStorage persistence
- **Product Management**: List, view, add, and delete products
- **Advanced Search & Filters**: Search by product name, filter by category and stock status
- **Product Details**: Comprehensive product view with customer reviews and ratings
- **Add New Products**: Form-based product creation with image upload support
- **Route Protection**: Authenticated routes prevent unauthorized access
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Session Persistence**: Automatic session restoration on page reload

## 📋 Tech Stack

- **Vue 3** (Composition API with `<script setup>` syntax)
- **Vue Router 4** (with route guards for protected routes)
- **Pinia 3** (centralized state management)
- **Tailwind CSS 4** (utility-first styling)
- **Vite 7.2.4** (build tool and dev server)
- **DummyJSON API** (backend API for authentication and products)

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19.0 or >=22.12.0)
- npm (v10 or higher)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/WilsonNdiko/MyFrontEndTechnicalTestResult.git
   cd infinity-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔐 Authentication

The application uses DummyJSON API for authentication. Test credentials:

| Username | Password | Use Case |
|----------|----------|----------|
| `emilys` | `emilyspass` | Default test user |
| Any username | Any password | DummyJSON accepts any credentials |

**Note**: DummyJSON returns fixed user data for authentication. Token is stored in localStorage and persists across page refreshes.

## 🛠️ Configuration

### Environment Variables

No environment variables required. The app uses the public DummyJSON API by default.

**API Endpoints:**
- Authentication: `https://dummyjson.com/auth/login`
- Products (List): `https://dummyjson.com/products`
- Products (Get by ID): `https://dummyjson.com/products/:id`
- Products (Add): `https://dummyjson.com/products/add`
- Products (Delete): `https://dummyjson.com/products/:id`

### Vite Configuration

The app is configured for GitHub Pages deployment with base path `/MyFrontEndTechnicalTestResult/`. This is set in `vite.config.js`:
```javascript
export default defineConfig({
  base: '/MyFrontEndTechnicalTestResult/',
  ...
})
```

## 📁 Project Structure

```
infinity-app/
├── src/
│   ├── components/          # Reusable Vue components
│   │   ├── HelloWorld.vue
│   │   ├── TheWelcome.vue
│   │   ├── WelcomeItem.vue
│   │   └── icons/          # Icon components
│   ├── views/              # Page-level components (routes)
│   │   ├── LoginView.vue        # Login page with authentication
│   │   ├── ProductsView.vue     # Products list with table, search, filters
│   │   ├── ViewProductView.vue  # Product details with reviews
│   │   └── AddProductView.vue   # Form to create new products
│   ├── stores/             # Pinia state management
│   │   ├── auth.js         # Authentication store (token, user, login/logout)
│   │   ├── counter.js      # Counter store (example)
│   │   └── products.js     # Products store (CRUD operations)
│   ├── router/
│   │   └── index.js        # Vue Router configuration with route guards
│   ├── assets/             # Static assets
│   │   ├── base.css
│   │   └── main.css
│   ├── App.vue             # Root component
│   └── main.js             # Application entry point
├── public/                 # Static files
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## 🎨 Design & Styling

- **Primary Color**: `#000080` (Dark Blue) - used throughout buttons, headers, and links
- **Framework**: Tailwind CSS 4 with utility-first approach
- **Responsive**: Mobile-first design with responsive grid/flex layouts
- **Animations**: Smooth transitions and hover effects

## 📱 Routes

| Route | Component | Auth Required | Description |
|-------|-----------|---|---|
| `/login` | LoginView.vue | ❌ No | Login page |
| `/products` | ProductsView.vue | ✅ Yes | Products list with table and filters |
| `/products/:id` | ViewProductView.vue | ✅ Yes | View product details and reviews |
| `/products/new` | AddProductView.vue | ✅ Yes | Add new product form |
| `/` | - | - | Redirects to `/products` |

**Route Protection**: Unauthenticated users are redirected to `/login`. Authenticated users trying to access `/login` are redirected to `/products`.

## 🔄 State Management (Pinia)

### Auth Store (`src/stores/auth.js`)
- **State**: `token`, `user`
- **Getters**: `isAuthenticated`
- **Actions**: `login()`, `logout()`, `restoreSession()`
- **Persistence**: Token saved to localStorage

### Products Store (`src/stores/products.js`)
- **State**: `products`, `isLoading`, `error`
- **Actions**: `fetchProducts()`, `fetchProductById()`, `addProduct()`, `updateProduct()`, `deleteProduct()`
- **API Integration**: All protected endpoints include Authorization header with Bearer token

## 🚢 Deployment

### GitHub Pages

The app is configured for GitHub Pages deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **GitHub Pages Settings**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)` if pushing `dist` folder, or `/docs` if copying `dist` to `docs`

3. **Configure GitHub Actions (Optional)**
   - Create `.github/workflows/deploy.yml` for automated deployment
   - On every push to main, build and deploy to GitHub Pages

4. **Access the deployed app**
   ```
   https://wilsonndiko.github.io/MyFrontEndTechnicalTestResult/#/login
   ```

## 🔍 Key Assumptions

1. **Public API**: Uses DummyJSON's public API - no backend setup required
2. **Token Persistence**: Authentication token stored in localStorage
3. **CORS**: DummyJSON API has CORS enabled for public access
4. **No Database**: All data comes from DummyJSON (reads from API, no persistent backend storage)
5. **Mock Reviews**: Customer reviews section displays mock data with rating distribution
6. **Image Upload**: File uploads are converted to base64 data URLs (for demo purposes)

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (output in `dist/` folder)
- `npm run preview` - Preview production build locally

### Development Workflow

1. Make changes to Vue components
2. Hot Module Replacement (HMR) automatically updates the browser
3. Check console for errors and API responses
4. Test authentication flow and all routes
5. Build and test production version before deployment

## 📝 Assumptions & Notes

- The app uses DummyJSON's public API which has no authentication required for product endpoints (token is included but not strictly required)
- Product deletions are mocked by DummyJSON API (doesn't actually remove from their database)
- File uploads in the Add Product form are converted to base64 (not sent to server in this version)
- The application is a frontend-only implementation; all data persists only during the session
- Token expires only when manually logged out or localStorage is cleared

## 📄 License

This project is part of a technical test assessment.

## 👤 Author

Created by [Your Name/Wilson Ndiko]

## 🤝 Contributing

This is a test project. Feel free to fork and modify as needed.

---

**Last Updated**: November 29, 2025
