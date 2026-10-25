'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { products } from '@/lib/products';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ProductCard } from '@/components/ProductCard';

const categoryCards = [
  {
    name: 'Sweatshirts & Hoodies',
    slug: 'sweatshirts',
    season: 'webnibo Winter / 26',
    count: '6 Products',
    image:
      'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    name: 'Sweaters & Knitwear',
    slug: 'sweaters-and-knitwear',
    season: 'webnibo Winter / 26',
    count: '6 Products',
    image:
      'https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    name: 'Formal Shirts & Suits',
    slug: 'formal-shirts-and-suits',
    season: 'webnibo Year Round',
    count: '6 Products',
    image:
      'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    name: 'Blazers & Tailoring',
    slug: 'blazers-and-tailoring',
    season: 'webnibo Winter / 26',
    count: '6 Products',
    image:
      'https://images.pexels.com/photos/9464234/pexels-photo-9464234.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
];

export default function CollectionsIndexPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filtered =
    selectedFilter === 'All'
      ? products
      : products.filter((p) => p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

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
          <span className="breadcrumb-current">All Collections</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="collections-index-hero">
        <div className="collections-index-hero-content">
          <span className="collections-season-tag">WEBNIBO EDITORIAL · 2026</span>
          <h1 className="collections-index-title">All Collections & Categories</h1>
          <p className="collections-index-desc">
            Explore our curated departments ranging from heavyweight fleece and merino knitwear to Italian tailoring and bespoke formal shirts.
          </p>
        </div>
      </section>

      {/* 4 Featured Category Cards Grid */}
      <section className="page-section category-section">
        <div className="section-heading-centered">
          <h2>SHOP BY CATEGORY</h2>
        </div>
        <div className="category-grid">
          {categoryCards.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className="category-card"
            >
              <img src={cat.image} alt={cat.name} />
              <div className="card-shade" />
              <div className="category-copy">
                <strong>{cat.name}</strong>
                <span>webnibo</span>
                <small>{cat.season}</small>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Full Catalog Section with Tabs */}
      <section className="page-section product-section" style={{ marginTop: '30px' }}>
        <div className="section-heading-with-tabs">
          <div className="section-title-wrap">
            <h2>Complete Product Catalog</h2>
            <p className="section-subtitle">
              Browse all items currently available across all seasonal drops.
            </p>
          </div>
          <div className="collection-tabs">
            {['All', 'Casual Wear', 'Formal Wear', 'Winter / Outerwear'].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`collection-tab-btn ${selectedFilter === tab ? 'is-active' : ''}`}
                onClick={() => setSelectedFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid-main">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="collection-footer-cta">
        <Link href="/" className="back-home-link">
          <ArrowLeft size={14} /> Back to Homepage
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
