import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="c-line"></div>
        <div className="c-left">
          <div className="c-title">Let's discuss your Project</div>
          <div className="c-icon">
            <img
              src="https://w7.pngwing.com/pngs/179/583/png-transparent-telephone-call-icon-phone-call-application-screenshot-blue-electronics-text.png"
              alt="phone"
            />
            <p>+91 8210941681</p>
          </div>
          <div className="c-icon">
            <img
              src="https://www.freepnglogos.com/uploads/email-png/mail-message-email-send-image-pixabay-5.png"
              alt="email"
            />
            <p>dks986786@gmail.com</p>
          </div>
          <div className="c-icon">
            <img
              src="https://www.freeiconspng.com/uploads/addressing-information--mecca-911-3.png"
              alt="address"
            />
            <p>Koramangla , Bengaluru ,India - 5600029</p>
          </div>
        </div>
        <div className="c-right">
          <p className="desc">
            <b>What's your story? </b>
            Get in touch. Always available for freelancing if right projet comes
            along me.
          </p>
          <form className="form">
            <input type="text" name="username" placeholder="Name" />
            <input type="text" name="subject" placeholder="Subject" />
            <input type="text" name="email" placeholder="Email" />
            <textarea
              name="description"
              cols="5"
              rows="5"
              placeholder="Description of project"
            ></textarea>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
