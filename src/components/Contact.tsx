function Contact() {
  return (
    <div className="contactBigContainer">
      <div className="contactContainer">
        <h2 className="contactTitle">Contact</h2>
        <p className="contactText">
          Have a question, a suggestion, or just want to share your thoughts on
          the enchanting world of scented candles? We'd love to hear from you!
          At Wick & Willow, we're more than just a destination for exquisite
          candles - we're here to connect with fellow candle enthusiasts who
          understand the magic of candlelight and the serenity of nature. <br />{' '}
          <br />
          Feel free to drop us a line via the form below or connect with us
          through our social channels. Let's kindle conversations, illuminate
          spaces, and share the beauty of Wick & Willow together.
        </p>
        <div className="formContainer">
          <div className="nameAndEmailDiv">
            <label>
              NAME
              <input name="name" />
            </label>
            <label>
              EMAIL <input name="email" />
            </label>
          </div>
          <div className="messageDiv">
            <label>
              MESSAGE
              <textarea name="messageContent" rows={4} cols={40} />
            </label>
            <button className="submitBtn">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
