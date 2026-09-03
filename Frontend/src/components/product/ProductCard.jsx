import StatusBadge from "../common/StatusBadge";

function ProductCard({ product }) {
  return (
    <article>
      <div>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
      </div>

      <div>
        <p>
          <strong>Purchase Date:</strong> {product.purchaseDate}
        </p>

        <p>
          <strong>Warranty:</strong> {product.warranty}
        </p>

        <p>
          <strong>Status:</strong> <StatusBadge status={product.status} />
        </p>
      </div>

      <button>View Details</button>
    </article>
  );
}

export default ProductCard;
