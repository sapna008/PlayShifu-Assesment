const Header = () => (
    <header className="header">
      <div className="left-section">
        <input type="text" placeholder="Search..." className="search-box" />
        <span className="flag">🇮🇳</span>
      </div>
      <div className="center-section">
        <img src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fbrand%2Fplayshifu-logo.webp&w=1080&q=75"/>
      </div>
      <div className="right-section">
        <span className="icon">🛒</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );

export default Header