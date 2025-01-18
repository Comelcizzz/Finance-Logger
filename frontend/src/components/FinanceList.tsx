import { FinanceEntry } from '../types/finance';

interface Props {
  entries: FinanceEntry[];
  onDelete: (id: string) => void;
}

export const FinanceList = ({ entries, onDelete }: Props) => {
  const getCategoryBadgeClass = (category: string) => {
    switch (category.toLowerCase()) {
      case 'income':
        return 'badge badge-success';
      case 'expense':
        return 'badge badge-danger';
      case 'investment':
        return 'badge badge-warning';
      default:
        return 'badge bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="finance-card mt-8 animate-fade-in">
      <h2 className="card-header">Finance Entries</h2>
      <div className="table-container">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="table-header">
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {entries.map((entry) => (
              <tr key={entry.id} className="table-row">
                <td className="table-cell">
                  {new Date(entry.date).toLocaleDateString()}
                </td>
                <td className="table-cell">
                  <span className={getCategoryBadgeClass(entry.category)}>
                    {entry.category}
                  </span>
                </td>
                <td className="table-cell">{entry.description}</td>
                <td className="table-cell font-medium">
                  <span className={entry.amount >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {formatCurrency(entry.amount)}
                  </span>
                </td>
                <td className="table-cell">
                  <button
                    onClick={() => onDelete(entry.id)}
                    className="btn btn-danger text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {entries.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No entries found. Add your first finance entry above!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
