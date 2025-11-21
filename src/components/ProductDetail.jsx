import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProducts } from "../utils/productData";
import "../css/productDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pdp-page pdp-not-found">
        <div className="pdp-inner">
          <p>Product not found.</p>
          <button
            type="button"
            className="pdp-back-button"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const galleryImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];
  const [activeImage, setActiveImage] = useState(galleryImages[0]);
  const [karat, setKarat] = useState("14K");
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="pdp-page">
      <div className="pdp-inner">
        {/* Breadcrumb */}
        <div className="pdp-breadcrumb">
          <span onClick={() => navigate("/")} className="pdp-breadcrumb-link">
            Home
          </span>
          <span className="pdp-breadcrumb-sep">&gt;</span>
          <span
            onClick={() => navigate("/shop")}
            className="pdp-breadcrumb-link"
          >
            Shop
          </span>
          <span className="pdp-breadcrumb-sep">&gt;</span>
          <span className="pdp-breadcrumb-current">{product.name}</span>
        </div>

        <div className="pdp-main">
          {/* Left: Gallery */}
          <div className="pdp-gallery">
            <div className="pdp-gallery-main">
              <img src={activeImage} alt={product.name} />
            </div>
            <div className="pdp-gallery-thumbs">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  className={`pdp-thumb ${activeImage === img ? "pdp-thumb-active" : ""}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="pdp-details">
            <h1 className="pdp-title">{product.name}</h1>
            <div className="pdp-price">{product.price}</div>

            <div className="pdp-meta-line pdp-availability">
              Availability: <span>In stock</span>
            </div>

            <div className="pdp-meta-line pdp-sku">
              Category: <span>{product.category}</span>
            </div>

            <p className="pdp-short-desc">
              Grace meets sparkle in this delicate design crafted in fine gold
              and diamonds. Perfect for both everyday wear and special
              occasions.
            </p>

            <div className="pdp-options">
              <div className="pdp-option">
                <label htmlFor="karat" className="pdp-label">
                  Select Karat
                </label>
                <select
                  id="karat"
                  className="pdp-select"
                  value={karat}
                  onChange={(e) => setKarat(e.target.value)}
                >
                  <option value="14K">14K</option>
                  <option value="18K">18K</option>
                  <option value="22K">22K</option>
                </select>
              </div>

              <div className="pdp-option">
                <label className="pdp-label">Quantity</label>
                <div className="pdp-qty">
                  <button type="button" onClick={decreaseQty}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={increaseQty}>
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="pdp-actions">
              <button type="button" className="pdp-btn primary">
                Add to Cart
              </button>
              <button type="button" className="pdp-btn secondary">
                Buy It Now
              </button>
            </div>

            <div className="pdp-extra-links">
              <button type="button" className="pdp-text-link">
                ❤ Add to wishlist
              </button>
              <button type="button" className="pdp-text-link">
                Size guide
              </button>
            </div>

            <div className="pdp-meta-grid">
              <div>
                <span className="pdp-meta-label">SKU:</span> TJP-001
              </div>
              <div>
                <span className="pdp-meta-label">Brand:</span> Seasworth Jewels
              </div>
            </div>
          </div>
        </div>

        {/* Lower section */}
        <div className="pdp-lower">
          <div className="pdp-description">
            <h2>Description</h2>
            <p>
              This elegant piece captures the essence of grace and
              sophistication. Crafted in fine gold, the design is enhanced with
              carefully set diamonds that reflect light from every angle,
              creating a soft yet radiant sparkle.
            </p>
            <p>
              Perfect for celebrations, intimate gatherings, or everyday luxury,
              this design is made to complement modern style while remaining
              timeless.
            </p>
          </div>

          <div className="pdp-reviews">
            <h2>Reviews</h2>
            <p>No reviews yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
