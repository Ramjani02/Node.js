const express = require("express");
const mongoose = require("mongoose");
// const userRoutes = require("./routes/Route");
const app = express();
app.use(express.json());
// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/myapp", {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));
// Routes
app.use("/api", userRoutes);
// Server
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});