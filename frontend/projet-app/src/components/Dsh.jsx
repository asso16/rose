import React, { useState } from "react";
import "../Css/dsh.css";
import axios from "axios"; // Corrected import (it's 'axios', not 'axois')

function Dsh() {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null); // Added error state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post("http://localhost:5000/blog", formData);

      if (response.status === 201) {
        setShowSuccess(true);
        setFormData({ title: "", body: "" }); // Clear the form after successful submission
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        // Handle non-201 responses (optional, but good practice)
        setError(`Unexpected server response: ${response.status}`);
      }
    } catch (error) {
      // Handle network errors or errors from the server
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(
          `Server error: ${error.response.status} - ${error.response.data}`,
        );
      } else if (error.request) {
        // The request was made but no response was received
        setError(
          "No response received from server. Please check your network connection.",
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("Error submitting form: " + error.message);
      }
      console.error("Submission error:", error); // Log the full error for debugging
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-body">
        <div className="titredsh">
          <h1>Welcome to the Dashboard</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="carddsh">
            <div className="inputdsh">
              <label htmlFor="title">Title of Blog</label>
              <input
                type="text"
                id="title"
                name="title" // Added name attribute
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
              <label htmlFor="body">Blog Content</label>{" "}
              {/* Changed id and htmlFor to "body" */}
              <textarea
                id="body" // Changed id to "body"
                name="body" // Added name attribute
                cols="50"
                rows="15"
                placeholder="Content"
                value={formData.body}
                onChange={handleChange}
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}{" "}
                {/* Show loading state */}
              </button>
              {showSuccess && (
                <div className="success-message">
                  Blog submitted successfully!
                </div>
              )}{" "}
              {/* Success message */}
              {error && <div className="error-message">{error}</div>}{" "}
              {/* Display error message */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dsh;
