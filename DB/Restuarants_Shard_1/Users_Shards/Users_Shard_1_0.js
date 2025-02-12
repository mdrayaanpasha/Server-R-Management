import mongoose from 'mongoose';

const usersShardSchema = new mongoose.Schema({
  Users_Id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true, // This will auto-generate an ObjectId for the Users_Id
    required: true
  },
  Restaurant_Id: {
    type: Number, // Using Number as specified
    required: true
  },
  Phone_Number: {
    type: Number, // Assuming phone numbers are stored as numbers
    required: true
  }
}, {
  collection: 'Users_Shard_1_0', 
  timestamps: true // Automatically adds createdAt and updatedAt
});

const Users_Shard_1_0 = mongoose.model('Users_Shard_1_0', usersShardSchema);

export default Users_Shard_1_0;
