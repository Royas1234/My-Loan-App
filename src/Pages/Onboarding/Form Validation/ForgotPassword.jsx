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
    .email("Invalid email")
    .required("The email field is required"),
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
      const response = await axios.post(
        "https://loanwise.onrender.com/api/forget-password",
        values
      );
      navigate("/accVerify");
    } catch (error) {
      if (error.response) {
        console.log("Request failed with status code:", error.response.status);
        console.log("Response data:", error.response.data);
        console.log("Email:", data);
        setInValid(
          error.response.data.message === "User not found. Please signup" &&
            error.response.data.message
        );
        setAllErrors(
          !error.response.data.message === "User not found. Please signup" &&
            error.response.data.message
        );
      } else {
        console.error("Error while submitting form:", error.message);
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
            style={{ textDecoration: "underline" }}
            onClick={() => navigate("/createAccount")}
          >
            signup
          </a>
        </span>
      )}
      {!inValid && allErrorsState && (
        <span style={{ color: "red", marginBottom: "30px" }}>
          {allErrorsState}
        </span>
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
              isDisabled={!methods.formState.isDirty}
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
