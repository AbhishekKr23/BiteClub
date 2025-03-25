# 🍔 **Food Delivery Website**

> 🍽️ Your go-to platform for exploring delicious meals and getting them delivered to your doorstep!



## 🚀 **Overview**
Welcome to the **Food Delivery Website**! Built using the powerful **MERN Stack** with secure payment processing via **Stripe**, this platform ensures a delightful user experience. Browse a variety of cuisines, add to your cart, and enjoy quick doorstep delivery.

---

## 🛠️ **Tech Stack**
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payment Integration:** Stripe
- **Version Control:** Git & GitHub

---

## ✨ **Features**
- ✅ User Registration & Login
- 🍕 Browse Food Categories
- 🛒 Add to Cart & Place Orders
- 💳 Secure Payment via Stripe
- 📜 Order History Management
- 🌐 Responsive Design

🖼️ Screenshots 🏠 Homepage 🛒 Cart Page 💳 Payment Page
🏠 Homepage - ![ss](https://github.com/user-attachments/assets/f1026a1b-8d55-493b-abe8-6ac9ddca4760)

🛒 Cart Page - ![ss1](https://github.com/user-attachments/assets/03e6feb9-9756-403b-8dc2-4f27d1ff7984)


---

## 🧑‍💻 **Installation**

### Clone the Repository
```bash
git clone https://github.com/yourusername/food-delivery-website.git
cd food-delivery-website
```

### Install Dependencies
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### Configure Environment Variables
Create a `.env` file with the following:
```env
MONGO_URI=your_mongodb_uri
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Run the Application
```bash
# Start Backend Server
cd server
npm start

# Start Frontend Server
cd client
npm start
```

🌐 Open `http://localhost:3000` to explore the app.

---

## 📡 **API Endpoints**
| Method | Endpoint               | Description               |
|---------|------------------------|---------------------------|
| POST    | `/api/auth/register`   | Register a new user       |
| POST    | `/api/auth/login`      | Login to your account     |
| GET     | `/api/food`            | Get available food items  |
| POST    | `/api/order`           | Place an order            |
| GET     | `/api/order/:userId`   | View your order history   |

---

## 🌍 **Demo**
- 🧑‍💻 [GitHub Repository](https://github.com/yourusername/food-delivery-website)
- 🌐 [Live Site](https://biteclub.onrender.com/)

---


---

**🍽️ Built with love by Abhishek Kumar**

