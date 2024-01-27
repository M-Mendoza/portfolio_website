import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/telephone.png";
import Email from "../../img/mail.png";
import LinkedIn from "../../img/linkedin.png";
import emailjs from "@emailjs/browser";
import Alerts from "../alerts/Alerts";

const Contact = () => {
  const formRef = useRef();
  const [showBanner, setShowBanner] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current && formRef.current.elements) {
      const name = formRef.current.elements.user_name.value;
      const subject = formRef.current.elements.user_subject.value;
      const email = formRef.current.elements.user_email.value;
      const message = formRef.current.elements.message.value;

      if (!name || !subject || !email || !message) {
        setShowBanner(true);
        setIsSuccessful(false);

        setTimeout(() => {
          setShowBanner(false);
        }, 5000);
      } else {
        emailjs
          .sendForm(
            "service_md147x5",
            "template_cqsscfo",
            formRef.current,
            "WrQUrxQGYIViMf3KN"
          )
          .then(
            (result) => {
              setIsSuccessful(true);
              setShowBanner(true);

              formRef.current.reset();

              setTimeout(() => {
                setShowBanner(false);
              }, 5000);
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    }
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              (403) 390 - 0551
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              mark.mendoza89@icloud.com
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/mark-mendoza-dev/">
                <img src={LinkedIn} alt="" className="c-icon" />
              </a>
              <a href="https://www.linkedin.com/in/mark-mendoza-dev/">
                Mark Mendoza
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <span>Emabrk on a Journey with Me:</span> Discover a dedicated
            professtional eager to enhance your team. Available for freelance
            work, I'm just a message away!
          </p>
          <Alerts show={showBanner} success={isSuccessful} />
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea name="message" placeholder="Message" rows="5"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
