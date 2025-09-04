# AurIs — A Complete Hotel Booking Platform 🏨

<div style="text-align: center;">
  <img 
    src="https://i.ibb.co/67j2qqWQ/Screenshot-2025-09-04-171803.png" 
    alt="Screenshot" 
    style="width: 100%; max-width: 600px;" 
  />
</div>

AurIs is a full-featured hotel booking web application where users can browse rooms, check availability, book, update or cancel reservations, and leave reviews. It includes a live map, featured rooms, special offers popup, review system, secure login, and booking restrictions to ensure fairness.

🔗 Live Project: https://hotel-client-side.web.app/
---

## 🛠 Technologies Used
- **Frontend:** React, React Router, Tailwind CSS, DaisyUI, Framer Motion, React Helmet, React Leaflet  
- **Backend:** Node.js, Express.js, MongoDB (Atlas)  
- **Authentication:** Firebase Auth  with Google login  
- **Other Tools:** Axios, moment.js, SweetAlert 

---

## 🚀 Core Features
- **Homepage** — Banner slider, hotel map, featured rooms, reviews carousel, two extra marketing sections, special offers popup.  
- **Rooms Page** — All rooms from database, server-side price filtering, card or table layout, clickable for full details.  
- **Room Details** — Complete room info, available reviews, booking modal with date picker, booking summary, confirm booking button.  
- **My Bookings** — View all bookings, cancel (up to 1 day before), update booking date, leave reviews.  
- **Review System** — Booked users can post ratings (1–5), comments, and timestamps; reviews sorted by newest first.  
- **Access Control** — Private routes protected by JWT; non-logged-in users redirected to login when booking/reviewing.  
- **404 Page** — Custom design with a back-to-home button.

---

## 📦 Dependencies
**Frontend:**  
`react`, `react-router-dom`, `axios`, `@tanstack/react-query`,  `react-hot-toast`, `framer-motion`, `react-helmet`, `react-leaflet`, `moment`, `tailwindcss`, `daisyui`  

**Backend:**  
`express`, `mongoose`, `cors`, `dotenv`, `jsonwebtoken`, `moment`, `nodemon`

---

## ⚙️ How to Run Locally
1. **Clone Repositories**
```bash
git clone https://github.com/fahamidaNimra173/Hotel-Client-side
git clonehttps://github.com/fahamidaNimra173/Hotel-Server-side

