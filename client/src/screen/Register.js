import React from "react";
import TedxDWITLogo from "../asset/logo-white.png";
import "../App.css";
import { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // phonenumber must be a number
    if (isNaN(phoneNumber)) {
      alert("Phone number must be a number.");
      return;
    }

    // Phone number validation: must be 10 digits
    if (phoneNumber.length !== 10) {
      alert("Phone number must be 10 digits.");

      // make sure it starts with 9

      if (phoneNumber[0] !== "9") {
        alert("Phone number must start with 9.");
        return;
      }

      return;
    }

    const data = {
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      address,
    };
    console.log(data);

    fetch("http://localhost:5000/api/v1/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        document.body.style.backgroundColor = "black";
        document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top: 20rem;'>You have been registered !</h1> <br/> <p style='text-align:center;margin-top:0.6rem;'>We will contact you shortly following ticket details.</p>";
      } else {
        alert("Something went wrong. Please try again later.");
      }
    });
  };
  return (
    <div>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1
            style={{
              margin: "2rem 0rem",
            }}
          >
            From Ideas To Impact
          </h1>
          <h2>
            <span style={{ color: "#E60027" }}>
              September 30 <sup>th</sup>
            </span>{" "}
            | DWIT College
          </h2>
        </div>
        <div style={{ display: "flex", width: "50%", marginTop: "1rem", marginBottom: ".25rem" }}>
          <img src={TedxDWITLogo} width='50%' height='50%' />
        </div>
      </header>
      <form>
        <div>
          <h3
            style={{
              fontSize: ".9rem",
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              width: "45%",
              marginBottom: "15px",
            }}
          >
            Let's start with your contact details. *{" "}
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "45%",
              margin: "auto",
            }}
          >
            <input type='text' placeholder='First Name' className='input-field' required onChange={(e) => setFirstName(e.target.value)} />
            <input type='text' placeholder='Middle Name' className='input-field' onChange={(e) => setMiddleName(e.target.value)} />
            <input type='text' placeholder='Last Name' className='input-field' required onChange={(e) => setLastName(e.target.value)} />
            <input type='email' placeholder='Email' className='input-field' required onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Phone Number' className='input-field' required onChange={(e) => setPhoneNumber(e.target.value)} />
            <input type='text' placeholder='Address' className='input-field' required onChange={(e) => setAddress(e.target.value)} />

            <input
              className='submit'
              style={{
                border: "none",
                outine: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
              onClick={handleSubmit}
              value='Submit'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
