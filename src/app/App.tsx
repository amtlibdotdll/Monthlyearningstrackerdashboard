import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { MetricCards } from './components/MetricCards';
import { EarningsChart } from './components/EarningsChart';
import { EarningsByBook } from './components/EarningsByBook';
import { MonthlyComparison } from './components/MonthlyComparison';

export default function App() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen" data-name="Author Earnings Tracker">
      <Header />
      <Navigation />
      <div className="pt-[160px] px-[30px] pb-[30px]">
        <div className="grid grid-cols-[410px_1fr] gap-[30px]">
          {/* Left Column - Metric Cards */}
          <MetricCards />
          
          {/* Right Column - Charts */}
          <div className="flex flex-col gap-[30px]">
            <EarningsChart />
            <div className="grid grid-cols-2 gap-[30px]">
              <EarningsByBook />
              <MonthlyComparison />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
