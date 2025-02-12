import mongoose from 'mongoose';

const itemsShardSchema = new mongoose.Schema({
  Restaurant_Id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'RestaurantShard' 
  },
  
  Name: {
    type: String,
    required: true
  },
  Serving_Sizes: {
    type: [String],
    required: true
  },
  Prizes: {
    type: [Number], // Array of prices corresponding to the serving sizes
    required: true
  },
  Raw_Materials: {
    type: [
      {
        item: {
          type: String, // Item name (e.g., 'Tomato', 'Cheese')
          required: true
        },
        quantity: {
          type: Number, // Quantity needed for that item
          required: true
        }
      }
    ],
    required: true
  },
  Preparation_Time: {
    type: String, // String to hold preparation time (e.g., '30 minutes')
    required: true
  },
  Month_Availability: {
    type: [String], // Array of months (e.g., ['January', 'February', ...])
    required: true
  }
}, {
  collection: 'Items_Shard_1_0',
  timestamps: true // Automatically add createdAt and updatedAt fields
});

const Items_Shard_1_0 = mongoose.model('Items_Shard_1_0', itemsShardSchema);

export default Items_Shard_1_0;
