import PortfolioTable from "../components/PortfolioTable";
import UploadPanel from "../components/UploadPanel";
import Watchlist from "../components/Watchlist";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <section>
        <h2 className="mb-2 text-lg font-semibold">Watchlist</h2>
        <Watchlist symbols={[]} />
      </section>
      <section>
        <h2 className="mb-2 text-lg font-semibold">Portfolio</h2>
        <PortfolioTable positions={[]} />
      </section>
      <UploadPanel />
    </div>
  );
}
