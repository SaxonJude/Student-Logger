// Requires
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Configs
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB config
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Requiring Routes
const studentRouter = require('./routes/student.routes');

// Routing
app.use('/students', studentRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
