import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true
  },
  Role: {
    type: String,
    required: true
  },
  Shift_Schedule: {
    type: String, // You can change it to Time if you have specific time objects, but for simplicity, we are using String
    required: true
  },
  Salary: {
    type: Number,
    required: true
  },
  Pay_Period: {
    type: String,
    required: true
  },
  Payroll_Status: {
    type: String,
    enum: ['Done', 'Pending'],
    required: true
  },
  Current_Status: {
    type: String,
    enum: ['Online', 'Offline'],
    required: true
  },
  Absentism_Current_Date: {
    type: [Date], // Array of Dates
    default: []
  },
  Customer_Ratings_Sum: {
    type: Number,
    default: 0
  },
  No_Of_Ratings: {
    type: Number,
    default: 0
  }
}, {
  collection: 'Employees_Shard_0_1',
  timestamps: true
});

const Employees_Shard_0_1 = mongoose.model('Employees_Shard_0_1', employeeSchema);

export default  Employees_Shard_0_1;
