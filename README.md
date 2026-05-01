# Lumina | Smart Lighting Solution 💡
💡 High-performance landing page for smart lighting solutions. Built with HTML5, CSS3, and JavaScript, featuring real-time lead capture with Firebase Firestore.

[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 🚀 Key Technical Features

*   **Pixel-Perfect Design:** High-fidelity implementation of custom Figma prototypes, ensuring visual consistency and semantic HTML structure.
*   **Real-time Lead Capture:** Seamless integration with **Firebase Firestore** for instant order data persistence and lead management.
*   **Asynchronous Operations:** Implementation of `async/await` patterns for database transactions, ensuring a non-blocking and fluid user interface.
*   **Mobile-First Responsiveness:** Optimized layout for high performance and adaptability across mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack

| Layer | Technology | Application |
| :--- | :--- | :--- |
| **Frontend** | HTML5 / CSS3 / JS (ES6+) | Structure, styling, and client-side logic. |
| **BaaS (Backend)** | Google Firebase | Cloud Firestore for NoSQL database and Hosting for deployment. |
| **Design** | Figma | UI/UX prototyping and asset definition. |
| **Development** | Node.js / NPM / Git | Package management and version control. |

---

## 🏗️ Data Architecture

The project follows a **Serverless Architecture**, allowing the client-side application to communicate directly with the NoSQL database through granular security rules:
```mermaid
graph LR
    User[User Interface] -->|Form Input| JS[JavaScript Logic]
    JS -->|Async Request| FB[Firebase SDK]
    FB -->|Document Write| Firestore[(Cloud Firestore)]
