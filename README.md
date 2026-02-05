# React Developer Card Grid 🚀

A responsive React application that displays developer profile cards in a clean grid layout.  
Built using **React**, **CSS Grid**, and **reusable components**.

---

## 📸 Preview

**Responsive grid layout**

### 🖥 Desktop — 3 Columns
<p align="center">
  <img src="https://github.com/user-attachments/assets/1519c87f-f369-457d-b8ee-be17e50eec9f" width="250" />
</p>

### 📱 Tablet — 2 Columns
<p align="center">
  <img src="https://github.com/user-attachments/assets/57136f80-fce7-46f5-a187-44c38ea6aad5" width="250" />
</p>

### 📱 Mobile — 1 Column
<p align="center">
  <img src="https://github.com/user-attachments/assets/d9068434-0eef-4a7b-97ca-a92e5a6f535c" width="250" />
</p>

---

## ✨ Features
- Reusable `Card` component
- Data-driven UI using `.map()`
- Props spreading (`{...dev}`)
- Fully responsive CSS Grid layout
- Clean and minimal UI
- Beginner-friendly React patterns

---

## 🛠 Tech Stack
- React (Vite)
- JavaScript (ES6+)
- CSS Grid
- HTML5

---

## 📂 Folder Structure

```text
react-developer-card-grid/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── Card.jsx        # Reusable developer card component
│   │
│   ├── Data.js             # Developer profile data (array of objects)
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles & grid layout
│   └── main.jsx            # React entry point
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
