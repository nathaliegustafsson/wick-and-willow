function Contact() {
  return (
    <div className="contactContainer">
      <h2 className="contactTitle">Contact</h2>
      <div>
        <label>
          NAME
          <input name="name" />
        </label>
        <label>EMAIL</label>
        <input name="email" />
        <label>
          MESSAGE
          <textarea name="messageContent" rows={4} cols={40} />
        </label>
      </div>
    </div>
  );
}

export default Contact;
