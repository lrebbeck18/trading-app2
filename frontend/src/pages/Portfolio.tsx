import { useEffect, useState } from "react";
import PortfolioTable from "../components/PortfolioTable";

interface Position {
  symbol: string;
  shares: number;
  avgCost: number;
  value?: number;
}

export default function Portfolio() {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data: unknown) => {
        if (Array.isArray(data)) setPositions(data as Position[]);
      })
      .catch(() => setPositions([]));
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Portfolio</h1>
      <PortfolioTable positions={positions} />
    </div>
  );
}
