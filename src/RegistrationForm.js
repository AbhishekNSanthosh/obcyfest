// RegistrationForm.js

import React, { useState } from "react";
import axios from "axios";

function getCurrentDate() {
  const currentDate = new Date();

  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based.
  const yyyy = currentDate.getFullYear();

  return `${dd} ${mm} ${yyyy}`;
}

function RegistrationForm({ onClose }) {
  const [currentDate, setCurrentDate] = useState('');
  const [data, setData] = useState();
  const [username, setUsername] = useState("");
  const [sem, setSem] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  // Function to handle the "Close" button click
  const handleRegistrationClose = () => {
    onClose();
  };
  const handleRegistrationSubmit = () => {
    {
    }
  };

  function getCurrentDate() {
    const currentDate = new Date();
  
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based.
    const yyyy = currentDate.getFullYear();
  setCurrentDate(`${dd} ${mm} ${yyyy}`)
  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post(
        "https://sheet.best/api/sheets/435458b8-386d-411c-9f56-28974c28908b",
        {

          Name: username,
          Email:email,
          Semester:sem,
          Mobile_No:mobileNo
        }
      );

      console.log("Data sent successfully!", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="registration-overlay">
      <div className="registration-form">
        <button className="close-button" onClick={handleRegistrationClose}>
          &times; {/* This is the 'X' icon */}
        </button>
        {/* Add your registration form fields and content here */}
        <h2>Registration Form</h2>
        <br></br>
        {/* Example form fields */}
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Name"
            required=""
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <label for="name" class="form__label">
            Name
          </label>
        </div>
        <br></br>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Semester"
            required=""
            onChange={(e) => {
              setSem(e.target.value);
            }}
            value={sem}
          />
          <label for="semester" class="form__label">
            Semester (1,3,5 or 7)
          </label>
        </div>
        <br></br>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label for="email" class="form__label">
            Email
          </label>
        </div>
        <br></br>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Phone"
            required
            onChange={(e) => {
              setMobileNo(e.target.value);
            }}
            value={mobileNo}
          />
          <label for="phone" class="form__label">
            Phone
          </label>
        </div>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default RegistrationForm;
