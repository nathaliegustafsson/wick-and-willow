
function Header() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '120px',
        marginRight: '120px',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <div>
        <ul
          style={{
            listStyleType: 'none',
            display: 'flex',
            gap: '30px',
            margin: 0,
            padding: 0,
          }}
        >
          <li
            style={{
              fontFamily: 'Playfair Display',
              fontSize: '22px',
              cursor: 'pointer',
            }}
          >
            Home
          </li>
          <li
            style={{
              fontFamily: 'Playfair Display',
              fontSize: '22px',
              cursor: 'pointer',
            }}
          >
            Products
          </li>
        </ul>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="logga.png" alt="logga" style={{ height: '140px' }} />
      </div>

      <div style={{ display: 'flex' }}>
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: '50px',
            fontWeight: 200,
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          person
        </span>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '50px', fontWeight: 200, cursor: 'pointer' }}
        >
          shopping_bag
        </span>
      </div>
    </div>
  );
}

export default Header;
