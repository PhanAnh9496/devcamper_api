const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bootcampsRouter = require('./routes/bootcamps.router');
const morgan = require('morgan');
const connectDB = require('./config/db');

//load env
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;

//ConnectDB
connectDB();

//Route files
app.use('/api/v1/bootcamps', bootcampsRouter);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections

process.on('unhandleRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server and exit process
  server.close(() => process.exit(1));
});
