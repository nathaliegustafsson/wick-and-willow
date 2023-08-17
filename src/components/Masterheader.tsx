import candleimage from '../assets/candlespic.jpeg';

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
        NEW COLLABORATION WITH BLOMUS
      </p>
      <div
        style={{
          backgroundImage: `url(${candleimage})`,
          height: '800px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginLeft: '120px',
          marginRight: '120px',
        }}
      ></div>
    </div>
  );
}

export default Masterheader;
