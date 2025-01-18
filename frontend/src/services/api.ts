import axios from 'axios';
import { FinanceEntry, FinanceFormData } from '../types/finance';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true
});

export const financeApi = {
  getEntries: async () => {
    const response = await api.get<FinanceEntry[]>('/finance');
    return response.data;
  },
  
  addEntry: async (data: FinanceFormData) => {
    const response = await api.post<FinanceEntry>('/finance', data);
    return response.data;
  },
  
  deleteEntry: async (id: string) => {
    const response = await api.delete(`/finance/${id}`);
    return response.data;
  }
};
