import "./Trading.css";
import { Helmet } from "react-helmet-async";
import { FiArrowUpRight, FiArrowDownRight, FiTrendingUp, FiBarChart } from "react-icons/fi";

const volumeData = [
  { label: "Mon", value: 40, volume: 1240, change: "+8.2%" },
  { label: "Tue", value: 60, volume: 1680, change: "+12.5%" },
  { label: "Wed", value: 75, volume: 1980, change: "+6.8%" },
  { label: "Thu", value: 55, volume: 1520, change: "-4.2%" },
  { label: "Fri", value: 90, volume: 2320, change: "+9.9%" },
  { label: "Sat", value: 70, volume: 1890, change: "+2.3%" },
  { label: "Sun", value: 50, volume: 1420, change: "-1.8%" },
];

const marketMetrics = [
  { label: "Floor Price", value: "0.83 ETH", change: "+4.7%", positive: true, icon: <FiTrendingUp /> },
  { label: "Active Listings", value: "1,240", change: "+12.0%", positive: true, icon: <FiBarChart /> },
  { label: "Top Bid", value: "5.4 ETH", change: "+9.2%", positive: true, icon: <FiArrowUpRight /> },
  { label: "Market Volatility", value: "18.4%", change: "-2.6%", positive: false, icon: <FiArrowDownRight /> },
];

const topMovers = [
  { name: "Lunar Lotus", owner: "@celeste", price: "2.1 ETH", change: "+18.2%", positive: true },
  { name: "Galaxy Hive", owner: "@nova", price: "1.6 ETH", change: "+12.8%", positive: true },
  { name: "Pixel Phantom", owner: "@rix", price: "3.2 ETH", change: "-4.4%", positive: false },
  { name: "Orbit Orchid", owner: "@ariel", price: "0.9 ETH", change: "+7.1%", positive: true },
];

const Trading = () => {
  const maxValue = Math.max(...volumeData.map((item) => item.value));

  return (
    <>
      <Helmet>
        <title>SoftGalaxy | Trading Volume</title>
        <meta name="description" content="SoftGalaxy trading volume chart page" />
      </Helmet>
      <section id="trading">
        <div className="container mt-4 mb-5 mt-md-5 pt-lg-3">
          <div className="row mx-2 pageTitle mb-4">
            <div className="col-12">
              <span className="d-block F1 textS1">
                <span className="lemon">Trading</span> Volume
              </span>
              <span className="d-block F3 textS2">
                See daily NFT trading volume across the marketplace.
              </span>
            </div>
          </div>

          <div className="row mx-2">
            <div className="col-12 chartCard p-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
                <div>
                  <span className="F2 chartTitle">Weekly Volume</span>
                  <p className="F4 chartSubtitle mt-2">
                    Volume is shown in ETH across the last 7 days.
                  </p>
                </div>
                <div className="d-flex gap-3 statsRow">
                  <div className="statBox">
                    <span className="F5 statLabel">Total Volume</span>
                    <span className="F1 statValue">12,070 ETH</span>
                  </div>
                  <div className="statBox">
                    <span className="F5 statLabel">Average</span>
                    <span className="F1 statValue">1,724 ETH</span>
                  </div>
                </div>
              </div>

              <div className="chartGrid">
                {volumeData.map((item, index) => (
                  <div key={index} className="chartColumn">
                    <span className={`barRate ${item.change.startsWith("+") ? "positive" : "negative"}`}>
                      {item.change}
                    </span>
                    <div
                      className="chartBar"
                      style={{ height: `${(item.value / maxValue) * 100}%` }}
                    >
                      <span className="barValue">{item.volume}</span>
                    </div>
                    <span className="barLabel F5">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-column flex-lg-row justify-content-between gap-4 mt-5 overviewSection">
                <div className="marketOverview p-4">
                  <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
                    <div>
                      <span className="F5 subtitle">Market Snapshot</span>
                      <p className="F4 mt-2">
                        Trading activity is strong across collectible and space asset categories. The last 7 days show growing purchase momentum and a rise in high-value bids.
                      </p>
                    </div>
                    <div className="chartControls">
                      {['7D', '30D', '90D'].map((period) => (
                        <button key={period} className={`periodButton ${period === '7D' ? 'active' : ''}`}>
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="metricCards mt-4">
                    {marketMetrics.map((metric, index) => (
                      <div key={index} className="metricCard p-3">
                        <div className="d-flex justify-content-between align-items-start gap-2">
                          <span className="metricIcon">{metric.icon}</span>
                          <span className={`metricTrend ${metric.positive ? 'positive' : 'negative'}`}>
                            {metric.change}
                          </span>
                        </div>
                        <span className="metricLabel F5 mt-3">{metric.label}</span>
                        <span className="metricValue F2">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="topMoversCard p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="F2 sectionTitle">Top Movers</span>
                    <span className="F6 badge">Live</span>
                  </div>
                  {topMovers.map((item, index) => (
                    <div key={index} className="topMoverItem">
                      <div>
                        <span className="F5 moverName">{item.name}</span>
                        <span className="F6 moverOwner">{item.owner}</span>
                      </div>
                      <div className="text-end">
                        <span className="F5 moverPrice">{item.price}</span>
                        <span className={`F6 moverChange ${item.positive ? 'positive' : 'negative'}`}>
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trading;
