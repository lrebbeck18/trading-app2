import { useEffect, useState } from "react";
import Watchlist from "../components/Watchlist";

export default function WatchlistPage() {
  const [symbols, setSymbols] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/watchlist")
      .then((res) => res.json())
      .then((data: unknown) => {
        if (Array.isArray(data)) {
          setSymbols((data as { symbol?: string }[]).map((x) => x.symbol ?? String(x)));
        }
      })
      .catch(() => setSymbols([]));
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Watchlist</h1>
      <Watchlist symbols={symbols} />
    </div>
  );
}
