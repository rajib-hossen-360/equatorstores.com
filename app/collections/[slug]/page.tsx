'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ChevronRight, SlidersHorizontal, Sparkles } from 'lucide-react';
import {
  collections,
  getCollectionBySlug,
  getProductsByCollection,
  products,
} from '@/lib/products';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ProductCard } from '@/components/ProductCard';

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = params;
  const collectionInfo = getCollectionBySlug(slug);

  // Fallback title / metadata if not directly in collections dictionary
  const title = collectionInfo?.name || slug.replace(/-/g, ' ').toUpperCase();
  const season = collectionInfo?.season || 'webnibo Collection';
  const description =
    collectionInfo?.description ||
    'Explore webnibo’s curated edit of modern tailoring, signature fabrics, and refined menswear crafted for elevated everyday dressing.';
  const bannerImage =
    collectionInfo?.bannerImage ||
    'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

  const rawProducts = useMemo(() => getProductsByCollection(slug), [slug]);

  // Interactive filters and sorting
  const [selectedSort, setSelectedSort] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'>('featured');
  const [selectedSize, setSelectedSize] = useState<string>('All');

  // Available sizes across this collection
  const allSizes = useMemo(() => {
    const sizeSet = new Set<string>();
    rawProducts.forEach((p) => p.sizes.forEach((s) => sizeSet.add(s)));
    return ['All', ...Array.from(sizeSet)];
  }, [rawProducts]);

  // Filtered and sorted products
  const displayProducts = useMemo(() => {
    let result = [...rawProducts];

    if (selectedSize !== 'All') {
      result = result.filter((p) => p.sizes.includes(selectedSize));
    }

    if (selectedSort === 'price-asc') {
      result.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (selectedSort === 'price-desc') {
      result.sort((a, b) => b.numericPrice - a.numericPrice);
    } else if (selectedSort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === 'newest') {
      result.reverse();
    }

    return result;
  }, [rawProducts, selectedSize, selectedSort]);

  // Other collection links for quick browsing
  const allCategoryTabs = [
    { name: 'Sweatshirts', slug: 'sweatshirts' },
    { name: 'Sweaters & Knitwear', slug: 'sweaters-and-knitwear' },
    { name: 'Formal Shirts & Suits', slug: 'formal-shirts-and-suits' },
    { name: 'Blazers & Tailoring', slug: 'blazers-and-tailoring' },
  ];

  return (
    <main className="collection-page-wrapper">
      <SiteHeader />

      {/* Breadcrumb Bar */}
      <nav className="collection-breadcrumbs" aria-label="Breadcrumb">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
          <ChevronRight size={12} className="breadcrumb-sep" />
          <Link href="/collections" className="breadcrumb-link">
            Collections
          </Link>
          <ChevronRight size={12} className="breadcrumb-sep" />
          <span className="breadcrumb-current">{title}</span>
        </div>
      </nav>

      {/* Collection Hero Banner */}
      <section className="collection-hero">
        <img
          src={bannerImage}
          alt={title}
          className="collection-hero-img"
        />
        <div className="collection-hero-overlay" />
        <div className="collection-hero-content">
          <span className="collection-hero-season">{season}</span>
          <h1 className="collection-hero-title">{title}</h1>
          <p className="collection-hero-desc">{description}</p>
        </div>
      </section>

      {/* Category Pills Navigation */}
      <div className="collection-pills-bar">
        <div className="collection-pills-container">
          {allCategoryTabs.map((tab) => {
            const isActive = tab.slug === slug;
            return (
              <Link
                key={tab.slug}
                href={`/collections/${tab.slug}`}
                className={`collection-pill-btn ${isActive ? 'is-active' : ''}`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Filter & Control Toolbar */}
      <section className="collection-toolbar-section">
        <div className="collection-toolbar">
          <div className="toolbar-left">
            <span className="product-count-label">
              Showing <strong>{displayProducts.length}</strong> {displayProducts.length === 1 ? 'product' : 'products'}
            </span>
          </div>

          <div className="toolbar-right">
            {/* Size Filter */}
            {allSizes.length > 2 && (
              <div className="filter-group size-filter-group">
                <span className="filter-label">Size:</span>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="collection-select"
                >
                  {allSizes.map((sz) => (
                    <option key={sz} value={sz}>
                      {sz === 'All' ? 'All Sizes' : `Size ${sz}`}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Sort Dropdown */}
            <div className="filter-group sort-filter-group">
              <span className="filter-label">Sort:</span>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value as any)}
                className="collection-select"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">New In</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="collection-grid-section">
        <div className="collection-grid-container">
          {displayProducts.length > 0 ? (
            <div className="product-grid-main">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="collection-empty-state">
              <Sparkles size={36} strokeWidth={1.2} />
              <h3>No items match the selected filters</h3>
              <p>Try resetting size or explore other categories from our collection.</p>
              <button
                type="button"
                className="reset-filter-btn"
                onClick={() => {
                  setSelectedSize('All');
                  setSelectedSort('featured');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Back to Home / Explore More Bar */}
      <section className="collection-footer-cta">
        <Link href="/" className="back-home-link">
          <ArrowLeft size={14} /> Back to Homepage
        </Link>
        <Link href="/#featured-collection" className="all-items-link">
          Explore All Categories <ArrowRight size={14} />
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
