import React, { useState } from "react";
import "./styles.css";

const OTPForm = () => {
  const [otpSent, setOtpSent] = useState(false); // State to check if OTP is sent
  const [otp, setOtp] = useState(""); // State to store OTP input
  const [isOtpPage, setIsOtpPage] = useState(false); // To toggle between forms

  // Handle OTP button click
  const handleOtpClick = () => {
    setOtpSent(true); // Simulate OTP being sent
    setIsOtpPage(true); // Switch to OTP form
  };

  // Handle OTP input change
  const handleOtpChange = (event) => {
    setOtp(event.target.value); // Update OTP state
  };

  // Handle OTP form submit (in a real scenario, you'd verify the OTP here)
  const handleSubmitOtp = (event) => {
    event.preventDefault();
    alert(`OTP Submitted: ${otp}`); // Simulating OTP submission
  };

  return (
    <div className="chatbox-container">
      {/* Header Section */}

      {/* Form Section */}
      <div className="form-container">
        {/* If OTP has not been sent, show the name, mobile, and email form */}
        {!isOtpPage ? (
          <>
            <h3>SORTMYENTRIES</h3>
            <form>
              <input type="text" id="name" placeholder="Name*" required />
              <input type="text" id="mobile" placeholder="Mobile Number*" required />
              <input type="email" id="email" placeholder="Enter Email*" required />

              {/* OTP Button */}
              <button
                type="button"
                className="form-button"
                onClick={handleOtpClick}
              >
                {otpSent ? "OTP Sent" : "Get OTP"}
              </button>
            </form>
          </>
        ) : (
          <>
            <h3>SORTMYENTRIES</h3>
            <form onSubmit={handleSubmitOtp}>
              <input
                type="text"
                id="otp"
                placeholder="Enter OTP*"
                value={otp}
                onChange={handleOtpChange}
                required
              />
              <button type="submit" className="form-button">
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default OTPForm;
