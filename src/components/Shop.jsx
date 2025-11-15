import "../css/shop.css";

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

export default function Shop() {
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
            <div key={item.label} className="shop-category-card">
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
                className="shop-category-card"
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
    </div>
  );
}
