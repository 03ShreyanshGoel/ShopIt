# 🌟 ShopIt Documentation 🌟

## 📅 Overview

ShopIt is a full-stack e-commerce platform developed using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with additional tools like **Redux** for state management and **TailwindCSS** for styling. The platform supports secure user authentication, payment processing through **Stripe**, and **JWT** for secure login sessions. It also features an admin dashboard for product, order, and category management.

---

## 🔍 Features

### 👤 User Features

- **🔐 User Authentication:** Secure registration and login using JWT.
- **💳 Payment Integration:** Stripe integration for seamless payment processing.
- **🌐 Product Browsing:** View and search products by category.
- **🛒 Shopping Cart:** Add, remove, and update items in the cart.
- **🗕️ Order History:** View past orders and their statuses.
- **📱 Responsive Design:** Optimized for various devices using TailwindCSS and Framer Motion animations.

### 📈 Admin Features

- **🗕️ Admin Dashboard:** Manage products, orders, and categories.
- **🍭 Product Management:** Add, update, and delete products.
- **🗖️ Order Management:** Track and manage customer orders.
- **🗕️ Category Management:** Organize products by categories.
- **🖼️ Cloudinary Integration:** Upload and manage product images.

---

## 🔧 Tech Stack

- **Frontend:** React.js, Redux, TailwindCSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Payment Processing:** Stripe API
- **Image Management:** Cloudinary

---

## 📝 Installation & Setup

### 📅 Prerequisites

- 💻 Node.js
- 🔍 MongoDB (local or cloud-based)
- 💳 Stripe account for payment processing
- 🖼️ Cloudinary account for image management

### 📂 Clone the Repository

```bash
git clone <repository-url>
cd shopit
```

### 💻 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   STRIPE_SECRET_KEY=<Your Stripe Secret Key>
   CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
   CLOUDINARY_API_KEY=<Your Cloudinary API Key>
   CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
   ```
4. Start the server with nodemon for development:
   ```bash
   npm run server
   ```
   Or start the server in production mode:
   ```bash
   npm start
   ```

### 💻 Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
   REACT_APP_CLOUDINARY_UPLOAD_PRESET=<Your Cloudinary Upload Preset>
   ```
4. Start the frontend:
   ```bash
   npm start
   ```

### 🔄 Running Both Servers Concurrently

To run both the backend and frontend servers simultaneously:

```bash
npm run dev
```

---

## 📁 Folder Structure

```
shopit/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── index.js
│   └── package.json
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

---

## 🚀 Usage

1. **👤 Register/Login:**

   - New users can register using the registration form.
   - Existing users can log in securely with JWT-based authentication.

2. **🌐 Browse Products:**

   - Users can browse and search products, view details, and add items to the cart.

3. **🛒 Checkout:**

   - Proceed to checkout using Stripe for payment processing.

4. **📈 Admin Dashboard:**

   - Admins can log in to manage products, orders, and categories through the admin dashboard.

---

## 🚀 Deployment

The frontend is deployed on **Vercel** and the backend is deployed on **Render**.

### 🚀 Deploy Backend (Render)

1. Push code to your repository linked with Render.
2. Create a new Web Service in Render and link it to your repository.
3. Set environment variables in Render:
   ```env
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   STRIPE_SECRET_KEY=<Your Stripe Secret Key>
   CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
   CLOUDINARY_API_KEY=<Your Cloudinary API Key>
   CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
   ```
4. Deploy and get your backend URL.

### 🚀 Deploy Frontend (Vercel)

1. Push code to your repository.
2. Import your project in Vercel.
3. Set environment variables in Vercel:
   ```env
   REACT_APP_API_URL=<Your Render Backend URL>/api
   REACT_APP_CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
   REACT_APP_CLOUDINARY_UPLOAD_PRESET=<Your Cloudinary Upload Preset>
   ```
4. Deploy your frontend.

---

## 💪 Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

1. 🔠 Fork the repo.
2. 🔄 Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. 📅 Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. 🔄 Push to the branch (`git push origin feature/AmazingFeature`).
5. 📅 Open a pull request.

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 📢 Contact

For any inquiries or feedback, feel free to contact:

- **GitHub:** [GitHub Profile](https://github.com/03ShreyanshGoel)
- **🔗 Live Demo:** [ShopIt Live Demo](https://shopit-ecommerce.vercel.app)

