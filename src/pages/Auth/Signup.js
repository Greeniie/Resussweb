import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllRoles } from "../../redux/RoleSlice";

const initialFormData = {
  roles: [],
};

const Signup = () => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllRoles()).catch((err) => {
      console.error("Failed to fetch roles:", err);
    });
  }, [dispatch]);

  const roleList = role?.data?.map((item) => item?.name);

  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleInputChange = (eOrName, value) => {
    if (typeof eOrName === "string") {
      // Direct key-value update (like profile photo)
      setFormData((prevData) => ({
        ...prevData,
        [eOrName]: value,
      }));
    } else {
      // Standard input change event
      const { name, value } = eOrName.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
          roles={roleList}
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
