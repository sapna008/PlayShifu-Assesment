const Navbar = () => (
    <nav className="navbar">
      <select className="dropdown"><option>Shop by Category</option></select>
      <select className="dropdown"><option>Shop by Age</option></select>
      <button className="nav-item">Super Saver Deals</button>
      <button className="nav-item">Birthday Gifts</button>
      <button className="nav-item">Show All</button>
      <select className="dropdown"><option>More</option></select>
    </nav>
  );

export default Navbar;