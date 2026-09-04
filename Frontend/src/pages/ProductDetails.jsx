import { useState } from "react";
import "../styles/ProductDetails.css";
import ProductForm from "../components/product/ProductForm";
function ProductDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const product = {
    name: "Dell Inspiron 15",
    brand: "Dell",
    category: "Laptop",
    model: "Inspiron 15 3520",
    serialNumber: "DL3520ABC123",
    purchaseDate: "15 Jan 2026",
    price: "₹65,000",
    seller: "Amazon",
  };

  return (
    <div className="product-details-page">
      {/* Edit Mode */}
      {isEditing ? (
        <ProductForm
          mode="edit"
          initialData={{
            productName: product.name,
            category: product.category,
            brand: product.brand,
            model: product.model,
            serialNumber: product.serialNumber,
            purchaseDate: "2026-01-15",
            purchasePrice: "65000",
            seller: product.seller,
            warrantyDuration: "1",
            warrantyUnit: "years",
          }}
        />
      ) : (
        <>{/* Existing Product Details UI */}</>
      )}

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <div className="product-details-notice">
          <p>Are you sure you want to delete this product?</p>

          <button type="button" onClick={() => setShowDeleteConfirm(false)}>
            Cancel
          </button>

          <button type="button">Confirm Delete</button>
        </div>
      )}

      {/* Page Header */}
      <section className="product-details-header">
        <div className="product-details-title">
          <p>Product Details</p>
          <h1>{product.name}</h1>
        </div>

        <div className="product-details-actions">
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button type="button" onClick={() => setShowDeleteConfirm(true)}>
            Delete
          </button>
        </div>
      </section>

      {/* Product Information */}
      <section className="product-details-section">
        <h2>Product Information</h2>

        <div className="product-info-grid">
          <div className="product-info-item">
            <span>Brand</span>
            <p>{product.brand}</p>
          </div>

          <div className="product-info-item">
            <span>Category</span>
            <p>{product.category}</p>
          </div>

          <div className="product-info-item">
            <span>Model</span>
            <p>{product.model}</p>
          </div>

          <div className="product-info-item">
            <span>Serial Number</span>
            <p>{product.serialNumber}</p>
          </div>

          <div className="product-info-item">
            <span>Purchase Date</span>
            <p>{product.purchaseDate}</p>
          </div>

          <div className="product-info-item">
            <span>Purchase Price</span>
            <p>{product.price}</p>
          </div>

          <div className="product-info-item">
            <span>Seller</span>
            <p>{product.seller}</p>
          </div>
        </div>
      </section>

      {/* Warranty Information */}
      <section className="product-details-section">
        <h2>Warranty Information</h2>

        <div className="warranty-info-grid">
          <div className="product-info-item">
            <span>Status</span>
            <p>Active</p>
          </div>

          <div className="product-info-item">
            <span>Warranty Period</span>
            <p>1 Year</p>
          </div>

          <div className="product-info-item">
            <span>Start Date</span>
            <p>15 Jan 2026</p>
          </div>

          <div className="product-info-item">
            <span>Expiry Date</span>
            <p>15 Jan 2027</p>
          </div>
        </div>
      </section>

      {/* Bill */}
      <section className="product-details-section">
        <h2>Bill</h2>

        <div className="bill-content">
          <div className="product-info-item">
            <span>Document</span>
            <p>purchase-invoice.pdf</p>
          </div>

          <div className="bill-actions">
            <button type="button">View Bill</button>
            <button type="button">Download</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
