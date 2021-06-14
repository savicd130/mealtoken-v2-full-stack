import React from "react";
import Newsletter from "../components/Newsletter";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";

export default function ContactScreen() {
  return (
    <>
      <Title title="contact us" />
      <div className="contact">
        <div className="contact__left">
          <h2>DROP US A LINE</h2>

          <ContactForm />
        </div>
        <div className="contact__right">
          <div className="contact__right-info">
            <h2>BROOKLIN</h2>
            <p>St Johns Pl/Nostrand Av, Brooklyn, USA</p>
            <p>+1 215 456 15 15</p>
            <strong>support@mealtoken.com</strong>
            <h2>WORKING HOURS</h2>
            <p>Monday – Friday from 8:00 am to 11:30 pm</p>
            <p>Weekends from 9:00 am to 11:00 pm</p>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}
