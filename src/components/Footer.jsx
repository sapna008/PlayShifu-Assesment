import React from 'react';
import {
  FaShippingFast, FaUndoAlt, FaCheckCircle, FaLock,
  FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube,
  FaWhatsapp, FaApplePay, FaCcMastercard, FaCcVisa, FaGooglePay
} from 'react-icons/fa'; // Import icons

const Footer = () => {
  const perks = [
    { icon: <FaShippingFast />, text: 'Free Shipping' },
    { icon: <FaUndoAlt />, text: '30 Days Return' },
    { icon: <FaCheckCircle />, text: '6 Months Warranty' },
    { icon: <FaLock />, text: 'Secure Checkout' },
  ];

  const shopLinks = [
    { name: 'Problem Solving Toys', href: '#' },
    { name: 'Stem Toys', href: '#' },
    { name: 'Social & Emotional Development Toys', href: '#' },
    { name: 'Birthday Gift Toys', href: '#' },
    { name: 'Super Saver Deals', href: '#' },
    { name: 'Best Seller Toys', href: '#' },
  ];

  const moreLinks = [
    { name: 'Device Compatability', href: '#' },
    { name: 'Free-E-Books', href: '#' },
    { name: 'Parent Hub', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'About Us', href: '#' },
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  ];

  const paymentIcons = [
    { icon: <FaApplePay />, label: 'Apple Pay' },
    { icon: <FaCcMastercard />, label: 'Mastercard' },
    { icon: <FaCcVisa />, label: 'Visa' },
    { icon: <FaGooglePay />, label: 'Google Pay' },
  ];

  return (
    // Use standard className prop with descriptive names
    <footer className="footer-container">
      {/* Perks Section */}
      <div className="footer-perksContainer">
        {perks.map((perk, index) => (
          <div key={index} className="footer-perkItem">
            <span className="footer-perkIcon">{perk.icon}</span>
            <span>{perk.text}</span>
          </div>
        ))}
      </div>

       <hr className="footer-divider" />

      {/* Main Footer Content */}
      <div className="footer-mainContent">
        {/* Column 1: Newsletter/Community */}
        <div className="footer-column footer-communityColumn">
          <p>
            Get notified of new launches, product updates, contests, and
            more exciting news!
          </p>
          <button className="footer-whatsappButton">
            Join our WhatsApp Community
          </button>
        </div>

        {/* Column 2: Shop */}
        <div className="footer-column">
          <h4>Shop</h4>
          <ul>
            {shopLinks.map((link, index) => (
              <li key={index}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3: More */}
        <div className="footer-column">
          <h4>More</h4>
          <ul>
            {moreLinks.map((link, index) => (
              <li key={index}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 4: Support */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            {supportLinks.map((link, index) => (
              <li key={index}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottomBar">
        <div className="footer-socialIcons">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
        <div className="footer-copyright">
          © 2025 PlayShifu.com
        </div>
        <div className="footer-paymentIcons">
          {paymentIcons.map((payment, index) => (
            <span key={index} className="footer-paymentIcon" aria-label={payment.label}>
                {payment.icon}
            </span>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="#" className="footer-floatingWhatsapp" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;