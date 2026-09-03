import StatCard from "../components/dashboard/StatCard";
import "../styles/dashboard.css";
import RecentProducts from "../components/dashboard/RecentProducts";
import WarrantyOverview from "../components/dashboard/WarrantyOverview";
function Dashboard() {
  const stats = [
    {
      title: "Total Products",
      value: 12,
      description: "Products in your vault",
    },
    {
      title: "Active Warranties",
      value: 7,
      description: "Currently under warranty",
    },
    {
      title: "Expiring Soon",
      value: 2,
      description: "Warranty ending soon",
    },
    {
      title: "Expired",
      value: 3,
      description: "Warranty already expired",
    },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your Warranty & Bill Vault.</p>
      </header>

      <section className="stats-grid">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </section>
      <section className="stats-grid">
        <RecentProducts />
        <WarrantyOverview/>
      </section>
    </div>
  );
}

export default Dashboard;