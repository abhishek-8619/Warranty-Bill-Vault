import StatusBadge from "../common/StatusBadge";
import EmptyState from "../common/EmptyState";

function RecentProducts() {
  const products = [
    {
      id: 1,
      name: "Dell Inspiron 15",
      category: "Laptop",
      purchaseDate: "12 Aug 2026",
      warranty: "12 months",
      status: "Active",
    },
    {
      id: 2,
      name: "Samsung Galaxy S25",
      category: "Mobile",
      purchaseDate: "05 Jul 2026",
      warranty: "12 months",
      status: "Active",
    },
    {
      id: 3,
      name: "Sony Bravia TV",
      category: "Television",
      purchaseDate: "20 Jan 2025",
      warranty: "12 months",
      status: "Expired",
    },
  ];

   return (
    <section className="recent-products">
      <div className="section-header">
        <h2>Recent Products</h2>
        <button>View All</button>
      </div>

      {products.length === 0 ? (
        <EmptyState message="No products added yet." />
      ) : (
        <div className="products-list">
          {products.map((product) => (
            <div className="product-row" key={product.id}>
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>

              <span>{product.purchaseDate}</span>
              <span>{product.warranty}</span>

              <StatusBadge status={product.status} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentProducts;