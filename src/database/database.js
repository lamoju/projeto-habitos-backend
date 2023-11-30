const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/projeto_habitos", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;