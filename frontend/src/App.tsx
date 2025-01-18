import { useState, useEffect } from 'react'
import { FinanceForm } from './components/FinanceForm'
import { FinanceList } from './components/FinanceList'
import { financeApi } from './services/api'
import { FinanceEntry, FinanceFormData } from './types/finance'
import Cookies from 'js-cookie'

function App() {
  const [entries, setEntries] = useState<FinanceEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const data = await financeApi.getEntries();
      setEntries(data);
    } catch (error) {
      console.error('Failed to load entries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddEntry = async (formData: FinanceFormData) => {
    try {
      const newEntry = await financeApi.addEntry(formData);
      setEntries([...entries, newEntry]);
    } catch (error) {
      console.error('Failed to add entry:', error);
    }
  };

  const handleDeleteEntry = async (id: string) => {
    try {
      await financeApi.deleteEntry(id);
      setEntries(entries.filter(entry => entry.id !== id));
    } catch (error) {
      console.error('Failed to delete entry:', error);
    }
  };

  const lastEntryDate = Cookies.get('lastEntryDate');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Finance Logger</h1>
          <p className="text-gray-600">Track your income and expenses with ease</p>
          
          {lastEntryDate && (
            <div className="mt-4 text-sm text-gray-500">
              Last entry was made on: {new Date(lastEntryDate).toLocaleDateString()}
            </div>
          )}
        </header>

        <main>
          <div className="mb-8">
            <h2 className="card-header">Add New Entry</h2>
            <FinanceForm onSubmit={handleAddEntry} />
          </div>

          {loading ? (
            <div className="finance-card animate-fade-in">
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                <span className="ml-2 text-gray-600">Loading...</span>
              </div>
            </div>
          ) : (
            <FinanceList entries={entries} onDelete={handleDeleteEntry} />
          )}
        </main>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p> {new Date().getFullYear()} Finance Logger. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
