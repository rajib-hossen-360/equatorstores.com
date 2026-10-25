'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Pause, Play, Sparkles } from 'lucide-react';

interface HeroSlide {
  id: number;
  tag: string;
  season: string;
  title: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  desktopImage: string;
  mobileImage: string;
  imagePositionClass: string;
  alignment?: 'left' | 'center' | 'right';
}

const slides: HeroSlide[] = [
  {
    id: 1,
    tag: 'HERITAGE ALL-WEATHER',
    season: 'Limited Edition',
    title: 'OUTERWEAR ARCHIVE',
    titleLine1: 'OUTERWEAR',
    titleLine2: 'ARCHIVE',
    subtitle:
      'Weatherproof dry-wax field jackets, thermal 7-gauge merino knitwear, and technical storm layers crafted for rugged durability.',
    primaryCtaText: 'Explore Outerwear',
    primaryCtaLink: '/products/heritage-field-jacket',
    secondaryCtaText: 'View Lookbook',
    secondaryCtaLink: '/#collections',
    desktopImage: '/images/hero-outerwear-archive.jpg',
    mobileImage: '/images/hero-outerwear-mobile.jpg',
    imagePositionClass: 'pos-outerwear',
    alignment: 'left',
  },
  {
    id: 2,
    tag: 'THE EXECUTIVE EDIT',
    season: 'Formal Collection',
    title: 'BESPOKE TAILORING',
    titleLine1: 'BESPOKE',
    titleLine2: 'TAILORING',
    subtitle:
      'Fine Italian wool-blend blazers, 100-ply double twisted Egyptian cotton shirts, and structured trousers tailored for modern executives.',
    primaryCtaText: 'Shop Formal Wear',
    primaryCtaLink: '/#formal-wear',
    secondaryCtaText: 'Explore Blazers',
    secondaryCtaLink: '/products/tailored-formal-blazer',
    desktopImage: '/images/hero-bespoke-tailoring.jpg',
    mobileImage: '/images/hero-bespoke-mobile.jpg',
    imagePositionClass: 'pos-bespoke',
    alignment: 'left',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped Left -> Next
      nextSlide();
    } else if (diff < -50) {
      // Swiped Right -> Prev
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="hero-slider-container"
      id="top"
      aria-label="Equator Stores Featured Campaigns"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`hero-slide-item ${isActive ? 'is-active' : ''}`}
            aria-hidden={!isActive}
          >
            {/* Responsive Picture: Desktop vs Mobile Image */}
            <picture className="hero-slide-picture">
              <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
              <img
                src={slide.desktopImage}
                alt={`${slide.title} - ${slide.season} campaign`}
                className={`hero-slide-img ${slide.imagePositionClass}`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </picture>

            {/* Gradient Overlays for High Legibility */}
            <div className="hero-gradient-overlay" />
            <div className="hero-bottom-shade" />

            {/* Slide Content Box */}
            <div className="hero-slide-content-wrap">
              <div className={`hero-slide-content align-${slide.alignment || 'left'}`}>
                <div className="hero-badge-pill">
                  <span className="hero-badge-dot" />
                  <span className="hero-badge-tag">{slide.tag}</span>
                  <span className="hero-badge-sep">•</span>
                  <span className="hero-badge-season">{slide.season}</span>
                </div>

                <div className="hero-brand-subheading">webnibo</div>

                <h1 className="hero-slide-title">
                  <span className="hero-title-line">{slide.titleLine1}</span>
                  <span className="hero-title-line">{slide.titleLine2}</span>
                </h1>

                <p className="hero-slide-subtitle">{slide.subtitle}</p>

                <div className="hero-cta-buttons">
                  <Link href={slide.primaryCtaLink} className="hero-btn-primary">
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight size={14} className="hero-btn-icon" />
                  </Link>

                  <Link href={slide.secondaryCtaLink} className="hero-btn-secondary">
                    <span>{slide.secondaryCtaText}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Controls: Prev & Next Arrows */}
      <button
        type="button"
        className="hero-nav-arrow arrow-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
        title="Previous slide"
      >
        <ArrowLeft size={16} />
      </button>

      <button
        type="button"
        className="hero-nav-arrow arrow-next"
        onClick={nextSlide}
        aria-label="Next slide"
        title="Next slide"
      >
        <ArrowRight size={16} />
      </button>

      {/* Bottom Controls Bar: Slide Counter, Indicators & Play/Pause */}
      <div className="hero-bottom-controls">
        <div className="hero-slide-counter">
          <span className="counter-current">0{currentSlide + 1}</span>
          <span className="counter-divider">/</span>
          <span className="counter-total">0{slides.length}</span>
        </div>

        <div className="hero-indicators-list" role="tablist" aria-label="Slide Selection">
          {slides.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === currentSlide}
              aria-label={`Go to slide ${idx + 1}`}
              className={`hero-indicator-dot ${idx === currentSlide ? 'is-active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            >
              <span className="indicator-progress-bar" />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="hero-pause-toggle"
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
          title={isPaused ? 'Resume' : 'Pause'}
        >
          {isPaused ? <Play size={11} /> : <Pause size={11} />}
        </button>
      </div>
    </section>
  );
}
