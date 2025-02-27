import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import AuthLayout from "../../../components/Layout/AuthLayout.jsx";
import { FormProvider, useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AccountVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const [resendTimeout, setResendTimeout] = useState(30);
  const [errorMessage, setErrorMessage] = useState("");

  const userSchema = Yup.object().shape({
    otp1: Yup.string()
      .length(1, "OTP must be 4 characters")
      .required("Please enter the OTP"),
    otp2: Yup.string()
      .length(1, "OTP must be 4 characters")
      .required("Please enter the OTP"),
    otp3: Yup.string()
      .length(1, "OTP must be 4 characters")
      .required("Please enter the OTP"),
    otp4: Yup.string()
      .length(1, "OTP must be 4 characters")
      .required("Please enter the OTP"),
  });

  const methods = useForm({
    resolver: yupResolver(userSchema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (resendTimeout === 0) {
        clearTimeout(timer);
      } else {
        setResendTimeout((prevTimeout) => prevTimeout - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [resendTimeout]);

  const handleResendClick = () => {
    if (resendTimeout === 0) {
      setResendTimeout(60);
    }
  };

  const handleVerifyClick = async (values) => {
    const otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/verify-account`,
        {
          email: email,
          token: otp,
        }
      );
      navigate("/security-question", {
        state: { token: response.data.jwtToken },
      });
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  const formFooter = (
    <>
      Didn’t get OTP?{" "}
      <a href="../re" target="_blank" rel="noopener noreferrer">
        {resendTimeout === 0 ? "" : `Resend in ${resendTimeout}s`}
      </a>
    </>
  );

  if (!email) {
    return <Navigate to="/create-account" />;
  }
  return (
    <AuthLayout
      title="Verify Email Address"
      subtitle={`Thank you for signing up. Please enter the verification code we sent to your email address ${email}`}
      formFooter={formFooter}
    >
      {errorMessage && (
        <span style={{ color: "red", marginBottom: "30px" }}>
          {errorMessage}
        </span>
      )}
      <FormProvider {...methods}>
        <form
          className="form"
          onSubmit={handleSubmit(
            resendTimeout === 0 ? handleResendClick : handleVerifyClick
          )}
        >
          <div className="otp_input-Content">
            <HStack mx="auto" mt={5}>
              <PinInput size="lg" placeholder="">
                <PinInputField
                  name={`otp1`}
                  {...methods.register(`otp1`)}
                  height={["auto", "120px"]}
                  width="100%"
                  fontSize={40}
                  py={8}
                  mr={["10px", "20px"]}
                  bgColor="white"
                  color="black"
                  border={errorMessage ? "2px" : "1px"}
                  borderColor={errorMessage ? "red" : "rgb(203, 203, 203)"}
                />
                <PinInputField
                  name={`otp2`}
                  {...methods.register(`otp2`)}
                  height={["auto", "120px"]}
                  width="100%"
                  fontSize={40}
                  py={8}
                  mr={["10px", "20px"]}
                  bgColor="white"
                  color="black"
                  border={errorMessage ? "2px" : "1px"}
                  borderColor={errorMessage ? "red" : "rgb(203, 203, 203)"}
                />
                <PinInputField
                  name={`otp3`}
                  {...methods.register(`otp3`)}
                  height={["auto", "120px"]}
                  width="100%"
                  fontSize={40}
                  py={8}
                  mr={["10px", "20px"]}
                  bgColor="white"
                  color="black"
                  border={errorMessage ? "2px" : "1px"}
                  borderColor={errorMessage ? "red" : "rgb(203, 203, 203)"}
                />
                <PinInputField
                  name={`otp4`}
                  {...methods.register(`otp4`)}
                  height={["auto", "120px"]}
                  width="100%"
                  fontSize={40}
                  py={8}
                  mr={["10px", "20px"]}
                  bgColor="white"
                  color="black"
                  border={errorMessage ? "2px" : "1px"}
                  borderColor={errorMessage ? "red" : "rgb(203, 203, 203)"}
                />
              </PinInput>
            </HStack>
          </div>

          {(errors.otp1 || errors.otp2 || errors.otp3 || errors.otp4) && (
            <p className="errorMessage">{errors.data}</p>
          )}

          <div className="form-btn">
            <Button
              color="#fff"
              bgColor="#007e99"
              type="submit"
              isLoading={isSubmitting}
            >
              {resendTimeout === 0 ? "Resend" : "Verify"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </AuthLayout>
  );
};

export default AccountVerify;
