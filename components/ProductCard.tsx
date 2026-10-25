'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <article className="product-card">
      <Link href={`/products/${product.id}`} className="product-card-link">
        <div className="product-image-wrap">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image primary-img"
            loading="lazy"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className="product-image secondary-img"
              loading="lazy"
            />
          )}

          {/* Badges */}
          <div className="product-badges">
            {product.discount && <span className="discount">{product.discount}</span>}
            {product.badge && <span className="custom-badge">{product.badge}</span>}
          </div>

          {/* Quick Add Button */}
          <button
            className="quick-add"
            aria-label={`Quick add ${product.name} to bag`}
            title="Quick Add to Bag"
            onClick={handleQuickAdd}
          >
            <span>+</span>
          </button>
        </div>

        <div className="product-copy">
          <span className="product-category-label">{product.subcategory}</span>
          <h3 className="product-title">{product.name}</h3>

          <div className="product-price-row">
            <span className="price-old">{product.oldPrice}</span>
            <span className="price-current">{product.price}</span>
          </div>

          {/* Color Preview Dots */}
          {product.colors && product.colors.length > 0 && (
            <div className="color-dots-preview">
              {product.colors.slice(0, 4).map((c) => (
                <span
                  key={c.name}
                  className="color-dot"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="color-more">+{product.colors.length - 4}</span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
