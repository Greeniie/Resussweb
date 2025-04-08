import React, {useRef} from 'react'

const OtpInput = ({ otp, setOtp }) => {

    
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  
    const handleChange = (e, index) => {
      const value = e.target.value;
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
  
      // Move to the next input box if the current one is filled
      if (value && index < otp.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    };
  
    const handleBackspace = (e, index) => {
      if (e.key === "Backspace" && otp[index] === "") {
        // Move to the previous input box if backspace is pressed and the current box is empty
        if (index > 0) {
          inputRefs[index - 1].current.focus();
        }
      }
    };
  
    return (
      <div className="flex justify-start gap-3 mt-[30px]">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            className="w-12 h-12 border border-gray-300 text-center text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD6FA]"
          />
        ))}
      </div>
    );
  };
  
  export default OtpInput