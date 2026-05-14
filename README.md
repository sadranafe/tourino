# Tourino - Tour booking platform

**Tourino** is a moderen web application for discovering , browsing and booking domestic and international tours. 
It offers the best travel experiences with seamless online booking , an intuitive user dashboard and responsive design.


<br/>

## ✈️ Key Features
- 🔎 **Tour Search & Filtering** \
    Search tours by origin , destination and date.

- 🛒 **Seamless Booking** \
    One-click reservation with basket management.

- 👤 **User Authentication & Profile** \
    Phone‑based OTP login (JWT access & refresh tokens). Complete profile with personal, contact, and banking info.

- 📊 **User Dashboard** \
    Overview of purchased tours , total spending and transaction history.

- 📱 **Fully Responsive** \
    Mobile‑first design using Tailwind CSS. Optimised for all screen sizes from smartphones to desktops.

- ⚡ **Modern Data Fetching** \
    React Query (TanStack Query) for efficient server state management, caching, and automatic background updates.

- 🎨 **Professional UI** \
    Built with Shadcn/ui components, Phosphor icons, and subtle animations for a premium user experience.


<br/>


## 🧱 tech stack
-  [Next.js](https://nextjs.org) App Router ( v14 )
-  [TailwindCSS](https://tailwindcss.com/) v4.1
-  [Shadcn/ui](https://ui.shadcn.com/)
-  [TanStack Query](https://tanstack.com/query)
-  Formik & Yup
-  [Axios](https://axios-http.com/)
-  [react‑multi‑date‑picker](https://shahabyazdi.github.io/react-multi-date-picker/)
-  [react‑hot‑toast](https://react-hot-toast.com/)
-  [Phosphor Icons](https://phosphoricons.com/)


<br/>


## 🔐 Authentication Flow
1. Phone Number Submission – User enters mobile number.
2. OTP Request – A `POST /auth/send-otp` is sent.
3. OTP Verification – The 6‑digit code is verified via `POST /auth/check-otp`.
4. Token Storage – On success, access and refresh tokens are stored in cookies.
5. Profile Retrieval – React Query fetches the full user profile (`/user/profile`) and caches it.
6. Route Protection – Middleware checks for the `accessToken` cookie; unauthenticated users are redirected to `/`.
7. Token Refresh – Axios interceptors automatically refresh the token when a 401 response is detected.

<br/>


## 🔐 Security & API Client
Tourino implements a layered security model to protect user data and ensure safe communication with the backend. The key components are :

1. Middleware route protection
   - Runs on every request and checks the presence of the `accessToken` cookie. if     missing, the user is immediately redirected to the homepage (`/`), preventing       any server-side rendering of protected pages
2. JWT token strategy
3. Axios client with automatic token Refresh
    - The project uses a custom axios instance that acts as a central HTTP client.


<br/>



## 🧹 Code Quality & Reusability
Tourino is built with maintainability and scalability at its core. Every piece of logic is carefully placed following modern best practices:
- Custom Hooks
- Separation of concerns
- Centralized Validation
- Robust HTTP layer

<br/>



## 🧠 Architecture Overview
```
tourino-app/
├── public/
├── src/
│ ├── app/ 
│ │ ├── (protected)/
│ | │ ├── profile/
│ | │ | ├─── account/
│ | │ | | ├──── AccountCard.js
│ | │ | | ├──── layout.js
│ | │ | | ├──── page.js
│ | │ | ├─── basket/
│ | │ | | ├──── basket.js
│ | │ | | ├──── layout.js
│ | │ | | ├──── page.js
│ | │ | ├─── dashboard/
│ | │ | | ├──── layout.js
│ | │ | | ├──── page.js
│ | │ | ├─── my-tour/
│ | │ | | ├──── MyTours.js
│ | │ | | ├──── layout.js
│ | │ | | ├──── page.js
│ | │ | ├─── transactions/
│ | │ | | ├──── transactions.js
│ | │ | | ├──── layout.js
│ | │ | | ├──── page.js
│ | │ | ├─── layout.js
│ | │ | ├─── page.js
│ | │ ├── layout.js
│ │ ├── fonts/
│ │ ├── tour/
│ | │ ├── [tourId]/
│ | │ | ├─── HighlightedTour.js
│ | │ | ├─── loading.js
│ | │ | ├─── page.js
│ | │ | ├─── ReserveLink.js
│ │ ├── error.js
│ │ ├── layout.js
│ │ ├── not-found.js
│ │ ├── page.js
│ │ ├── favicon.ico
│ │ ├── globals.css
│ │ 
│ ├── components/
│ │ ├── icons/
│ │ ├── layout/
│ │ ├── ui/
│ │ ├── ...
│ ├── helper/
│ │ ├── helper.js
│ ├── hooks/
│ │ ├── useHasToken.js
│ │ ├── useRedirecting.js
│ │ ├── useTimer.js
│ │ ├── useUser.js
│ ├── lib/
│ │ ├── api.js
│ │ ├── utils.js (for shadcn-ui)
│ ├── provider/
│ │ ├── TanstackQueryProvider.js
│ ├── services/
│ │ ├── mutations.js
│ │ ├── queries.js
│ ├── utils/
│ │ ├── cookie.js
│ │ ├── UserAccountSchema.js
│ │ ├── UserSchema.js
│ └── middleware.js
├── tailwind.config.js
├── .env
├── components.json
├── jsconfig.json
├── next.config.js
└── package.json
└── package-lock.json
└── postcss.config.mjs
└── tailwind.config.js
```



<br/>


## 📦 Installation
first you have to download the [Tourino-API](https://github.com/milad-azami/travel-agency-api-torino)  

1. Clone this repo
```
git clone https://github.com/sadranafe/tourino.git
```
```
cd tourino-app
npm install
```
2. Environment Variables
create a .env.local file in the project root :
`NEXT_PUBLIC_BASE_URL=http://localhost:6500`

3. setup API
```
git clone https://github.com/milad-azami/travel-agency-api-torino.git
```
```
npm start
```

4. after starting the API, now you can start the project : 
```
npm run dev
```

<br/>


## Contributing
I welcome contributions to make Tourino even more awesome! Whether it's bug fixes, feature additions, or improvements to the documentation, your help is highly appreciated.
> [!Tip]
> Email : [sadranafe7@gmail.com]




<br/>


## Acknowledgements
- special thanks to **Milad azami** for his invaluable mentorship and guidance throughout the development of this project.  
- Gratitude also goes to the **Boto Start Bootcamp** for providing the structured learning environment and support that made Tourino possible.

built with ❤️ by sadra nafe
