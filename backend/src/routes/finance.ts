import express from 'express';
import { FinanceEntry } from '../types';

const router = express.Router();

let entries: FinanceEntry[] = [];

// Get all entries
router.get('/', (req, res) => {
  res.json(entries);
});

// Add new entry
router.post('/', (req, res) => {
  const { amount, category, description, date } = req.body;
  const newEntry: FinanceEntry = {
    id: Date.now().toString(),
    amount: Number(amount),
    category,
    description,
    date: new Date(date),
    createdAt: new Date()
  };
  
  entries.push(newEntry);
  
  // Set cookie with last entry date
  res.cookie('lastEntryDate', new Date().toISOString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  });
  
  res.status(201).json(newEntry);
});

// Delete entry
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  entries = entries.filter(entry => entry.id !== id);
  res.status(200).json({ message: 'Entry deleted successfully' });
});

export const financeRoutes = router;
