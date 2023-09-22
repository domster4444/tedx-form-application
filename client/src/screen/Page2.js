import React from "react";

const Page2 = ({ prevPage, formData, setFormData, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation
    if (formData.attendedEvent === "") {
      alert("Please select whether you have attended a TEDx event."); // You can display an error message or handle validation as needed
    } else {
      // If the fields are valid, call the onSubmit function to submit the form
      onSubmit();

      // Navigate to the next page
      // Note: Make sure to update the page state accordingly
      // after successful form submission
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>What are your expectations from TEDxDeerwalk</h3>
        <textarea
          aria-required="false"
          aria-invalid="false"
          value={formData.expectations}
          onChange={(e) =>
            setFormData({ ...formData, expectations: e.target.value })
          }
        />
        <h3>Have you attended any TEDx event before? *</h3>
        <input
          type="radio"
          id="Yes"
          name="tedx-event"
          value="Yes"
          required
          onChange={() => setFormData({ ...formData, attendedEvent: "Yes" })}
        />{" "}
        <label htmlFor="Yes">Yes</label>
        <br />
        <input
          type="radio"
          id="No"
          name="tedx-event"
          value="No"
          required
          onChange={() => setFormData({ ...formData, attendedEvent: "No" })}
        />{" "}
        <label htmlFor="No">No</label>
        <br />
        <div>
          <button onClick={prevPage}>Previous Page</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Page2;
