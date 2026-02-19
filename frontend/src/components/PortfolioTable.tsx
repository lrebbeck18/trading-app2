interface Position {
  symbol: string;
  shares: number;
  avgCost: number;
  value?: number;
}

interface PortfolioTableProps {
  positions: Position[];
}

export default function PortfolioTable({ positions }: PortfolioTableProps) {
  return (
    <table className="w-full border-collapse border border-slate-300">
      <thead>
        <tr className="bg-slate-100">
          <th className="border border-slate-300 px-4 py-2 text-left">Symbol</th>
          <th className="border border-slate-300 px-4 py-2 text-right">Shares</th>
          <th className="border border-slate-300 px-4 py-2 text-right">Avg Cost</th>
          <th className="border border-slate-300 px-4 py-2 text-right">Value</th>
        </tr>
      </thead>
      <tbody>
        {positions.length === 0 ? (
          <tr>
            <td colSpan={4} className="border border-slate-300 px-4 py-6 text-center text-slate-500">
              No positions
            </td>
          </tr>
        ) : (
          positions.map((p) => (
            <tr key={p.symbol}>
              <td className="border border-slate-300 px-4 py-2 font-medium">{p.symbol}</td>
              <td className="border border-slate-300 px-4 py-2 text-right">{p.shares}</td>
              <td className="border border-slate-300 px-4 py-2 text-right">${p.avgCost.toFixed(2)}</td>
              <td className="border border-slate-300 px-4 py-2 text-right">
                {p.value != null ? `$${p.value.toFixed(2)}` : "—"}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
