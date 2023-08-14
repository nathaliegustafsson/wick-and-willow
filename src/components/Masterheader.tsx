function Masterheader() {
  return (
    <div>
      <h1
        style={{
          position: 'absolute',
          left: '20%',
          top: '40%',
          zIndex: 5,
          fontFamily: 'Playfair Display',
          fontWeight: '200',
          fontSize: '60px',
        }}
      >
        BLOMUS
      </h1>
      <p
        style={{
          position: 'absolute',
          left: '20%',
          top: '56%',
          zIndex: 5,
          fontFamily: 'Poppins',
          fontWeight: '400',
          fontSize: '18px',
        }}
      >
        NEW COLLABORATION WTH BLOMUS
      </p>
      <div>
        <img
          src="candlespic.jpeg"
          alt="candels"
          style={{
            width: '80%',
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
          }}
        />
      </div>
    </div>
  );
}

export default Masterheader;
