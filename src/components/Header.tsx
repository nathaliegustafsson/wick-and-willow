function Header() {
  return (
    <div
      style={{
        // backgroundColor: 'lightblue',
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        paddingRight: '20px',
        paddingLeft: '20px',
      }}
    >
      <div style={{ flexGrow: 1 }}>
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
            }}
          >
            Home
          </li>
          <li style={{ fontFamily: 'Playfair Display', fontSize: '22px' }}>
            Products
          </li>
        </ul>
      </div>

      <div style={{ flexGrow: 2, display: 'flex', justifyContent: 'center' }}>
        <img src="logga.png" alt="logga" style={{ height: '140px' }} />
      </div>

      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '50px', fontWeight: 200, marginRight: '10px' }}
        >
          person
        </span>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '50px', fontWeight: 200 }}
        >
          shopping_bag
        </span>
      </div>
    </div>
  );
}

export default Header;
