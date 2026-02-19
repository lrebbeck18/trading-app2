interface WatchlistProps {
  symbols: string[];
}

export default function Watchlist({ symbols }: WatchlistProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {symbols.length === 0 ? (
        <li className="text-slate-500">No symbols in watchlist</li>
      ) : (
        symbols.map((s) => (
          <li
            key={s}
            className="rounded bg-slate-200 px-3 py-1 font-mono text-sm"
          >
            {s}
          </li>
        ))
      )}
    </ul>
  );
}
