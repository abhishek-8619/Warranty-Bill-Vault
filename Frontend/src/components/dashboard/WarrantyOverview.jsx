function WarrantyOverview() {
  const warrantyData = [
    { label: "Active", count: 7 },
    { label: "Expiring Soon", count: 2 },
    { label: "Expired", count: 3 },
  ];

  return (
    <section className="warranty-overview">
      <div className="section-header">
        <h2>Warranty Overview</h2>
      </div>

      <div className="warranty-list">
        {warrantyData.map((item) => (
          <div className="warranty-item" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.count}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WarrantyOverview;