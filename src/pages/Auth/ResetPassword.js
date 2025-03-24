import React, { useState, useRef } from "react";
import Rp1 from "../../components/ResetPassword/Rp1";
import Rp2 from "../../components/ResetPassword/Rp2";

const ResetPassword = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      {step === 1 && <Rp1 nextStep={nextStep} />}
      {step === 2 && <Rp2 />}
    </div>
  );
};

export default ResetPassword;
