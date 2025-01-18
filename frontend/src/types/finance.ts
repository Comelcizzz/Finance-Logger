export interface FinanceEntry {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  createdAt: string;
}

export type FinanceFormData = Omit<FinanceEntry, 'id' | 'createdAt'>;
