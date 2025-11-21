import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/shop.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { parsePrice, getSortedProducts } from "../utils/shopUtils";
import { categories, productMap } from "../utils/productData";

export default function Shop() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");
  const [activeCategory, setActiveCategory] = useState("Rings");
  const [viewMode, setViewMode] = useState("3"); // "3" or "4" columns
  const currentProducts = productMap[activeCategory] || ringProducts;
  const sortedProducts = getSortedProducts(currentProducts, sortBy);
  const productsRef = useRef([]);
  const categoriesStripRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

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

  const handleDragStart = (clientX) => {
    const strip = categoriesStripRef.current;
    if (!strip) return;
    isDraggingRef.current = true;
    startXRef.current = clientX - strip.offsetLeft;
    scrollLeftRef.current = strip.scrollLeft;
  };

  const handleDragMove = (clientX) => {
    if (!isDraggingRef.current) return;
    const strip = categoriesStripRef.current;
    if (!strip) return;
    const x = clientX - strip.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
    strip.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
  };

  const onMouseDown = (e) => {
    handleDragStart(e.clientX);
  };

  const onMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    handleDragMove(e.clientX);
  };

  const onMouseLeave = () => {
    handleDragEnd();
  };

  const onMouseUp = () => {
    handleDragEnd();
  };

  const onTouchStart = (e) => {
    if (!e.touches[0]) return;
    handleDragStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!e.touches[0]) return;
    handleDragMove(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  const scrollStripByDirection = (direction) => {
    const strip = categoriesStripRef.current;
    if (!strip) return;

    const firstCard = strip.querySelector(".shop-category-card");
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 24;
    const delta = direction === "right" ? cardWidth * 2 : -cardWidth * 2;
    const target = strip.scrollLeft + delta;

    gsap.to(strip, {
      scrollLeft: target,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const strip = categoriesStripRef.current;
    if (!strip) return undefined;

    const step = () => {
      const currentStrip = categoriesStripRef.current;
      if (!currentStrip) return;
      if (isDraggingRef.current) return;

      const firstCard = currentStrip.querySelector(".shop-category-card");
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth + 24;
      let target = currentStrip.scrollLeft + cardWidth * 2;
      const max = currentStrip.scrollWidth - currentStrip.clientWidth;

      if (target > max) {
        currentStrip.scrollLeft = 0;
        target = cardWidth * 2;
      }

      gsap.to(currentStrip, {
        scrollLeft: target,
        duration: 0.5,
        ease: "power3.out", // start fast, slow down at the end
      });
    };

    // 0.5s animation + ~1.5s pause between moves
    const intervalId = setInterval(step, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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

        {/* Mobile-only strip with drag-to-scroll */}
        <div
          className="shop-categories-strip"
          ref={categoriesStripRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
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
                aria-label="3 column view"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="5"
                    height="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="9.5"
                    y="4"
                    width="5"
                    height="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="16"
                    y="4"
                    width="5"
                    height="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="3"
                    y="13"
                    width="5"
                    height="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="9.5"
                    y="13"
                    width="5"
                    height="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="16"
                    y="13"
                    width="5"
                    height="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                className={`shop-view-icon ${
                  viewMode === "4" ? "shop-view-icon-active" : ""
                }`}
                onClick={() => setViewMode("4")}
                aria-label="4 column view"
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
              onClick={() => navigate(`/product/${product.id}`)}
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
                <button
                  type="button"
                  className="shop-product-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product.id}`);
                  }}
                >
                  VIEW DETAILS
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
