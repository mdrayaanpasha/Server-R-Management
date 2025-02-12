import mongoose from 'mongoose';

const restaurantShardSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true
  },
  MapLink:{
    type:String,
    required:true
  },
  Type: {
    type: String,
    required: true
  },
  Seating_Capacity: {
    type: Number,
    required: true
  },
  Operation_Hours: {
    type: String,
    required: true
  },
  Phone_no: {
    type: Number,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
}, {
  collection: 'Core_Shard_1_0',
  timestamps: true 
});

const Core_Shard_1_0 = mongoose.model('Core_Shard_1_0', restaurantShardSchema);

export default Core_Shard_1_0;
