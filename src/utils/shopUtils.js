export function parsePrice(priceString) {
  if (!priceString) return 0;
  const numeric = priceString.replace(/[^0-9.]/g, "");
  return parseFloat(numeric) || 0;
}

export function getSortedProducts(products, sortBy) {
  const base = [...products];

  if (sortBy === "price-low-high") {
    return base.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  }

  if (sortBy === "price-high-low") {
    return base.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  return base;
}
