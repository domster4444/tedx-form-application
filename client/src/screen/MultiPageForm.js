import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const MultiPageForm = () => {
  const [page, setPage] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    mobileNumber: "",
    expectations: "",
    attendedEvent: "",
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const submitForm = () => {
    // You can handle form submission logic here
    setIsSubmitted(true);
    nextPage(); // Move to the next page after successful submission
  };

  return (
    <div>
      <div>
        {page === 1 && (
          <Page1
            nextPage={nextPage}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {page === 2 && (
          <Page2
            prevPage={prevPage}
            onSubmit={submitForm}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {page === 3 && <Page3 />}
      </div>
    </div>
  );
};

export default MultiPageForm;
