# Mini Blog in React

## 📖 Overview
A mini blog application built with React and Firebase that allows users to create, edit, delete, and cancel posts. Users can also register and log in, upload images to their posts, and search for posts or tags. The homepage displays all the posts available.

---

## 🚀 Features
- **User Authentication:** Register and log in to manage your posts.
- **CRUD Operations:** Create, edit, delete, and cancel posts.
- **Image Upload:** Add images to your posts for better engagement.
- **Search Functionality:** Search for posts or tags with ease.
- **Dynamic Homepage:** Displays all posts for public viewing.
- **Firebase Integration:** Handles backend operations like authentication, database, and storage.

---

## 🛠️ Technologies Used
- **React:** For building the frontend interface.
- **Firebase:** For authentication, database, and storage.
- **React Router:** For navigating between pages.
- **CSS:** For styling the application.

---

## 📷 Screenshots
- **Homepage:** View all posts.
- **Login/Signup:** Secure authentication system.
- **Post Management:** Create, edit, and delete posts.
- **Search Bar:** Find posts by title or tags.

---

## 🔧 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/mini-blog-react.git
   ```

2. Navigate to the project directory:
   ```bash
   cd mini-blog-react
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file with your Firebase credentials:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm start
   ```

---

## 📂 Folder Structure
```
mini-blog-react/
├── public/
├── src/
│   ├── components/      # Reusable components (e.g., PostCard, Navbar)
│   ├── pages/           # Application pages (e.g., Home, Login, Dashboard)
│   ├── services/        # Firebase services (auth, database, storage)
│   ├── styles/          # CSS or SCSS files
│   ├── App.js           # Main app component
│   ├── index.js         # Entry point
└── README.md
```

---

## 🤝 Contributions
Feel free to fork this project, open issues, or submit pull requests. All contributions are welcome!

---

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## 🌟 Acknowledgments
Thanks to the React and Firebase communities for their fantastic documentation and resources!

