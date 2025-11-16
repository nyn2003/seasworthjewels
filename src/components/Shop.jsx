import { useState, useEffect, useRef } from "react";
import "../css/shop.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const categories = [
  {
    label: "Necklaces",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2023/02/Honey-Comb-Lace-Heart-Earrings-4.jpg",
  },
  {
    label: "Rings",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2023/02/Rose-Gold-Bracelet-4.jpg",
  },
  {
    label: "Bracelets",
    image: "https://tulsiyajewels.com/wp-content/uploads/2025/02/new11.png",
  },
  {
    label: "Earrings",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1.jpg",
  },
];

const braceletProducts = [
  {
    id: "1729",
    name: "Blush Bloom Rose Gold Diamond Bracelet",
    price: "₹38,450.00",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/69-325x325.jpg",
  },
  {
    id: "1744",
    name: "Celeste Whisper Bezel-Set Diamond Chain Bracelet",
    price: "₹42,990.25",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/69-325x325.jpg",
  },
  {
    id: "1780",
    name: "Elegant Emerald & Diamond Tennis Bracelet",
    price: "₹55,675.80",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/79-325x325.jpg",
  },
  {
    id: "1758",
    name: "Minimal Radiance Diamond Bar Necklace & Bracelet Set",
    price: "₹47,320.40",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/21-325x325.jpg",
  },
  {
    id: "1770",
    name: "Whispers of Gold – Diamond Bezel-Set Chain Bracelet",
    price: "₹41,885.10",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/62-325x325.jpg",
  },
];

const earringProducts = [
  {
    id: "1848",
    name: "Celestia Curve Solitaire Earrings",
    price: "₹29,750.00",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/108-325x325.jpg",
  },
  {
    id: "1896",
    name: "Emerald Cascade Drop Earrings",
    price: "₹33,420.35",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/25-325x325.jpg",
  },
  {
    id: "1908",
    name: "Floral Grace Pendant & Earrings Diamond Set",
    price: "₹69,977.50",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/31-325x325.jpg",
  },
  {
    id: "1875",
    name: "Gilded Frame Emerald-Cut Drop Earrings",
    price: "₹39,980.00",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/52-325x325.jpg",
  },
  {
    id: "1866",
    name: "Golden Drape Leaf-Drop Earrings",
    price: "₹31,640.75",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/06-325x325.jpg",
  },
  {
    id: "1887",
    name: "Linear Luxe Art Deco Earrings",
    price: "₹36,215.20",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/130-325x325.jpg",
  },
  {
    id: "1857",
    name: "Twilight Cascade Dual-Stone Earrings",
    price: "₹34,890.60",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/108-325x325.jpg",
  },
];

const ringProducts = [
  {
    id: "1532",
    name: "Azure Blossom Color Diamond Ring",
    price: "₹49,928.55",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/169A5175-325x325.jpg",
  },
  {
    id: "1613",
    name: "Celestial Swirl Diamond Ring",
    price: "₹48,893.86",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/57-325x325.jpg",
  },
  {
    id: "1624",
    name: "Crimson Grace Emerald-Cut Ring",
    price: "₹42,774.52",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/94-325x325.jpg",
  },
  {
    id: "1634",
    name: "Ember Kiss Halo Red Diamond Ring",
    price: "₹45,250.00",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/89-325x325.jpg",
  },
  {
    id: "1696",
    name: "Eternal Harmony Twin Pear Diamond Ring",
    price: "₹51,300.00",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/87-325x325.jpg",
  },
  {
    id: "1718",
    name: "Luxe Brilliance Baguette-Cut Diamond Statement Band",
    price: "₹55,900.00",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/89-325x325.jpg",
  },
  {
    id: "1643",
    name: "Majestic Brilliance Cushion-Cut Diamond Ring",
    price: "₹47,650.00",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/47-325x325.jpg",
  },
  {
    id: "1704",
    name: "Timeless Gleam Bezel-Set Diamond Band",
    price: "₹44,200.00",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/53-325x325.jpg",
  },
];

const necklaceProducts = [
  {
    id: "1828",
    name: "Crimson Bloom Diamond Necklace",
    price: "₹63,253.75",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/119-325x325.jpg",
  },
  {
    id: "1801",
    name: "Diamond Butterfly Pendant Necklace in Gold",
    price: "₹68,384.65",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/25-325x325.jpg",
  },
  {
    id: "1908",
    name: "Floral Grace Pendant & Earrings Diamond Set",
    price: "₹69,977.50",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/44-325x325.jpg",
  },
  {
    id: "1810",
    name: "Luxe Éclat Diamond Set",
    price: "₹48,172.13",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/20-325x325.jpg",
  },
  {
    id: "1790",
    name: "Rose Gold Leaf Pendant Necklace with Diamond Accents",
    price: "₹52,640.00",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/117-325x325.jpg",
  },
  {
    id: "1839",
    name: "Stellar Bloom Round Diamond Necklace Set",
    price: "₹57,310.40",
    image:
      "https://tulsiyajewels.com/wp-content/uploads/2025/07/34-325x325.jpg",
  },
];

function parsePrice(priceString) {
  if (!priceString) return 0;
  const numeric = priceString.replace(/[^0-9.]/g, "");
  return parseFloat(numeric) || 0;
}

function getSortedProducts(products, sortBy) {
  const base = [...products];

  if (sortBy === "price-low-high") {
    return base.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  }

  if (sortBy === "price-high-low") {
    return base.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  return base;
}

export default function Shop() {
  const [sortBy, setSortBy] = useState("default");
  const [activeCategory, setActiveCategory] = useState("Rings");
  const [viewMode, setViewMode] = useState("3"); // "3" or "4" columns
  const productMap = {
    Rings: ringProducts,
    Necklaces: necklaceProducts,
    Bracelets: braceletProducts,
    Earrings: earringProducts,
  };
  const currentProducts = productMap[activeCategory] || ringProducts;
  const sortedProducts = getSortedProducts(currentProducts, sortBy);
  const productsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    productsRef.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sortedProducts]);
  return (
    <div className="shop-page">
      {/* Hero banner */}
      <section className="shop-hero">
        <div className="shop-hero-overlay" />
        <div className="shop-hero-inner">
          <h1 className="shop-title">Shop</h1>
          <div className="shop-breadcrumb">Home &gt; Shop</div>
        </div>
      </section>

      {/* Categories section */}
      <section className="shop-categories-section">
        <div className="shop-categories-static">
          {categories.map((item) => (
            <div
              key={item.label}
              className={`shop-category-card ${
                activeCategory === item.label ? "shop-category-card-active" : ""
              }`}
              onClick={() => setActiveCategory(item.label)}
            >
              <div className="shop-category-image-wrap">
                <img
                  src={item.image}
                  alt={item.label}
                  className="shop-category-image"
                />
              </div>
              <div className="shop-category-label">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Mobile-only auto-scrolling strip */}
        <div className="shop-categories-strip">
          <div className="shop-categories-track">
            {[...categories, ...categories].map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className={`shop-category-card ${
                  activeCategory === item.label
                    ? "shop-category-card-active"
                    : ""
                }`}
                onClick={() => setActiveCategory(item.label)}
              >
                <div className="shop-category-image-wrap">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="shop-category-image"
                  />
                </div>
                <div className="shop-category-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shop-products-section">
        <div className="shop-products-header">
          <div className="shop-products-results">
            Showing {sortedProducts.length} results
          </div>
          <div className="shop-products-controls">
            <span className="shop-products-sort-label">Sort by</span>
            <select
              className="shop-products-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default sorting</option>
              <option value="price-low-high">Sort by price: low to high</option>
              <option value="price-high-low">Sort by price: high to low</option>
            </select>
            <div className="shop-products-view-icons">
              <button
                type="button"
                className={`shop-view-icon ${
                  viewMode === "3" ? "shop-view-icon-active" : ""
                }`}
                onClick={() => setViewMode("3")}
              >
                ▤
              </button>
              <button
                type="button"
                className={`shop-view-icon ${
                  viewMode === "4" ? "shop-view-icon-active" : ""
                }`}
                onClick={() => setViewMode("4")}
              >
                ▦
              </button>
            </div>
          </div>
        </div>

        <div
          className={`shop-products-grid ${
            viewMode === "4" ? "shop-products-grid-4" : ""
          }`}
        >
          {sortedProducts.map((product, index) => (
            <article
              key={product.id}
              className="shop-product-card"
              ref={(el) => {
                productsRef.current[index] = el;
              }}
            >
              <div className="shop-product-image-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="shop-product-image"
                />
              </div>
              <div className="shop-product-meta">
                <div className="shop-product-category">
                  {activeCategory.toUpperCase()}
                </div>
                <h3 className="shop-product-name">{product.name}</h3>
                <div className="shop-product-price">{product.price}</div>
                <button className="shop-product-button">ADD TO CART</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
