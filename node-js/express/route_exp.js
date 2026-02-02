// Introduction:
 // In Express.js, routes are used to decide how the server should respond when a client requests a  specific URL with a specific HTTP method (GET, POST, etc.).
// Each route connects:
 // a URL path.
 // an HTTP method.
 // a handler function.
// Routes → Map URL + HTTP method to a handler function
const express=require("express");
const app=express();
app.get('/', (req, res) => res.send("Home")); // GET request → Home page
app.get('/about', (req, res) => res.send("About")); // GET request → About page
app.post('/login', (req, res) => res.send("Login")); // POST request → Login action

// Organizing routes using Router()
const router = express.Router(); // Create a Router object
router.get('/profile', (req, res) => { // GET request → /profile
 res.send("Profile"); // Send Profile response
});
app.use('/user', router); 
app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
});
// Mount router at /user
// Workflow:
 // Client Request
 // ↓
 // Express App
 // ↓
 // app.use('/user', router)
 // ↓
 // Router checks /profile
 // ↓
 // Route Handler runs
 // ↓
 // Response sent to Client
// Workflow:
 // Client Request
 // ↓
 // Middleware
 // ↓
 // Route
 // ↓
 // Response
// Notes:
// app.get() → Handle GET requests.
// app.post() → Handle POST requests.
// express.Router() → Used to group related routes.
// app.use() → Attach router to a base path.