import '../css/desktop.css';
import '../css/mobile.css';
import '../css/tablet.css';

function Header() {
  return (
    <div className="headerContainer">
      <div>
        <div className="hamburgermenu">
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '40px',
              fontWeight: 200,
              marginRight: '10px',
              cursor: 'pointer',
            }}
          >
            menu
          </span>
        </div>
        <ul className="ulLinks">
          <li className="linksHeader">Home</li>
          <li className="linksHeader">Products</li>
        </ul>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img className="logo" src="logga.png" alt="logga" />
      </div>

      <div style={{ display: 'flex' }}>
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: '45px',
            fontWeight: 200,
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          person
        </span>
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: '41px',
            fontWeight: 200,
            cursor: 'pointer',
          }}
        >
          shopping_bag
        </span>
      </div>
    </div>
  );
}

export default Header;
