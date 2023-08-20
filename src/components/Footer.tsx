function Footer() {
  return (
    <div className="footerBigContainer">
      <div className="footerContainer">
        <div className="logoFooterContainer">
          <img className="logoFooter" src="./logoWide.png" alt="logoWide" />
        </div>
        <div className="footerLinksContainer">
          <div className="footerLinksLeft">
            <h4 style={{ fontWeight: '600', fontSize: '13px' }}>Company</h4>
            <p>About Us</p>
            <p>Career</p>
            <p>Our Products</p>
          </div>
          <div className="footerLinksRight">
            <h4 style={{ fontWeight: '600', fontSize: '13px' }}>Help</h4>
            <p>Contact</p>
            <p>My Account</p>
            <p>Our Stores</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
