import StatusBadge from "../common/StatusBadge";
import { useNavigate } from "react-router-dom";


function ProductCard({ product }) {
  const navigate = useNavigate();
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

      <button type="button" onClick={() => navigate(`/dashboard/product/${product.id}`)}>
        View Details
      </button>
    </article>
  );
}

export default ProductCard;
