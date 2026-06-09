import "./Transactions.css";
import { Helmet } from "react-helmet-async";

const transactions = [
  {
    id: "TXN-001",
    date: "2026-06-01",
    type: "Buy",
    item: "Galaxy Ape #244",
    marketplace: "SoftGalaxy",
    amount: "3.25 ETH",
    fee: "0.06 ETH",
    status: "Completed",
  },
  {
    id: "TXN-002",
    date: "2026-06-02",
    type: "Sell",
    item: "Starship Pass",
    marketplace: "OpenSea",
    amount: "1.10 ETH",
    fee: "0.02 ETH",
    status: "Completed",
  },
  {
    id: "TXN-003",
    date: "2026-06-03",
    type: "Buy",
    item: "Crypto Orchid",
    marketplace: "Blur",
    amount: "0.85 ETH",
    fee: "0.01 ETH",
    status: "Pending",
  },
  {
    id: "TXN-004",
    date: "2026-06-04",
    type: "Buy",
    item: "Moon Token",
    marketplace: "SoftGalaxy",
    amount: "2.40 ETH",
    fee: "0.04 ETH",
    status: "Completed",
  },
  {
    id: "TXN-005",
    date: "2026-06-05",
    type: "Sell",
    item: "Neon Rune",
    marketplace: "OpenSea",
    amount: "0.72 ETH",
    fee: "0.01 ETH",
    status: "Completed",
  },
  {
    id: "TXN-006",
    date: "2026-06-06",
    type: "Buy",
    item: "Solar Blade #7",
    marketplace: "SoftGalaxy",
    amount: "5.30 ETH",
    fee: "0.10 ETH",
    status: "Completed",
  },
  {
    id: "TXN-007",
    date: "2026-06-07",
    type: "Sell",
    item: "Lunar Lens",
    marketplace: "Blur",
    amount: "1.85 ETH",
    fee: "0.03 ETH",
    status: "Completed",
  },
  {
    id: "TXN-008",
    date: "2026-06-08",
    type: "Buy",
    item: "Quantum Key",
    marketplace: "OpenSea",
    amount: "0.49 ETH",
    fee: "0.01 ETH",
    status: "Pending",
  },
  {
    id: "TXN-009",
    date: "2026-06-09",
    type: "Sell",
    item: "Galaxy Atlas",
    marketplace: "SoftGalaxy",
    amount: "4.60 ETH",
    fee: "0.09 ETH",
    status: "Completed",
  },
  {
    id: "TXN-010",
    date: "2026-06-10",
    type: "Buy",
    item: "Stellar Drift",
    marketplace: "Blur",
    amount: "2.15 ETH",
    fee: "0.05 ETH",
    status: "Completed",
  },
  {
    id: "TXN-011",
    date: "2026-06-11",
    type: "Sell",
    item: "Aurora Crown",
    marketplace: "SoftGalaxy",
    amount: "3.80 ETH",
    fee: "0.07 ETH",
    status: "Completed",
  },
  {
    id: "TXN-012",
    date: "2026-06-12",
    type: "Buy",
    item: "Nebula Shield",
    marketplace: "OpenSea",
    amount: "1.90 ETH",
    fee: "0.04 ETH",
    status: "Pending",
  },
];

const Transactions = () => {
  return (
    <>
      <Helmet>
        <title>SoftGalaxy | Transaction History</title>
        <meta name="description" content="Track your NFT transaction history" />
      </Helmet>
      <section id="transactions">
        <div className="container mt-4 mb-5 mt-md-5 pt-lg-3">
          <div className="row mx-2 pageTitle mb-4">
            <div className="col-12">
              <span className="d-block F1 textS1">
                <span className="lemon">Transaction</span> History
              </span>
              <span className="d-block F3 textS2">
                Review your recent NFT marketplace activity and trades.
              </span>
            </div>
          </div>

          <div className="row mx-2">
            <div className="col-12 p-4 historyCard">
              <div className="historyHeader d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
                <div>
                  <span className="F2 historyTitle">Latest Activity</span>
                  <p className="F4 historySubtitle mt-2">
                    Your most recent purchases and sales on the SoftGalaxy marketplace.
                  </p>
                </div>
                <div className="historyStats d-flex gap-3">
                  <div className="statBox">
                    <span className="F5 statLabel">Transactions</span>
                    <span className="F1 statValue">{transactions.length}</span>
                  </div>
                  <div className="statBox">
                    <span className="F5 statLabel">Open Items</span>
                    <span className="F1 statValue">{transactions.filter((t) => t.status !== "Completed").length}</span>
                  </div>
                </div>
              </div>

              <div className="tableWrapper">
                <div className="historyRow headerRow">
                  <span>ID</span>
                  <span>Date</span>
                  <span>Type</span>
                  <span>Item</span>
                  <span>Marketplace</span>
                  <span>Amount</span>
                  <span>Fee</span>
                  <span>Status</span>
                </div>
                {transactions.map((item) => (
                  <div key={item.id} className="historyRow">
                    <span className="historyCell">
                      <strong>{item.id}</strong>
                    </span>
                    <span className="historyCell">{item.date}</span>
                    <span className={`historyCell ${item.type === "Buy" ? "buy" : "sell"}`}>{item.type}</span>
                    <span className="historyCell">{item.item}</span>
                    <span className="historyCell">{item.marketplace}</span>
                    <span className="historyCell">{item.amount}</span>
                    <span className="historyCell">{item.fee}</span>
                    <span className={`historyCell status ${item.status === "Completed" ? "completed" : "pending"}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transactions;
