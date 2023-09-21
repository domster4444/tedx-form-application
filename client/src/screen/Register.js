import React from "react";
import TedxDWITLogo from "../asset/logo-white.png";
import RegisterQR from "../asset/Register QR.png";
import "../App.css";
import { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [receipt, setRecipt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    // phonenumber must be a number
    if (isNaN(phoneNumber)) {
      alert("Phone number must be a number.");
      setIsLoading(false);
      return;
    }

    // Phone number validation: must be 10 digits
    if (phoneNumber.length !== 10) {
      alert("Phone number must be 10 digits.");

      // make sure it starts with 9

      if (phoneNumber[0] !== "9") {
        alert("Phone number must start with 9.");
        setIsLoading(false);
        return;
      }
      setIsLoading(false);

      return;
    }

    const data = new FormData();
    data.append("firstName", firstName);
    data.append("middleName", middleName);
    data.append("lastName", lastName);
    data.append("email", email);
    data.append("phoneNumber", phoneNumber);
    data.append("address", address);
    data.append("receipt", receipt);

    fetch("https://tedxapi.deerwalk.edu.np/api/v1/send-email", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          document.body.style.backgroundColor = "black";
          document.body.innerHTML =
            "<h1 style='color:white; text-align:center; margin-top: 20rem;'>You have been registered !</h1> <br/> <p style='text-align:center;margin-top:0.6rem;'>We will contact you shortly following ticket details.</p>";
        } else {
          alert("Something went wrong. Please try again later.");
        }
      })
      .finally(() => {
        setIsLoading(false);
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
        <div
          style={{
            display: "flex",
            width: "50%",
            marginTop: "1rem",
            marginBottom: ".25rem",
          }}
        >
          <img src={TedxDWITLogo} width="50%" height="50%" />
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
            <input
              type="text"
              placeholder="First Name"
              className="input-field"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="input-field"
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-field"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input-field"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              className="input-field"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="form-paragraph">
              <p>For purchasing the ticket, please scan the QR code</p>
              <p>Ticket Fare: Rs 1000</p>
              <div>
                <img src={RegisterQR} className="register-qr" />
              </div>
            </div>
            <p>Please upload your voucher here</p>

            <input
              type="file"
              className="input-field"
              onChange={(e) => setRecipt(e.target.files[0])}
            />

            <button
              className="submit"
              style={{
                border: "none",
                outline: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "relative", // Add this to position spinner
              }}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
