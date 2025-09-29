# 🚀 PostSphere - A Modern Full-Stack Blogging Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge" />
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Badge" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge" />
  <img src="https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite Badge" />
</p>

**PostSphere** is a feature-rich, full-stack blogging application built with a modern tech stack. It provides a seamless and intuitive experience for users to create, manage, and share rich-text blog posts. The project leverages **React** for a dynamic frontend, **Redux Toolkit** for robust state management, and **Appwrite** as a powerful Backend-as-a-Service (BaaS) for handling authentication, database, and file storage.

🔗 **Live Demo:** [**PostSphere-react.vercel.app**](https://post-sphere.vercel.app/)

---

## ✨ Key Features

-   🔐 **Full User Authentication:** Secure sign-up, login, and logout functionality.
-   ✍️ **Rich Text Editor:** Create and edit posts using a powerful WYSIWYG editor powered by **TinyMCE**.
-   �️ **File Uploads:** Seamlessly upload and manage images for blog posts via Appwrite Storage.
-   � **Real-time Database:** Instant data synchronization with Appwrite's real-time database capabilities.
-   📱 **Responsive Design:** A clean and mobile-first UI built with **Tailwind CSS**.
-   ⚙️ **Scalable State Management:** Centralized and predictable state control using **Redux Toolkit**.
-   🧩 **Component-Based Architecture:** A modular and reusable component structure for maintainability.

---

## 🛠️ Tech Stack

| Category             | Technology                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Frontend**         | `React.js`, `React Router`                                                                                                                 |
| **Styling**          | `Tailwind CSS`                                                                                                                             |
| **State Management** | `Redux Toolkit`                                                                                                                            |
| **Backend (BaaS)**   | `Appwrite` (Authentication, Database, Storage)                                                                                             |
| **Rich Text Editor** | `TinyMCE`                                                                                                                                  |
| **Build Tool**       | `Vite`                                                                                                                                     |

---

## 📦 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn
-   A running Appwrite instance

### 1. Clone the Repository

```bash
git clone https://github.com/Mehtab-786/PostSphere.git
cd PostSphere
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Appwrite

1.  Create a new project on your Appwrite console.
2.  Set up the following services:
    -   **Authentication:** Enable the Email/Password provider.
    -   **Database:** Create a new database and a collection for storing posts. Note the Database ID and Collection ID.
    -   **Storage:** Create a new bucket for handling media uploads. Note the Bucket ID.
3.  Copy your Appwrite project credentials (Project ID and API Endpoint URL).

### 4. Set Up Environment Variables

Create a `.env` file in the root of the project and add your Appwrite and TinyMCE credentials:

```env
VITE_APP_APPWRITE_URL=YOUR_APPWRITE_API_ENDPOINT
VITE_APPWRITE_PROJECT_ID=YOUR_APPWRITE_PROJECT_ID
VITE_APPWRITE_DATABASE_ID=YOUR_APPWRITE_DATABASE_ID
VITE_APPWRITE_COLLECTION_ID=YOUR_APPWRITE_COLLECTION_ID
VITE_APPWRITE_BUCKET_ID=YOUR_APPWRITE_BUCKET_ID
VITE_TINYMCE_KEY=YOUR_TINYMCE_API_KEY
```

### 5. Run the Application

```bash
npm run dev
```

The application should now be running on your local development server.

---

## 👤 Author

**Mehtab Hussain**

-   🔗 **LinkedIn:** [https://www.linkedin.com/in/mehtabhussain786/](https://www.linkedin.com/in/mehtabhussain786/)
-   🐙 **GitHub:** [@Mehtab-786](https://github.com/Mehtab-786)