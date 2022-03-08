const express = require('express');
const dotenv = require('dotenv');
//load env
dotenv.config({ path: './config/config.env' });
const app = express();
const bootcampsRouter = require('./routes/bootcamps.router');
const coursesRouter = require('./routes/courses.router');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// parser
app.use(express.json());

//ConnectDB
connectDB();

//Route files
app.use('/api/v1/bootcamps', bootcampsRouter);
app.use('/api/v1/courses', coursesRouter);

app.use(errorHandler);

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
