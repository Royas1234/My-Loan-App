import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { Button } from "@chakra-ui/react";
import "./Login.css";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../../components/NewForm/form/FormInput";

const userSchema = Yup.object().shape({
 email: Yup.string()
  .email("Please enter email address")
  .required("Please enter a valid email address"),
});

const ForgotPassword = () => {
 const formFooter = "";
 const methods = useForm({
  resolver: yupResolver(userSchema),
  defaultValues: {
   terms: "",
  },
 });
 const { handleSubmit, reset } = methods;
 const navigate = useNavigate();
 const [inValid, setInValid] = useState("");
 const [allErrorsState, setAllErrors] = useState("");

 const onSubmit = async (data) => {
  const values = { email: data.email };
  try {
   await axios.post(
    "https://loanwise.onrender.com/api/forget-password",
    values
   );
   navigate("/forget-password-verify", { state: { email: data.email } });
  } catch (error) {
   if (error.response) {
    setInValid(
     error.response.data.message === "User not found. Please signup" &&
      error.response.data.message
    );
    setAllErrors(
     !error.response.data.message === "User not found. Please signup" &&
      error.response.data.message
    );
   }
  }
  reset();
 };

 return (
  <AuthLayout
   title="Forgot Password?"
   subtitle="We’ve got you, please enter your registered email address"
   formFooter={formFooter}
  >
   {inValid && (
    <span style={{ color: "red", marginBottom: "30px" }}>
     User not found. Please{" "}
     <a
      href="/"
      style={{ textDecoration: "underline" }}
      onClick={() => navigate("/create-account")}
     >
      signup
     </a>
    </span>
   )}
   {!inValid && allErrorsState && (
    <span style={{ color: "red", marginBottom: "30px" }}>{allErrorsState}</span>
   )}
   <FormProvider {...methods}>
    <form onSubmit={handleSubmit(onSubmit)} className="forgotPassword">
     <FormInput
      name="email"
      label="Email address"
      placeholder="Enter email address"
     />
     <div className="form-btn">
      <Button
       color="#fff"
       bgColor="#007e99"
       type="submit"
       isLoading={methods.formState.isSubmitting}
      >
       Proceed
      </Button>
     </div>
    </form>
   </FormProvider>
  </AuthLayout>
 );
};

export default ForgotPassword;
