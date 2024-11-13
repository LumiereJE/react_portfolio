import React, { useRef } from "react";
import Main from "../components/section/Main";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oka7xr8", "template_e8oj7yr", form.current, {
        publicKey: "L-cte5N3z5wyrVxTk",
      })
      .then(
        () => {
          console.log("SEND MASSAGE - SUCCESS!");
          alert("메일이 성공적으로 전송되었습니다. 감사합니다.");
          form.current.reset();
        },
        (error) => {
          console.log("SEND MASSAGE - FAILED...", error.text);
          alert("메일 전송에 실패했습니다.");
        }
      );
  };

  return (
    <Main title="Jieun's Contact" description="react로 만들어진 페이지 입니다.">
      <section>
        <h2>Contact</h2>

        <form ref={form} onSubmit={sendEmail}>
          <div className="input_box">
            <label for="name">user_name : </label>
            <input
              type="text"
              name="from_name"
              id="name"
              className="input_line"
            />
          </div>
          <div className="input_box">
            <label for="email">user_email : </label>
            <input
              type="email"
              name="from_email"
              id="email"
              className="input_line"
            />
          </div>
          <div className="input_box">
            <textarea name="message" placeholder="message_" />
          </div>
          <div className="input_box">
            <input type="submit" value="submit" className="send_btn" />
          </div>
        </form>
      </section>
    </Main>
  );
};

export default Contact;
