'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingBag,
  Trash2,
  UserRound,
  X,
} from 'lucide-react';
import { useCart } from '@/lib/cartContext';

export function SiteHeader() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistCount, setWishlistCount] = useState(0);

  const { cart, cartCount, isCartOpen, setIsCartOpen, removeFromCart, cartTotal } = useCart();

  const navigationCategories = [
    { name: 'New In', href: '/#new-in', badge: 'New' },
    { name: 'Sweatshirts & Hoodies', href: '/collections/sweatshirts' },
    { name: 'Sweaters & Knitwear', href: '/collections/sweaters-and-knitwear' },
    { name: 'Formal Shirts & Suits', href: '/collections/formal-shirts-and-suits' },
    { name: 'Blazers & Tailoring', href: '/collections/blazers-and-tailoring' },
    { name: 'Casual Wear', href: '/#casual-wear', sub: ['Cotton Chinos', 'Selvedge Denim', 'Linen Shirts'] },
    { name: 'All Collections', href: '/collections' },
    { name: 'Store & Contact', href: '/#store-and-contact' },
    { name: 'About Us', href: '/#about-us' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement">
        Shop Now, Pay in 3 Easy Instalments with <b>snapinpay</b> · Customer Care:{' '}
        <a href="tel:+18005550199">+1 (800) 555-0199</a> · Free Express Shipping on orders over ₹3,000
      </div>

      {/* Main Navbar */}
      <header className="site-header">
        {/* Left: Hamburger Menu */}
        <div className="header-left">
          <button
            type="button"
            className="menu-toggle-btn"
            aria-label="Open navigation menu"
            onClick={() => setSideMenuOpen(true)}
            title="Menu"
          >
            <Menu size={22} strokeWidth={1.6} />
          </button>
        </div>

        {/* Center: Brand Logo */}
        <div className="header-center">
          <Link href="/" className="site-logo-link" aria-label="webnibo home">
            <img src="/logo.png" alt="webnibo" className="site-logo" />
          </Link>
        </div>

        {/* Right: Actions (Search, Account, Wishlist with badge, Bag with badge) */}
        <div className="header-actions">
          <button
            type="button"
            className="header-action-btn"
            aria-label="Search collection"
            onClick={() => setSearchOpen(!searchOpen)}
            title="Search"
          >
            <Search size={19} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            className="header-action-btn"
            aria-label="My Account"
            title="Account"
          >
            <UserRound size={19} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            className="header-action-btn has-badge"
            aria-label={`Wishlist (${wishlistCount})`}
            title="Wishlist"
            onClick={() => alert('Wishlist is empty')}
          >
            <Heart size={19} strokeWidth={1.5} />
            <span className="action-badge">{wishlistCount}</span>
          </button>

          <button
            type="button"
            className="header-action-btn has-badge"
            aria-label={`Shopping bag (${cartCount})`}
            onClick={() => setIsCartOpen(true)}
            title="Shopping Bag"
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            <span className="action-badge">{cartCount}</span>
          </button>
        </div>
      </header>

      {/* Search Bar Overlay */}
      {searchOpen && (
        <div className="search-bar">
          <Search size={16} />
          <input
            autoFocus
            placeholder="Search shirts, trousers, jackets, chinos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={() => setSearchOpen(false)} aria-label="Close search">
            <X size={16} />
          </button>
        </div>
      )}

      {/* Side Navigation Drawer (Left) */}
      {sideMenuOpen && (
        <div className="side-menu-overlay" onClick={() => setSideMenuOpen(false)}>
          <div
            className="side-menu-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div className="side-menu-header">
              <Link href="/" onClick={() => setSideMenuOpen(false)} className="side-menu-logo">
                <img src="/logo.png" alt="webnibo" className="site-logo" />
              </Link>
              <button
                type="button"
                className="side-menu-close"
                onClick={() => setSideMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Quick Search in Drawer */}
            <div className="side-menu-search">
              <Search size={14} />
              <input
                type="text"
                placeholder="Search collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Navigation Category Links */}
            <nav className="side-menu-nav">
              {navigationCategories.map((item) => (
                <div key={item.name} className="side-nav-item-wrap">
                  <Link
                    href={item.href}
                    className="side-nav-link"
                    onClick={() => setSideMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.badge && <span className="side-nav-badge">{item.badge}</span>}
                    {item.sub && <ChevronRight size={14} className="side-nav-arrow" />}
                  </Link>
                  {item.sub && (
                    <div className="side-nav-sublist">
                      {item.sub.map((subItem) => (
                        <Link
                          key={subItem}
                          href={item.href}
                          className="side-nav-sublink"
                          onClick={() => setSideMenuOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Drawer Footer with Customer Service info */}
            <div className="side-menu-footer">
              <div className="side-contact-block">
                <div className="side-contact-item">
                  <Phone size={13} />
                  <a href="tel:+18005550199">+1 (800) 555-0199</a>
                </div>
                <div className="side-contact-item">
                  <Mail size={13} />
                  <a href="mailto:support@webnibo.com">support@webnibo.com</a>
                </div>
                <div className="side-contact-item">
                  <MapPin size={13} />
                  <span>SoHo Flagship Store, New York</span>
                </div>
              </div>

              <div className="side-drawer-footnote">
                <span>© 2026 webnibo • Everyday Essentials</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Side Cart Drawer (Right) */}
      {isCartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div
            className="cart-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Your Shopping Bag"
          >
            <div className="cart-drawer-header">
              <h3>Shopping Bag ({cartCount})</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="cart-drawer-close"
                aria-label="Close bag"
              >
                <X size={18} />
              </button>
            </div>

            {/* Free shipping bar */}
            <div className="free-shipping-bar">
              {cartTotal >= 3000 ? (
                <p className="shipping-qualified">🎉 You have unlocked <b>FREE Express Shipping</b>!</p>
              ) : (
                <p>
                  Add <b>₹{3000 - cartTotal}</b> more to get <b>FREE Shipping</b>!
                </p>
              )}
              <div className="shipping-progress-track">
                <div
                  className="shipping-progress-fill"
                  style={{ width: `${Math.min(100, (cartTotal / 3000) * 100)}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="cart-drawer-items">
              {cart.length === 0 ? (
                <div className="empty-cart-state">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p>Your shopping bag is currently empty.</p>
                  <Link
                    href="/#new-in"
                    className="btn-primary"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Explore New Arrivals
                  </Link>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div className="cart-item" key={`${item.product.id}-${item.selectedSize}-${index}`}>
                    <Link
                      href={`/products/${item.product.id}`}
                      onClick={() => setIsCartOpen(false)}
                      className="cart-item-image-wrap"
                    >
                      <img src={item.product.images[0]} alt={item.product.name} />
                    </Link>
                    <div className="cart-item-info">
                      <Link
                        href={`/products/${item.product.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="cart-item-title"
                      >
                        {item.product.name}
                      </Link>
                      <div className="cart-item-meta">
                        <span>Color: {item.selectedColor}</span> · <span>Size: {item.selectedSize}</span>
                      </div>
                      <div className="cart-item-price-row">
                        <span className="cart-item-price">{item.product.price}</span>
                        <span className="cart-item-qty">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <button
                      className="cart-item-remove"
                      aria-label="Remove item"
                      onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Drawer Footer */}
            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-subtotal-row">
                  <span>Subtotal</span>
                  <strong>₹{cartTotal.toLocaleString()}</strong>
                </div>
                <small className="cart-tax-notice">Taxes and shipping calculated at checkout.</small>
                <button
                  className="btn-checkout"
                  onClick={() => alert('Proceeding to Checkout with Snapinpay / Card...')}
                >
                  Proceed to Checkout · ₹{cartTotal.toLocaleString()}
                </button>
                <button
                  className="btn-continue-shopping"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
