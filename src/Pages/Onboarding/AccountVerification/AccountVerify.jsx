import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import AuthLayout from "../../../components/Layout/AuthLayout.jsx";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AccountVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const [resendTimeout, setResendTimeout] = useState(30);
  const [inValid, setInValid] = useState("");

  const userSchema = Yup.object().shape({
    otp1: Yup.string()
      .length(1, "OTP must be 4 characters")
      .required("The OTP field is required"),
    otp2: Yup.string()
      .length(1, "OTP must be 4 characters")
      .required("The OTP field is required"),
    otp3: Yup.string()
      .length(1, "OTP must be 4 characters")
      .required("The OTP field is required"),
    otp4: Yup.string()
      .length(1, "OTP must be 4 characters")
      .required("The OTP field is required"),
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

  const inputAttributes = () => `height={["auto", "120px"]}
  width="100%"
  fontSize={40}
  py={8}
  mr={["10px", "20px"]}
  bgColor="white"
  color="black"
  border={inValid ? "2px" : "1px"}
  borderColor={inValid ? "red" : "rgb(203, 203, 203)"}`;

  const handleVerifyClick = async (values) => {
    const data = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;

    try {
      const response = await axios.post(
        "https://loanwise.onrender.com/api/verify-signup",
        {
          email: email,
          verificationCode: data,
        }
      );
      console.log("Form submitted successfully");
      navigate("/securityQuestion", {
        state: { token: response.data.user_id },
      });
      console.log("Entered OTP:", data);
      console.log(response);
      console.log("Unexpected status code:", response.status);
    } catch (error) {
      if (error.response) {
        console.log("Request failed with status code:", error.response.status);
        console.log("Response data:", error.response.data);
        console.log("Entered OTP:", data);
        setInValid(
          error.response.data.message === "Invalid verification code" &&
            error.response.data.message
        );
      } else {
        console.error("Error while submitting form:", error.message);
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

  return (
    <AuthLayout
      title="Verify Email Address"
      subtitle={`Thank you for signing up. Please enter the verification code we sent to your email address ${email}`}
      formFooter={formFooter}
    >
      {inValid && (
        <span style={{ color: "red", marginBottom: "30px" }}>{inValid}</span>
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
                <PinInputField name={`otp1`} {...methods.register(`otp1`)} inputAttributes/>
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
                  border={inValid ? "2px" : "1px"}
                  borderColor={inValid ? "red" : "rgb(203, 203, 203)"}
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
                  border={inValid ? "2px" : "1px"}
                  borderColor={inValid ? "red" : "rgb(203, 203, 203)"}
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
                  border={inValid ? "2px" : "1px"}
                  borderColor={inValid ? "red" : "rgb(203, 203, 203)"}
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
              isDisabled={!methods.formState.isDirty}
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
