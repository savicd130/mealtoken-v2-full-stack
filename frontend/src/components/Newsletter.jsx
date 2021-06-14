import React from "react";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="container-home">
        <div className="newsletter__box">
          <h6 className="newsletter__header">SUBSCRIBE FOR OUR NEWSLETTER</h6>
          <form className="newsletter__input">
            <input placeholder="Enter Your Email" type="email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
