import ProductForm from "../components/product/ProductForm";
function AddProduct() {
  return (
    <div className="product-form-page">
      <section className="product-form-header">
        <div>
          <p>Products</p>
          <h1>Add Product</h1>
          <p>Add a new product and keep its warranty information organized.</p>
        </div>
      </section>

      <ProductForm />
    </div>
  );
}

export default AddProduct;