function Products() {
  return (
    <div className="productsBigContainer">
      <h2 className="productsContainerTitle">New in selection of candels</h2>
      <div className="productsContainer">
        <div className="products">
          <div className="product1-2">
            <div className="product1">
              <img
                className="productImg"
                src="./greycandle.webp"
                alt="sandalwoodMyrrh"
              />
              <h4 className="productTitle">SANDALWOOD MYRRH</h4>
              <p className="price">200 SEK</p>
              <button>ADD TO CART</button>
            </div>
            <div className="product2">
              <img
                className="productImg"
                src="./bluecandle.webp"
                alt="basilBergamott"
              />
              <h4 className="productTitle">BASIL & BERGAMOTT</h4>
              <p className="price">200 SEK</p>
              <button>ADD TO CART</button>
            </div>
          </div>
          <div className="product3-4">
            <div className="product3">
              <img className="productImg" src="./candlepink.webp" alt="fig" />
              <h4 className="productTitle">FIG</h4>
              <p className="price">200 SEK</p>
              <button>ADD TO CART</button>
            </div>
            <div className="product4">
              <img
                className="productImg"
                src="./candleburgundy.webp"
                alt="cinnamonApple"
              />
              <h4 className="productTitle">CINNAMON & APPLE</h4>
              <p className="price">200 SEK</p>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
