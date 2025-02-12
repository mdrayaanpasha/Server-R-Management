import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  Restaurant_Id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  Customer_Id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  Items_Purchased: [{
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
  }],
  Gross_Total: {
    type: Number,
    required: true
  },
  Taxes: {
    type: Number,
    required: true
  },
  Net_Total: {
    type: Number,
    required: true
  },
  Transaction_Type: {
    type: String,
    enum: ['Sale', 'Refund', 'Expense'],
    required: true
  },
  Payment_Method: {
    type: String,
    enum: ['Cash', 'UPI', 'Digital Wallets', 'Gift Cards'],
    required: true
  },
  Discount_Applied: {
    type: Number,
    default: 0 // Assuming no discount by default
  },
  Feedback_Id: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  }
}, {
  collection: 'Transactions_Shard_1_2',
  timestamps: true // Automatically add createdAt and updatedAt fields
});

const Transactions_Shard_1_2 = mongoose.model('Transactions_Shard_1_2', transactionSchema);

export default Transactions_Shard_1_2;
