const mongoose = require("mongoose");

const database = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    if (connection) console.log("connect successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error: ${error.message}`);
    }
    process.exit(1);
  }
};

module.exports = database;