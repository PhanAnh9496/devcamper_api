const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bootcampsRouter = require('./routes/bootcamps.router');
const morgan = require('morgan');
//load env
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcampsRouter);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
