# Tourino - Tour booking platform

**Tourino** is a moderen web application for discovering , browsing and booking domestic and international tours. 
It offers the best travel experiences with seamless online booking , an intuitive user dashboard and responsive design.

## ✈️ Key Features
- 🔎 **Tour Search & Filtering**
    Search tours by origin , destination and date.

- 🛒 **Seamless Booking** 
    One-click reservation with basket management.

- 👤 **User Authentication & Profile**
    Phone‑based OTP login (JWT access & refresh tokens). Complete profile with personal, contact, and banking info.

- 📊 **User Dashboard**  
    Overview of purchased tours , total spending and transaction history.

- 📱 **Fully Responsive** 
    Mobile‑first design using Tailwind CSS. Optimised for all screen sizes from smartphones to desktops.

- ⚡ **Modern Data Fetching**  
    React Query (TanStack Query) for efficient server state management, caching, and automatic background updates.

- 🎨 **Professional UI**  
    Built with Shadcn/ui components, Phosphor icons, and subtle animations for a premium user experience.

---

## tech stack
-  [Next.js](https://nextjs.org) App Router ( v14 )
-  [TailwindCSS](https://tailwindcss.com/) v4.1
-  [Shadcn/ui](https://ui.shadcn.com/)
-  [TanStack Query](https://tanstack.com/query)
-  Formik & Yup
-  [Axios](https://axios-http.com/)
-  [react‑multi‑date‑picker](https://shahabyazdi.github.io/react-multi-date-picker/)
-  [react‑hot‑toast](https://react-hot-toast.com/)
-  [Phosphor Icons](https://phosphoricons.com/)

---

## 🔐 Authentication Flow
1. Phone Number Submission – User enters mobile number.
2. OTP Request – A `POST /auth/send-otp` is sent.
3. OTP Verification – The 6‑digit code is verified via `POST /auth/check-otp`.
4. Token Storage – On success, access and refresh tokens are stored in cookies.
5. Profile Retrieval – React Query fetches the full user profile (`/user/profile`) and caches it.
6. Route Protection – Middleware checks for the `accessToken` cookie; unauthenticated users are redirected to `/`.
7. Token Refresh – Axios interceptors automatically refresh the token when a 401 response is detected.

---

## 🔐 Security & API Client
Tourino implements a layered security model to protect user data and ensure safe communication with the backend. The key components are :

1. Middleware route protection
   - Runs on every request and checks the presence of the `accessToken` cookie. if     missing, the user is immediately redirected to the homepage (`/`), preventing       any server-side rendering of protected pages
2. JWT token strategy
3. Axios client with automatic token Refresh
    - The project uses a custom axios instance that acts as a central HTTP client.

---

## 🧹 Code Quality & Reusability
Tourino is built with maintainability and scalability at its core. Every piece of logic is carefully placed following modern best practices:
- Custom Hooks
- Separation of concerns
- Centralized Validation
- Robust HTTP layer

---

## 📦 Installation
```bash
- Node.js ≥ 18
- npm or yarn
- A running instance of the Tourino backend

# Clone this repo
git clone https://github.com/sadranafe/tourino.git
cd tourino-app
npm install

# Environment Variables
create a .env.local file in the project root :
NEXT_PUBLIC_BASE_URL=http://localhost:6500

npm run dev
```

## Architecture Overview


built with ❤️ by sadra nafe