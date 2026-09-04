import "../../styles/ProductForm.css";
import { useState } from "react";

function ProductForm({ mode = "add", initialData = null }) {
  const defaultFormData = {
    productName: "",
    category: "",
    brand: "",
    model: "",
    serialNumber: "",
    purchaseDate: "",
    purchasePrice: "",
    seller: "",
    warrantyDuration: "",
    warrantyUnit: "months",
  };

  const [formData, setFormData] = useState(
    initialData ? { ...defaultFormData, ...initialData } : defaultFormData,
  );

  const [billFile, setBillFile] = useState(null);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.brand.trim()) {
      newErrors.brand = "Brand is required";
    }

    if (!formData.purchaseDate) {
      newErrors.purchaseDate = "Purchase date is required";
    }

    if (formData.purchasePrice === "") {
      newErrors.purchasePrice = "Purchase price is required";
    } else if (Number(formData.purchasePrice) < 0) {
      newErrors.purchasePrice = "Purchase price cannot be negative";
    }

    if (!formData.warrantyDuration) {
      newErrors.warrantyDuration = "Warranty duration is required";
    } else if (Number(formData.warrantyDuration) <= 0) {
      newErrors.warrantyDuration = "Warranty duration must be greater than 0";
    }

    if (!formData.warrantyUnit) {
      newErrors.warrantyUnit = "Warranty unit is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      {/* Product Information */}
      <section className="product-form-section">
        <h2>Product Information</h2>

        <div className="product-form-section-content">
          <div className="form-field">
            <label htmlFor="productName">Product Name</label>

            <input
              id="productName"
              name="productName"
              type="text"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Enter product name"
            />
            {errors.productName && (
              <span className="form-error">{errors.productName}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="category">Category</label>

            <input
              id="category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
            />
            {errors.category && (
              <span className="form-error">{errors.category}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="brand">Brand</label>

            <input
              id="brand"
              name="brand"
              type="text"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Enter brand"
            />
            {errors.brand && <span className="form-error">{errors.brand}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="model">Model</label>

            <input
              id="model"
              name="model"
              type="text"
              value={formData.model}
              onChange={handleChange}
              placeholder="Enter model"
            />
            {errors.model && <span className="form-error">{errors.model}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="serialNumber">Serial Number</label>

            <input
              id="serialNumber"
              name="serialNumber"
              type="text"
              value={formData.serialNumber}
              onChange={handleChange}
              placeholder="Enter serial number"
            />
            {errors.serialNumber && (
              <span className="form-error">{errors.serialNumber}</span>
            )}
          </div>
        </div>
      </section>

      {/* Purchase Information */}
      <section className="product-form-section">
        <h2>Purchase Information</h2>

        <div className="product-form-section-content">
          <div className="form-field">
            <label htmlFor="purchaseDate">Purchase Date</label>

            <input
              id="purchaseDate"
              name="purchaseDate"
              type="date"
              value={formData.purchaseDate}
              onChange={handleChange}
            />
            {errors.purchaseDate && (
              <span className="form-error">{errors.purchaseDate}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="purchasePrice">Purchase Price</label>

            <input
              id="purchasePrice"
              name="purchasePrice"
              type="number"
              min="0"
              step="0.01"
              value={formData.purchasePrice}
              onChange={handleChange}
              placeholder="Enter purchase price"
            />
            {errors.purchasePrice && (
              <span className="form-error">{errors.purchasePrice}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="seller">Seller / Store</label>

            <input
              id="seller"
              name="seller"
              type="text"
              value={formData.seller}
              onChange={handleChange}
              placeholder="Enter seller or store name"
            />
            {errors.seller && (
              <span className="form-error">{errors.seller}</span>
            )}
          </div>
        </div>
      </section>

      {/* Warranty Information */}

      <section className="product-form-section">
        <h2>Warranty Information</h2>

        <div className="product-form-section-content">
          <div className="form-field">
            <label htmlFor="warrantyDuration">Warranty Duration</label>

            <input
              id="warrantyDuration"
              name="warrantyDuration"
              type="number"
              min="1"
              value={formData.warrantyDuration}
              onChange={handleChange}
              placeholder="Enter warranty duration"
            />
            {errors.warrantyDuration && (
              <span className="form-error">{errors.warrantyDuration}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="warrantyUnit">Duration Unit</label>

            <select
              id="warrantyUnit"
              name="warrantyUnit"
              value={formData.warrantyUnit}
              onChange={handleChange}
            >
              <option value="months">Months</option>
              <option value="years">Years</option>
            </select>
          </div>
        </div>
      </section>

      <section className="product-form-section">
        <h2>Bill / Invoice</h2>

        <div className="bill-upload">
          {!billFile ? (
            <label htmlFor="bill" className="bill-upload-box">
              <span className="bill-upload-icon">📄</span>

              <span className="bill-upload-title">Upload your bill</span>

              <span className="bill-upload-description">PDF, JPG or PNG</span>

              <span className="bill-upload-button">Choose File</span>

              <input
                id="bill"
                name="bill"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(event) => {
                  const file = event.target.files?.[0];

                  if (file) {
                    setBillFile(file);
                  }
                }}
              />
              {errors.bill && <span className="form-error">{errors.bill}</span>}
            </label>
          ) : (
            <div className="bill-file-preview">
              <div className="bill-file-info">
                <span className="bill-file-icon">📄</span>

                <div>
                  <p className="bill-file-name">{billFile.name}</p>

                  <p className="bill-file-size">
                    {(billFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>

              <div className="bill-file-actions">
                <label htmlFor="bill" className="bill-change-button">
                  Change
                </label>

                <button type="button" onClick={() => setBillFile(null)}>
                  Remove
                </button>
              </div>

              <input
                id="bill"
                name="bill"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(event) => {
                  const file = event.target.files?.[0];

                  if (file) {
                    setBillFile(file);
                  }
                }}
                hidden
              />
              {errors.bill && <span className="form-error">{errors.bill}</span>}
            </div>
          )}
        </div>
      </section>

      {/* Form Actions */}
      <div className="product-form-actions">
        <button type="button">Cancel</button>

        <button type="submit">
          {mode === "edit" ? "Save Changes" : "Add Product"}
        </button>
      </div>
    </form>
  );
 
}

export default ProductForm;
