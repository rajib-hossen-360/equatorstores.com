'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import { products } from '@/lib/products';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ProductCard } from '@/components/ProductCard';

const heroImage =
  'https://images.pexels.com/photos/4611666/pexels-photo-4611666.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800';

const categoryItems = [
  {
    name: 'Sweatshirts',
    slug: 'sweatshirts',
    season: 'Winter / 26',
    filter: 'Winter / Outerwear',
    image:
      'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    name: 'Sweaters & Knitwear',
    slug: 'sweaters-and-knitwear',
    season: 'Winter / 26',
    filter: 'Winter / Outerwear',
    image:
      'https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    name: 'Formal Shirts & Suits',
    slug: 'formal-shirts-and-suits',
    season: 'Year Round',
    filter: 'Formal Wear',
    image:
      'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    name: 'Blazers & Tailoring',
    slug: 'blazers-and-tailoring',
    season: 'Winter / 26',
    filter: 'Formal Wear',
    image:
      'https://images.pexels.com/photos/9464234/pexels-photo-9464234.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
];

const stories = [
  'https://images.pexels.com/photos/36013228/pexels-photo-36013228.png?auto=compress&cs=tinysrgb&h=1000&w=750',
  'https://images.pexels.com/photos/35009242/pexels-photo-35009242.jpeg?auto=compress&cs=tinysrgb&h=1000&w=750',
  'https://images.pexels.com/photos/17459777/pexels-photo-17459777.jpeg?auto=compress&cs=tinysrgb&h=1000&w=750',
  'https://images.pexels.com/photos/4118957/pexels-photo-4118957.jpeg?auto=compress&cs=tinysrgb&h=1000&w=750',
  'https://images.pexels.com/photos/4862895/pexels-photo-4862895.jpeg?auto=compress&cs=tinysrgb&h=1000&w=750',
];

import { HeroSlider } from '@/components/HeroSlider';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const baseLayerProducts = products.filter((p) => p.category === 'Casual Wear' || p.category === 'Formal Wear');
  const winterProducts = products.filter((p) => p.category === 'Winter / Outerwear');

  const filteredCollection =
    selectedFilter === 'All'
      ? products
      : selectedFilter === 'New In'
      ? products.slice(0, 8)
      : products.filter((p) => p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <main className="home-wrapper">
      <SiteHeader />

      {/* Hero Editorial Campaign Slider */}
      <HeroSlider />

      {/* Shop By Category Grid */}
      <section className="page-section category-section" id="clothing">
        <div className="section-heading-centered">
          <h2>SHOP BY CATEGORY</h2>
          <Link href="/collections" className="section-heading-link">
            VIEW ALL COLLECTIONS <ArrowRight size={13} />
          </Link>
        </div>
        <div className="category-grid">
          {categoryItems.map((category) => (
            <Link
              href={`/collections/${category.slug}`}
              className="category-card"
              key={category.name}
            >
              <img src={category.image} alt={category.name} />
              <div className="card-shade" />
              <div className="category-copy">
                <strong>{category.name}</strong>
                <span>webnibo</span>
                <small>{category.season}</small>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive Filterable Collection Section */}
      <section className="page-section product-section" id="featured-collection">
        <div className="section-heading-with-tabs">
          <div className="section-title-wrap">
            <h2>Featured Collection</h2>
            <p className="section-subtitle">
              Click any product to explore detailed cuts, fabric specifications, and size charts.
            </p>
          </div>
          <div className="collection-tabs">
            {['All', 'Casual Wear', 'Formal Wear', 'Winter / Outerwear', 'New In'].map((tab) => (
              <button
                key={tab}
                className={`collection-tab-btn ${selectedFilter === tab ? 'is-active' : ''}`}
                onClick={() => setSelectedFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid-main">
          {filteredCollection.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Section 1: The Base Layer with Editorial Banner */}
      <section className="page-section product-section" id="casual-wear">
        <div className="section-heading">
          <h2>The Base Layer</h2>
          <a href="#featured-collection">
            Shop collection <ArrowRight size={13} />
          </a>
        </div>
        <div className="wide-editorial">
          <img
            src="https://images.pexels.com/photos/4611666/pexels-photo-4611666.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Neutral winter separates"
          />
          <div>
            <span>01 / 03 • Daily Wardrobe Architecture</span>
            <h3>Everyday, elevated.</h3>
          </div>
        </div>
        <div className="product-rail">
          {baseLayerProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Section 2: Winter Outerwear & Tailoring */}
      <section className="page-section product-section" id="winter-wear">
        <div className="section-heading">
          <h2>Now New — Winter &amp; Outerwear</h2>
          <a href="#featured-collection">
            Discover more <ArrowRight size={13} />
          </a>
        </div>
        <div className="wide-editorial editorial-second">
          <img
            src="https://images.pexels.com/photos/17459777/pexels-photo-17459777.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="New season city style"
          />
          <div>
            <span>New season / 26 • Thermal Insulation &amp; Tailoring</span>
            <h3>Move in your own rhythm.</h3>
          </div>
        </div>
        <div className="product-rail">
          {winterProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Outfit / Editorial Stories */}
      <section className="page-section outfit-section" id="collections">
        <div className="section-heading">
          <h2>Build Your Outfit</h2>
          <a href="#collections">
            The journal <ArrowRight size={13} />
          </a>
        </div>
        <div className="story-grid">
          {stories.map((story, index) => (
            <a href="#featured-collection" key={story} className={`story-image story-${index}`}>
              <img src={story} alt="webnibo journal story" />
              <span>
                {index === 1
                  ? 'Pleasures of summer'
                  : index === 2
                  ? 'The city edit'
                  : 'See the story'}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Store Location & Dummy Contact Information Section */}
      <section className="page-section contact-section" id="store-and-contact">
        <div className="section-heading">
          <h2>Store &amp; Contact Information</h2>
          <a href="mailto:support@webnibo.com">
            Send an inquiry <ArrowRight size={13} />
          </a>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <MapPin size={16} />
            </div>
            <h3>Flagship Store Location</h3>
            <p>
              124 Fashion Avenue, Suite 400
              <br />
              SoHo, New York, NY 10018, USA
            </p>
            <a
              href="https://maps.google.com/?q=SoHo+New+York+NY"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Get Directions →
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Clock size={16} />
            </div>
            <h3>Opening Hours</h3>
            <p>
              Monday – Saturday: 10:00 AM – 8:00 PM
              <br />
              Sunday: 11:00 AM – 6:00 PM (EST)
            </p>
            <span className="contact-badge">Open 7 Days</span>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Phone size={16} />
            </div>
            <h3>Phone Support</h3>
            <p>
              Toll-Free Customer Care:
              <br />
              <a href="tel:+18005550199" className="highlight-text">
                +1 (800) 555-0199
              </a>
            </p>
            <small>Mon–Fri: 9:00 AM – 6:00 PM EST</small>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Mail size={16} />
            </div>
            <h3>Email Support</h3>
            <p>
              Customer Inquiries &amp; Orders:
              <br />
              <a href="mailto:support@webnibo.com" className="highlight-text">
                support@webnibo.com
              </a>
            </p>
            <small>Guaranteed response within 24 hours</small>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
