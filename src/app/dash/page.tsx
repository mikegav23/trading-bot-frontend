import { Converter } from "@/src/components/converter";
import { CoinChart } from "@/src/components/coin-chart";
import { TransactionsTable } from "@/src/components/transactions-table";

export default function DashOverview() {
  return (
    <div>
      <div className="flex max-lg:flex-col flex-1 gap-6 py-6 w-full max-w-7xl mx-auto">
        {/* Converter widget */}
        <div className="lg:order-1 lg:w-90 shrink-0">
          <Converter />
        </div>
        {/* Chart and table */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <CoinChart />
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
}
