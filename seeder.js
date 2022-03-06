const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const Bootcamp = require('./models/Bootcamp');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

// Read JSON files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log('Data Imported...');
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log('Data Deleted...');
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] === '-i') {
  importData();
}
if (process.argv[2] === '-d') {
  deleteData();
}
