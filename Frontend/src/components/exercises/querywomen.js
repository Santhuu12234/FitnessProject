import React from "react";
import { useNavigate } from "react-router-dom";
import "./query.css";

const QueryPages = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target);
    let responses = {};
    let allAnswered = true;

    formData.forEach((value, key) => {
      responses[key] = value;
    });

    // Validate that all questions are answered
    for (let i = 1; i <= 5; i++) {
      if (!responses[`q${i}`]) {
        allAnswered = false;
        alert(`Please answer question ${i}`);
        break;
      }
    }

    // If all questions are answered
    if (allAnswered) {
      console.log("User Responses:", responses);
      alert("Thank you for your submission!");

      // Redirect to another page after submission
      navigate("/stagef"); // Replace "/another-page" with your desired route
    }
  };

  return (
    <div className="container">
      <h2 className="header">Answer the Questions</h2>
      <form id="queryForm" onSubmit={handleSubmit} className="form">
        {/* First 3 questions in a row */}
        <div className="question-row">
          <div className="question">
            <p>1. Are you trained before?</p>
            <div className="options">
              <label>
                <input type="radio" name="q1" value="Yes" /> Yes
              </label>
              <label>
                <input type="radio" name="q1" value="Nope" /> Nope
              </label>
            </div>
          </div>

          <div className="question">
            <p>2. How many Push-Ups can you do in a set?</p>
            <div className="options">
              <label>
                <input type="radio" name="q2" value="5x" /> 5x
              </label>
              <label>
                <input type="radio" name="q2" value="10x" /> 10x
              </label>
              <label>
                <input type="radio" name="q2" value="15x" /> 15x
              </label>
              <label>
                <input type="radio" name="q2" value="20x" /> 20x
              </label>
            </div>
          </div>

          <div className="question">
            <p>3. How many days you workout in a week?</p>
            <div className="options">
              <label>
                <input type="radio" name="q3" value="7 Days" /> 7 Days
              </label>
              <label>
                <input type="radio" name="q3" value="6 Days" /> 6 Days
              </label>
              <label>
                <input type="radio" name="q3" value="5 Days" /> 5 Days
              </label>
              <label>
                <input type="radio" name="q3" value="4 Days" /> 4 Days
              </label>
            </div>
          </div>
        </div>

        {/* Next 2 questions below */}
        <div className="question-row">
          <div className="question">
            <p>4. How much time you want to reach your goal?</p>
            <div className="options">
              <label>
                <input type="radio" name="q4" value="3 Months" /> 3 Months
              </label>
              <label>
                <input type="radio" name="q4" value="6 Months" /> 6 Months
              </label>
              <label>
                <input type="radio" name="q4" value="10 Months" /> 10 Months
              </label>
              <label>
                <input type="radio" name="q4" value="1 Year" /> 1 Year
              </label>
            </div>
          </div>

          <div className="question">
            <p>5. By the time you reach your goal what you want to do?</p>
            <div className="options">
              <label>
                <input type="radio" name="q5" value="Travel" /> Travel
              </label>
              <label>
                <input type="radio" name="q5" value="Eating your favorite dish" /> Eating your favorite dish
              </label>
              <label>
                <input type="radio" name="q5" value="Improving Yourself" /> Improving Yourself
              </label>
              <label>
                <input type="radio" name="q5" value="Hangout with Family" /> Hangout with Family
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QueryPages;