// Page1.js
import React from "react";

const Page1 = ({ nextPage, formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextClick = () => {
    if (formData.firstName.trim() === "" || formData.email.trim() === "" || formData.mobileNumber.trim() === "") {
      alert("Please fill out all required fields.");
    } else {
      nextPage();
    }
  };

  return (
    <div>
      <h3>Let's start with your personal details</h3>
      <form>
        <input type='text' name='firstName' placeholder='First Name' required aria-label="Let's start with your personal details" aria-required='true' value={formData.firstName} onChange={handleInputChange} />
        <br />
        <input type='email' name='email' placeholder='Email' required aria-label='Email' aria-required='true' value={formData.email} onChange={handleInputChange} />
        <br />
        <input type='tel' name='mobileNumber' placeholder='Mobile Number' required aria-label='Mobile Number' aria-required='true' value={formData.mobileNumber} onChange={handleInputChange} />
        <br />
        <button onClick={handleNextClick}>Next</button>
      </form>
    </div>
  );
};

export default Page1;
