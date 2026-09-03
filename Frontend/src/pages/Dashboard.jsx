function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome back 👋</h2>
        <p>Here's an overview of your products and warranties.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Products</h3>
          <p>12</p>
        </div>

        <div className="stat-card">
          <h3>Bills</h3>
          <p>10</p>
        </div>

        <div className="stat-card">
          <h3>Active Warranties</h3>
          <p>8</p>
        </div>

        <div className="stat-card">
          <h3>Expired Warranties</h3>
          <p>2</p>
        </div>
      </div>

      <div className="recent-products">
        <h3>Recent Products</h3>

        <div className="product-list">
          <div className="product-row">
            <span>Laptop</span>
            <span>2027-05-12</span>
            <span>Active</span>
          </div>

          <div className="product-row">
            <span>Television</span>
            <span>2026-10-03</span>
            <span>Active</span>
          </div>

          <div className="product-row">
            <span>Phone</span>
            <span>2026-07-20</span>
            <span>Expired</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;