**TourMates** 

The **TourMates** is an online platform designed to help travelers explore Bangladesh with ease. It features comprehensive packages, verified tour guides, booking and payment options, user-generated stories, and a full role-based dashboard for Admins, Tourists, and Guides.


## Features

## ✨ Key Features

1. **Responsive Design** for mobile, tablet, and desktop views.
2. **JWT Authentication** with email/password and Google Sign-In.
3. **Role-Based Dashboard** for Tourists, Tour Guides, and Admins.
4. **Randomized Sections** using MongoDB `$sample` for packages, guides, and stories.
5. **Secure Booking** system with Stripe payment integration and status tracking.
6. **Tour Guide Application System** with CV and reason input.
7. **Dynamic Admin Panel** to manage users, guides, packages, and applications.
8. **Tour Plan, Image Gallery, and About Tour** sections on each Package Details page.
9. **User and Guide Stories** management with add, edit, delete, and multi-image support.
10. **Community Page & About Us** for user stories and developer info.

---

## 🔒 Authentication & Authorization

- Register with **name, email, photo, and password**.
- Login via **email/password** or **Google**.
- Password strength and validation checks included.
- JWT Token is stored in **localStorage** for secure access to protected routes.
- Forgot Password functionality available.
- Role is assigned as **Tourist by default**.
- Protected Dashboard routes for all roles using private route and role-based logic.

---

## 🧩 Main Functionalities by Role

### 🧳 Tourist

- Manage Profile
- Book Tours (with secure form and datepicker)
- Make Payments via Stripe
- Add & Manage Stories
- Join as Tour Guide

### 🧭 Tour Guide

- Manage Profile
- View Assigned Tours (accept/reject)
- Add & Manage Stories

### 🛡️ Admin

- Manage Profile
- Add Packages
- Manage Users (filter by role, search by name/email)
- Manage Candidates (Accept/Reject Tour Guide Applications)
- Dashboard Stats: Total Payments, Guides, Packages, Clients, Stories

---

## 📌 Home Page Sections

- **Banner Slider** using Swiper.js
- **Overview** (text + video)
- **Tourism & Travel Guide** Tabs:
  - Our Packages – 3 random packages each time (MongoDB `$sample`)
  - Meet Our Tour Guides – 6 random guides
- **Tourist Story Section** – 4 random stories with React Share
- **Extra Sections** – Based on your own creative idea

---

## 📄 Page Details

### 🔖 All Trips
- Displays all packages with details.

### 🧑‍🤝‍🧑 Community
- Displays all stories shared by users.

### 📖 About Us
- Developer bio, links to projects, GitHub, and portfolio.

### 🗺️ Tour Guide Profile
- Shows Tour Guide info + stories added by them.

## Documentation

[Client Side Github Repository Link](https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-AmenaGithub678)

[Server Side Github Repository Link](https://github.com/Programming-Hero-Web-Course4/b11a12-server-side-AmenaGithub678)



