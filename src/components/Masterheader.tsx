import '../css/1 - desktop.css';
import '../css/2 - tablet.css';
import '../css/3 - mobile.css';

function Masterheader() {
  return (
    <div className="MasterHeader">
      <div className="MHbackground">
        <div className="MHtextContainer">
          <h1 className="titleMH">BLOMUS</h1>
          <p className="underTitleMH">NEW COLLABORATION WITH BLOMUS</p>
        </div>
        <div className="shopLink">
          <img src="arrow.png" alt="arrow" style={{ height: '10px' }} />
          <p className='shopAllLink'>SHOP ALL</p>
        </div>
      </div>
    </div>
  );
}

export default Masterheader;
