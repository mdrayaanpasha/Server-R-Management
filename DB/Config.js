import mongoose from 'mongoose';

// Mongo URI for the database
const mongoURI = 'mongodb://localhost:27017/R_Management';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Function to connect to MongoDB
const connectMongo = async () => {
  try {
    await mongoose.connect(mongoURI, options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Import all models as ES modules
import  Core_Shard_0_0  from './Restuarants_Shard_0/Core_Shards/Core_Shard_0_0.js';



import Employees_Shard_0_0 from './Restuarants_Shard_0/Employees_Shards/Employees_Shard_0_0.js';
import Employees_Shard_0_1 from './Restuarants_Shard_0/Employees_Shards/Employees_Shard_0_1.js';
import Employees_Shard_0_2 from './Restuarants_Shard_0/Employees_Shards/Employees_Shard_0_2.js';


import Items_Shard_0_0 from './Restuarants_Shard_0/Items_Shards/Items_Shard_0_0.js';
import Items_Shard_0_1 from './Restuarants_Shard_0/Items_Shards/Items_Shard_0_1.js';
import Items_Shard_0_2 from './Restuarants_Shard_0/Items_Shards/Items_Shard_0_2.js';

import Orders_Shard_0_0 from './Restuarants_Shard_0/Orders_Shards/Orders_Shard_0_0.js';
import Orders_Shard_0_1 from './Restuarants_Shard_0/Orders_Shards/Orders_Shard_0_1.js';
import Orders_Shard_0_2 from './Restuarants_Shard_0/Orders_Shards/Orders_Shards_0_2.js';

import Transactions_Shard_0_0 from './Restuarants_Shard_0/Transactions_Shards/Transactions_Shard_0_0.js';
import Transactions_Shard_0_1 from './Restuarants_Shard_0/Transactions_Shards/Transactions_Shard_0_1.js';
import Transactions_Shard_0_2 from './Restuarants_Shard_0/Transactions_Shards/Transactions_Shard_0_2.js';

import  Users_Shard_0_0  from './Restuarants_Shard_0/Users_Shards/Users_Shard_0_0.js';
import  Users_Shard_0_1  from './Restuarants_Shard_0/Users_Shards/Users_Shard_0_1.js';
import  Users_Shard_0_2  from './Restuarants_Shard_0/Users_Shards/Users_Shard_0_2.js';

// Restuarants_Shard_1
import  Core_Shard_1_0  from './Restuarants_Shard_1/Core_Shards/Core_Shard_1_0.js';


import Employees_Shard_1_0 from './Restuarants_Shard_1/Employees_Shards/Employees_Shard_1_0.js';
import Employees_Shard_1_1 from './Restuarants_Shard_1/Employees_Shards/Employees_Shard_1_1.js';
import Employees_Shard_1_2 from './Restuarants_Shard_1/Employees_Shards/Employees_Shard_1_2.js';


import Items_Shard_1_0 from './Restuarants_Shard_1/Items_Shards/Items_Shard_1_0.js';
import Items_Shard_1_1 from './Restuarants_Shard_1/Items_Shards/Items_Shard_1_1.js';
import Items_Shard_1_2 from './Restuarants_Shard_1/Items_Shards/Items_Shard_1_2.js';


import Orders_Shard_1_0 from './Restuarants_Shard_1/Orders_Shards/Orders_Shard_1_0.js';
import Orders_Shard_1_1 from './Restuarants_Shard_1/Orders_Shards/Orders_Shard_1_1.js';
import Orders_Shard_1_2 from './Restuarants_Shard_1/Orders_Shards/Orders_Shard_1_2.js';


import Transactions_Shard_1_0 from './Restuarants_Shard_1/Transactions_Shards/Transactions_Shard_1_0.js';
import Transactions_Shard_1_1 from './Restuarants_Shard_1/Transactions_Shards/Transactions_Shard_1_1.js';
import Transactions_Shard_1_2 from './Restuarants_Shard_1/Transactions_Shards/Transactions_Shard_1_2.js';

import  Users_Shard_1_0  from './Restuarants_Shard_1/Users_Shards/Users_Shard_1_0.js';
import  Users_Shard_1_1  from './Restuarants_Shard_1/Users_Shards/Users_Shard_1_1.js';
import  Users_Shard_1_2  from './Restuarants_Shard_1/Users_Shards/Users_Shard_1_2.js';

// Restuarants_Shard_2
import  Core_Shard_2_0  from './Restuarants_Shard_2/Core_Shards/Core_Shard_2_0.js';

import Employees_Shard_2_0 from './Restuarants_Shard_2/Employees_Shards/Employees_Shard_2_0.js';
import Employees_Shard_2_1 from './Restuarants_Shard_2/Employees_Shards/Employees_Shard_2_1.js';
import Employees_Shard_2_2 from './Restuarants_Shard_2/Employees_Shards/Employees_Shard_2_2.js';

import Items_Shard_2_0 from './Restuarants_Shard_2/Items_Shards/Items_Shard_2_0.js';
import Items_Shard_2_1 from './Restuarants_Shard_2/Items_Shards/Items_Shard_2_1.js';
import Items_Shard_2_2 from './Restuarants_Shard_2/Items_Shards/Items_Shard_2_2.js';

import Orders_Shard_2_0 from './Restuarants_Shard_2/Orders_Shards/Orders_Shard_2_0.js';
import Orders_Shard_2_1 from './Restuarants_Shard_2/Orders_Shards/Orders_Shard_2_1.js';
import Orders_Shard_2_2 from './Restuarants_Shard_2/Orders_Shards/Orders_Shard_2_2.js';

import Transactions_Shard_2_0 from './Restuarants_Shard_2/Transactions_Shards/Transactions_Shard_2_0.js';
import Transactions_Shard_2_1 from './Restuarants_Shard_2/Transactions_Shards/Transactions_Shard_2_1.js';
import Transactions_Shard_2_2 from './Restuarants_Shard_2/Transactions_Shards/Transactions_Shard_2_2.js';

import  Users_Shard_2_0  from './Restuarants_Shard_2/Users_Shards/Users_Shard_2_0.js';
import  Users_Shard_2_1  from './Restuarants_Shard_2/Users_Shards/Users_Shard_2_1.js';
import  Users_Shard_2_2  from './Restuarants_Shard_2/Users_Shards/Users_Shard_2_2.js';

// Export connectMongo function
export default connectMongo;
