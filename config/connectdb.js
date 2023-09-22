const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://dmt:iamdmt@autoservice.jyusdwp.mongodb.net/tedx?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
