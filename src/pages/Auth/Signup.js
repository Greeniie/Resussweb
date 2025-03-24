import React, { useState, useRef } from "react";
import NavBar from "../../components/NavBar";
import Signup1 from "../../components/Signup/Signup1";
import Signup2 from "../../components/Signup/Signup2";
import Signup3 from "../../components/Signup/Signup3";
import Signup4 from "../../components/Signup/Signup4";
import Signup5 from "../../components/Signup/Signup5";
import Signup6 from "../../components/Signup/Signup6";
import Signup7 from "../../components/Signup/Signup7";
import Signup8 from "../../components/Signup/Signup8";
import Signup9 from "../../components/Signup/Signup9";

const initialFormData = {
  roles: [],
};

const Signup = () => {
  const roles = [
    "Actor",
    "Art",
    "Agent",
    "Company",
    "Craft Services",
    "Camera",
    "Content Creator",
    "Dance",
    "Director",
    "Electrical",
    "Equipment",
    "Grip",
    "Hair & Makeup",
    "location",
    "Media Company",
    "Producer",
    "Post Production",
    "Rental",
    "School",
    "Screenwriter",
    "Script",
    "Sound",
    "Studio Exec",
    "Voice Talent ",
    "Wardrobe",
  ];

  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
     
      {step === 1 && (
        <Signup1
          nextStep={nextStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 2 && (
        <Signup2
          nextStep={nextStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 3 && (
        <Signup3
          nextStep={nextStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 4 && (
        <Signup4
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 5 && (
        <Signup5
          roles={roles}
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 6 && (
        <Signup6
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 7 && (
        <Signup7
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
       {step === 8 && (
        <Signup8
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 9 && (
        <Signup9
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default Signup;
