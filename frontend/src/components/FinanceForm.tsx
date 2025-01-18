import { useState, FormEvent } from 'react';
import { FinanceFormData } from '../types/finance';

interface Props {
  onSubmit: (data: FinanceFormData) => void;
}

export const FinanceForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<FinanceFormData>({
    amount: 0,
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      amount: 0,
      category: '',
      description: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <form onSubmit={handleSubmit} className="finance-card animate-fade-in">
      <div className="form-group">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
          className="input-field"
          placeholder="Enter amount"
          step="0.01"
          min="0"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="input-field"
          required
        >
          <option value="">Select a category</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
          <option value="Investment">Investment</option>
          <option value="Savings">Savings</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="input-field"
          placeholder="Enter description"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="input-field"
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full"
      >
        Add Entry
      </button>
    </form>
  );
};
