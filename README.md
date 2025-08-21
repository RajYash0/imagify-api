# Imagify API

Imagify API is a **Node.js + Express** based backend server for the Imagify project.  
It provides RESTful APIs for **image generation, storage, and management**, using **MongoDB** as the database.

---

## 🚀 Features

- 🖼️ AI-based image generation & manipulation
- 📂 Image upload and storage
- 🔑 Authentication using **JWT**
- 🌐 RESTful API architecture
- 📦 MongoDB integration via **Mongoose**
- 🛠️ Environment variable-based configuration

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Environment Variables:** dotenv

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/RajYash0/imagify-api.git
cd imagify-api
Install dependencies:

bash
Copy
Edit
npm install
⚙️ Configuration
Create a .env file in the root directory and add the following variables:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
▶️ Running the Server
For development:

bash
Copy
Edit
npm run dev
For production:

bash
Copy
Edit
npm start
The API will run at:
http://localhost:5000

📌 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login existing user

Image Routes
Method	Endpoint	Description
POST	/api/images	Upload or generate image
GET	/api/images	Get all images
GET	/api/images/:id	Get image by ID
DELETE	/api/images/:id	Delete image by ID

🧪 Testing API
Use Postman or Thunder Client to test the API endpoints.

📜 Scripts
Command	Description
npm install	Install dependencies
npm run dev	Run in development mode
npm start	Run in production mode

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

📄 License
This project is MIT Licensed.

📧 Contact
Author: Yash Raj
GitHub: @RajYash0
