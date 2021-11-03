function Navbar() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="logo">
          <img src="assets/images/logo.png" className="img-logo" alt="logo" />
          <a href="/" className="nav-logo">
            Remind<span>me</span>
          </a>
        </div>
        <a href="/#" id="hamburger" className="hamburger">
          <img
            src="assets/images/hamburger.png"
            className="hamburger-icon"
            alt="hamburger"
          />
        </a>
        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link active-link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                {" "}
                Features{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                {" "}
                About Us{" "}
              </a>
            </li>
          </ul>
          <div className="nav-btn">
            <button className="nav-button">About App</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
