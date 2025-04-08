import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Fp1 from "../../components/ForgotPassword/Fp1";
import Fp2 from "../../components/ForgotPassword/Fp2";
import Fp3 from "../../components/ForgotPassword/Fp3";

const ForgotPassword = () => {
const navigate = useNavigate()

  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
    if (step === 3 ) {
      navigate('/reset-password')
    }
  };

  return (
    <div>
      {step === 1 && <Fp1 nextStep={nextStep} />}
      {step === 2 && <Fp2 nextStep={nextStep} />}
      {step === 3 && <Fp3 />}
    </div>
  );
};

export default ForgotPassword;
