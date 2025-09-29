🚀 PostSphere
PostSphere is a modern full-stack blogging web application built with React.js, Tailwind CSS, Redux Toolkit, and Appwrite. It enables users to create, edit, and manage rich blog content using the TinyMCE Editor, with seamless authentication and file handling powered by Appwrite’s BaaS capabilities.

🔗 Live Demo: [PostSphere-react.vercel.app](https://post-sphere.vercel.app/)

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS, Redux Toolkit
Backend (BaaS): Appwrite (for Authentication, Database, and Storage)
Rich Text Editor: TinyMCE
State Management: Redux Toolkit

✨ Features
🔐 User Authentication (Sign up / Log in / Log out)
📝 Create, edit, and delete blog posts with a WYSIWYG editor
📦 Upload and store images/files via Appwrite Storage
🗃️ Appwrite Realtime Database integration
⚡ Responsive UI with Tailwind CSS
🗂️ Organized codebase with reusable components and Redux slices

📦 Getting Started
1. Clone the repo
git clone https://github.com/Mehtab-786/PostSphere.git
cd PostSphere

3. Install dependencies
npm install

4. Configure Appwrite
Create a project on Appwrite

Set up:
Authentication (Email/Password)
Database (for storing blog posts)
Storage (for media uploads)
Copy the relevant credentials (Project ID, Endpoint, etc.)

4. Set up .env file
Create a .env file in the root with the following:
VITE_APP_APPWRITE_URL=YOUR_APP_APPWRITE_URL
VITE_APPWRITE_PROJECT_ID=YOUR_APPWRITE_PROJECT_ID
VITE_APPWRITE_DATABASE_ID=YOUR_APPWRITE_DATABASE_ID
VITE_APPWRITE_TABLE_ID=YOUR_APPWRITE_TABLE_ID
VITE_APPWRITE_BUCKET_ID=YOUR_APPWRITE_BUCKET_ID
VITE_TINYMCE_KEY=YOUR_TINYMCE_KEY

5. Run the app
npm run dev

👤 Author
Mehtab Hussain 🔗 LinkedIn
