import { useState } from "react";
import EmptyState from "../components/common/EmptyState";
import ProductCard from "../components/product/ProductCard";

function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const products = [
    {
      id: 1,
      name: "Dell Inspiron 15",
      category: "Laptop",
      purchaseDate: "15 Aug 2025",
      warranty: "15 Aug 2028",
      status: "Active",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      category: "Mobile",
      purchaseDate: "10 Jan 2025",
      warranty: "10 Jan 2026",
      status: "Expired",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" ||
      product.category.toLowerCase() === categoryFilter;

    const matchesStatus =
      statusFilter === "all" || product.status.toLowerCase() === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div>
      {/* Page Header */}
      <section>
        <div>
          <h1>Products</h1>
          <p>Manage your products and warranty information.</p>
        </div>

        <button>Add Product</button>
      </section>

      <section>
        <div className="products-toolbar">
          <input
            type="text"
            placeholder="Search products..."
            aria-label="Search products"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        

        
          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="laptop">Laptop</option>
            <option value="mobile">Mobile</option>
          </select>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="expired">Expired</option>
          </select>
        </div>
      </section>

      {/* Product List */}
      <section>
        {isLoading ? (
          <p>Loading products...</p>
        ) : filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No products found"
            description="Try changing your search or filters."
          />
        )}
      </section>
    </div>
  );
}

export default Products;
