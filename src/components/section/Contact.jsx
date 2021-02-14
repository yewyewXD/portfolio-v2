/* eslint-disable */

import React, { useState, useRef } from "react";

export default function Contact() {
  const [emailErr, setEmailErr] = useState(null);
  const [nameErr, setNameErr] = useState(null);
  const [msgErr, setMsgErr] = useState(null);
  const nameElRef = useRef();
  const emailElRef = useRef();
  const messageElRef = useRef();

  async function handleContactSubmit(e) {
    e.preventDefault();

    // Initialize
    if (emailErr || nameErr || msgErr) {
      setNameErr(null);
      setEmailErr(null);
      setMsgErr(null);
    }
    const name = nameElRef.current.value;
    const email = emailElRef.current.value;
    const message = messageElRef.current.value;

    // Validation
    if (formValidation(name, email, message)) {
      document.getElementById("contactForm").submit();
    }
  }

  function formValidation(name, email, message) {
    let validationErrCount = 0;
    if (!name) {
      setNameErr("Please fill in this field");
      validationErrCount++;
    }

    if (!message) {
      setMsgErr("Please fill in this field");
      validationErrCount++;
    }

    if (!email) {
      setEmailErr("Please fill in this field");
      validationErrCount++;
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailErr("Please use a valid email");
      validationErrCount++;
    }

    return validationErrCount === 0;
  }

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container my-sm-5 my-3">
        <h1 className="mb-5 text-sm-left text-center">Get in touch with me</h1>
        <form
          id="contactForm"
          name="contact"
          onSubmit={handleContactSubmit}
          data-aos="fade-in"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="name">
              <b>Name:</b>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className={`form-control border ${nameErr && "border-danger"}`}
              ref={nameElRef}
            />
            {nameErr && <small className="text-danger">{nameErr}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className={`form-control border ${emailErr && "border-danger"}`}
              ref={emailElRef}
            />
            {emailErr && <small className="text-danger">{emailErr}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <b>Message:</b>
            </label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              className={`form-control border ${msgErr && "border-danger"}`}
              ref={messageElRef}
            ></textarea>
            {msgErr && <small className="text-danger">{msgErr}</small>}
          </div>

          <button
            type="submit"
            className="btn btn-md btn-primary contact-btn w-100 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
