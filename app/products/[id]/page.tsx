'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Heart,
  HelpCircle,
  Package,
  RotateCcw,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from 'lucide-react';
import { getProductById, getRelatedProducts, products } from '@/lib/products';
import { useCart } from '@/lib/cartContext';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ProductCard } from '@/components/ProductCard';
import { SizeGuideModal } from '@/components/SizeGuideModal';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'fabric' | 'shipping' | 'reviews'>('description');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <div className="product-page-root">
      <SiteHeader />

      <main className="product-page-main">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href={`/#${product.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
            {product.category}
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        {/* Product Details Section */}
        <div className="product-detail-layout">
          {/* Left Column: Image Gallery */}
          <div className="product-gallery">
            {/* Thumbnails list */}
            <div className="gallery-thumbnails">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  className={`thumb-btn ${selectedImage === idx ? 'is-active' : ''}`}
                  onClick={() => setSelectedImage(idx)}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>

            {/* Main Image Display */}
            <div className="gallery-main-wrap">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="gallery-main-img"
              />
              {product.discount && (
                <span className="gallery-badge-discount">{product.discount}</span>
              )}
              {product.badge && (
                <span className="gallery-badge-status">{product.badge}</span>
              )}
            </div>
          </div>

          {/* Right Column: Product Information & Purchase Form */}
          <div className="product-info-panel">
            <span className="product-info-category">{product.subcategory}</span>
            <h1 className="product-info-title">{product.name}</h1>

            <div className="product-meta-row">
              <div className="star-rating" title={`${product.rating} out of 5 stars`}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill={i < Math.floor(product.rating) ? '#171717' : 'none'}
                      stroke="#171717"
                    />
                  ))}
                </div>
                <span className="rating-score">{product.rating}</span>
                <span className="reviews-count">({product.reviewsCount} reviews)</span>
              </div>
              <span className="sku-code">SKU: {product.sku}</span>
            </div>

            {/* Price Box */}
            <div className="price-box">
              <span className="price-sale">{product.price}</span>
              <span className="price-compare">{product.oldPrice}</span>
              <span className="badge-save">SAVE 20%</span>
            </div>

            <div className="instalment-callout">
              Pay in 3 monthly instalments of <b>₹{Math.round(product.numericPrice / 3).toLocaleString()}</b> with <b>snapinpay</b>.
            </div>

            {/* Color Swatches */}
            <div className="option-section">
              <div className="option-header">
                <span className="option-title">Color:</span>
                <span className="option-selected-val">{selectedColor}</span>
              </div>
              <div className="color-swatches">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`swatch-btn ${selectedColor === color.name ? 'is-selected' : ''}`}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={`Select color ${color.name}`}
                    title={color.name}
                  >
                    <span className="swatch-color-circle" style={{ backgroundColor: color.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="option-section">
              <div className="option-header">
                <span className="option-title">Size:</span>
                <span className="option-selected-val">{selectedSize}</span>
                <button
                  type="button"
                  className="size-guide-trigger"
                  onClick={() => setSizeGuideOpen(true)}
                >
                  <HelpCircle size={13} /> Size Guide
                </button>
              </div>
              <div className="size-buttons">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size-btn ${selectedSize === size ? 'is-selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {product.stockCount <= 5 && (
                <span className="stock-alert">
                  🔥 Low Stock — Only {product.stockCount} left in your size!
                </span>
              )}
            </div>

            {/* Quantity and Action Buttons */}
            <div className="actions-section">
              <div className="quantity-stepper">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className={`btn-add-to-bag ${addedAnimation ? 'is-added' : ''}`}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={16} />
                <span>{addedAnimation ? 'Added to Bag!' : `Add to Bag • ${product.price}`}</span>
              </button>

              <button
                type="button"
                className={`btn-wishlist ${isWishlisted ? 'is-active' : ''}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                title="Wishlist"
              >
                <Heart size={18} fill={isWishlisted ? '#ec0101' : 'none'} color={isWishlisted ? '#ec0101' : 'currentColor'} />
              </button>
            </div>

            {/* Direct Buy Now Button */}
            <button
              type="button"
              className="btn-buy-now"
              onClick={() => {
                addToCart(product, quantity, selectedColor, selectedSize);
              }}
            >
              Buy It Now with 1-Click Checkout
            </button>

            {/* Trust Badges */}
            <div className="trust-badges-grid">
              <div className="trust-badge-item">
                <Truck size={16} />
                <div>
                  <strong>Free Express Delivery</strong>
                  <p>Dispatched in 24 hours nationwide</p>
                </div>
              </div>
              <div className="trust-badge-item">
                <RotateCcw size={16} />
                <div>
                  <strong>30-Day Easy Returns</strong>
                  <p>Hassle-free size exchange or refund</p>
                </div>
              </div>
              <div className="trust-badge-item">
                <ShieldCheck size={16} />
                <div>
                  <strong>100% Cotton Authenticity</strong>
                  <p>Equator certified luxury craftsmanship</p>
                </div>
              </div>
            </div>

            {/* Tabbed Product Details */}
            <div className="product-tabs">
              <div className="tab-headers">
                <button
                  className={`tab-btn ${activeTab === 'description' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Overview & Fit
                </button>
                <button
                  className={`tab-btn ${activeTab === 'fabric' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('fabric')}
                >
                  Fabric & Care
                </button>
                <button
                  className={`tab-btn ${activeTab === 'shipping' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('shipping')}
                >
                  Delivery & Returns
                </button>
                <button
                  className={`tab-btn ${activeTab === 'reviews' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews ({product.reviewsCount})
                </button>
              </div>

              <div className="tab-body">
                {activeTab === 'description' && (
                  <div className="tab-content">
                    <p>{product.description}</p>
                    <div className="fit-callout">
                      <strong>Fit & Silhouette:</strong>
                      <p>{product.fit}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'fabric' && (
                  <div className="tab-content">
                    <p><strong>Material:</strong> {product.fabric}</p>
                    <div className="care-instructions">
                      <strong>Garment Care:</strong>
                      <ul>
                        {product.care.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="tab-content">
                    <p>
                      We offer fast express shipping across all major cities. Standard transit time is 2 to 4 business days.
                    </p>
                    <ul>
                      <li>Free shipping on all orders over ₹3,000.</li>
                      <li>Cash on Delivery (COD) available nationwide.</li>
                      <li>Self-serve return portal available 24/7 within 30 days of receiving your order.</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="tab-content reviews-tab-content">
                    <div className="reviews-summary-card">
                      <div className="score-big">{product.rating}</div>
                      <div>
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={15} fill="#171717" stroke="#171717" />
                          ))}
                        </div>
                        <small>Based on {product.reviewsCount} customer reviews</small>
                      </div>
                    </div>

                    <div className="sample-reviews-list">
                      <div className="review-card">
                        <div className="review-header">
                          <span className="reviewer-name">Hamza R.</span>
                          <span className="review-verified"><Check size={11} /> Verified Buyer</span>
                        </div>
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} fill="#171717" stroke="#171717" />
                          ))}
                        </div>
                        <p className="review-text">
                          &quot;Exceptional fabric quality and fit! The stitching is top notch and it feels like a luxury bespoke piece. Will definitely order in other colors.&quot;
                        </p>
                        <span className="review-date">3 days ago</span>
                      </div>

                      <div className="review-card">
                        <div className="review-header">
                          <span className="reviewer-name">Saad K.</span>
                          <span className="review-verified"><Check size={11} /> Verified Buyer</span>
                        </div>
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} fill="#171717" stroke="#171717" />
                          ))}
                        </div>
                        <p className="review-text">
                          &quot;Delivery arrived within 48 hours. The size guide was spot-on. Extremely comfortable for all-day office and evening wear.&quot;
                        </p>
                        <span className="review-date">1 week ago</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Complete The Look / Related Products Rail */}
        <section className="related-products-section">
          <div className="section-heading">
            <h2>Complete the Look</h2>
            <Link href="/#new-in">
              Explore Collection <ArrowRight size={13} />
            </Link>
          </div>
          <div className="product-rail">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      </main>

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        category={product.category}
      />

      <SiteFooter />
    </div>
  );
}
