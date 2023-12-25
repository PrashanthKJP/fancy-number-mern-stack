const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./connection/DB_Conn");
const cors = require("cors");

//middleware
app.use(express.json());
dotenv.config();
app.use(cors());

//host
const PORT = process.env.PORT || 8888;

//database connection
connectDB();

//route's
app.use("/api", require("./routes/userRoute"));
app.use("/api", require("./routes/numberRoutes"));
app.use("/api", require("./routes/orderRoute"));
app.use("/api", require("./routes/filterRoute"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
