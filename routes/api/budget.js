const express = require('express');
const router = express.Router();
const Budget = require('../../models/Budget');

//Add a budget

router.post('/', async (req, res, next) => {
  try {
    const budget = await Budget.findOne({ userId: req.body.userId });
    if (budget) {
      await Budget.updateOne({
        userId: req.body.userId,
        $set: { monthlyGoal: req.body.monthlyGoal },
      });
      const budget = await Budget.findOne({
        userId: req.bod