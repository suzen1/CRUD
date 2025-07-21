🛠️ Simple User CRUD API with Express & Mongoose

This is a basic Node.js project using **Express** and **Mongoose** to perform **CRUD operations** on a MongoDB database named `databass`.

🚀 Features

- Create a new user
- Read user data
- Update user info
- Delete user record

 📦 Technologies Used

- Node.js
- Express.js
- MongoDB (local)
- Mongoose (ODM)

---

 🔧 Setup Instructions

### 1. Clone the repository


git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
bash
Copy
Edit
# npm install
3. Make sure MongoDB is running locally
Your MongoDB should be running at:

bash
Copy
Edit
mongodb://localhost:27017/databass
If not, update the MongoDB URI in your userModel.js file.

4. Run the server
bash
Copy
Edit
node index.js
Server runs on: http://localhost:3000

📁 Folder Structure
bash
Copy
Edit
.
├── index.js         # Main Express app
├── userModel.js     # Mongoose schema and model
└── README.md        # Documentation
📬 API Endpoints
Method	Endpoint	Description
GET	/	Welcome route
GET	/create	Create a new user
GET	/read	Read user (by name)
GET	/update	Update a user (by username)
GET	/delete	Delete a user (by name)

📌 Example Data Used
js
Copy
Edit
{
  name: 'jake',
  email: 'jake@gmail.com',
  username: 'jake_doe'
}
👨‍💻 Author
Made with 💻 by Sayyed Suzen Ali
