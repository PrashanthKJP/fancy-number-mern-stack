const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DATA-BASE CONNECTION SUCCESSFULLY");
  } catch (error) {
    console.log(error, "DATA BASE not connected");
  }
};

module.exports = connectDB;
