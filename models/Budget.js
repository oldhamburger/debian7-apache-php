const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
   