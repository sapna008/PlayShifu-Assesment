import React from 'react';
import { Share2, Star, StarHalf } from 'lucide-react';

function ProductPage() {
  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="container">
          <div className="breadcrumbs">
            <a href="#" className="breadcrumb-link">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="#" className="breadcrumb-link">Shop</a>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">Junior Genius Pack</span>
          </div>
        </div>
      </nav>

      <main className="main-content container">
        <div className="product-grid">
          <div className="product-image-card">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-1.webp&w=640&q=100"
              alt="Junior Genius Pack"
              className="product-image"
            />
          </div>

          <div className="product-details">
            <div className="product-header">
              <h1 className="product-title">Junior Genius Pack</h1>
              <button className="share-btn" title="Share">
                <Share2 className="icon-share" />
              </button>
            </div>

            <div className="product-sublinks">
              <a href="#" className="sublink">Plugo Count</a>
              <span className="sublink-separator">&</span>
              <a href="#" className="sublink">Plugo Letters</a>
              <span className="sublink-separator">&</span>
              <a href="#" className="sublink">Plugo Link</a>
            </div>

            <div className="product-rating">
              <Star className="star-icon filled" />
              <Star className="star-icon filled" />
              <Star className="star-icon filled" />
              <Star className="star-icon filled" />
              <StarHalf className="star-icon half" /> 
            </div>

            <div className="product-tags">
              <span className="tag tag--educational">
                High Educational Value
              </span>
              <span className="tag tag--discount">
                Flat 25% off
              </span>
              <span className="tag tag--deal">
                Super Saver Deals
              </span>
            </div>

            <div className="price-section">
              <div className="price-display">
                <span className="price-current">₹3749</span>
                <span className="price-original">₹4999</span>
              </div>
            </div>

            <div className="product-features">
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                <p className="feature-text">
                  Plugo Count - An interactive math learning kit to master essential math skills, including addition, subtraction, multiplication, and division.
                </p>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                <p className="feature-text">
                  Plugo Letters - A letter toy that encourages children to spell using the toy to solve word puzzles on the screen.
                </p>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                <p className="feature-text">
                  Plugo Link - Build shapes using the magnetic tiles off-screen to solve puzzles on-screen!
                </p>
              </div>
            </div>

            <button className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;