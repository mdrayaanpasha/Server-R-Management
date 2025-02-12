import mongoose from 'mongoose';

const ordersSchema = new mongoose.Schema({
  Restaurant_Id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  Customer_Id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  Customer_PhoneNo: {
    type: Number, // Phone number stored as Number, but might want to store it as String
    required: true
  },
  Table_Id: {
    type: String, // Assuming Table_Id can be a string (e.g., 'T1', 'T2')
    required: true
  },
  Orders: [{
    Item_Id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    Quantity: {
      type: Number,
      required: true
    },
    Price: {
      type: Number,
      required: true
    }
  }]
}, {
  collection: 'Orders_Shard_1_2',
  timestamps: true // Automatically add createdAt and updatedAt fields
});

const Orders_Shard_1_2 = mongoose.model('Orders_Shard_1_2', ordersSchema);

export default Orders_Shard_1_2;
