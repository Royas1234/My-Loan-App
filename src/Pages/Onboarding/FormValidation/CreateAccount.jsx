import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { Button } from "@chakra-ui/react";
import "./Login.css";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import axios from "axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../../components/NewForm/form/FormInput";

const userSchema = Yup.object().shape({
  name: 
    Yup.string().required("Please enter your name"),
  email: 
    Yup.string().email("Please enter email address")
    .required("Please enter a valid email address"),
  password: 
    Yup.string().required("Please provide a password that contains atleast 6 characters including a number")
    .matches(
      /^(?=.*\d).*$/,
      "Please provide a password that contains atleast 6 characters including a number"
    )
    .min(6, "Please provide a password that contains atleast 6 characters including a number"),
  confirmPassword: 
    Yup.string().oneOf([Yup.ref("password")],
    "Your Password does not match"
  ),
  radioButton: Yup.string()
    .oneOf(["true"], "Please agree to the terms of service and privacy policy")
    .required("Please agree to the terms of service and  privacy policy"),
});

const CreateAccount = () => {
  const methods = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      terms: "",
    },
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = methods;
  
  const navigate = useNavigate();
  const [backendError, setBackendError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
  const fullNameArray  = useState("");
  const setFullName = fullNameArray[1];

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const onSubmit = async (data) => {
    const values = {
      fullName: data.name,
      email: data.email,
      password: data.password,
    
    };

    try {
      const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/create-account`,
        values
      );
      if (response.status === 201) {
        localStorage.setItem("email", data.email);
        setFullName(data.name);
        navigate("/account-verify", {
          state: { email: data.email, name: data.name },
        });
      } 
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        setBackendError(errorMessage);
      }
      reset();
      setValue ("radioButton", "")
    }
  };

  const handleRadioChange = () => {
    setValue("radioButton", "true");
  };

  const formFooter = (
    <p>
      Already have an account? <a href="/" onClick={() => navigate("/login")}>Sign In</a>
    </p>
  );

  return (
    <AuthLayout title={"Create an account"} formFooter={formFooter}>
      {backendError && 
      <span style={{ color: "red", marginBottom: "30px"}}>
        {backendError}
      </span>}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            name="name"
            label="Full Name"
            placeholder="Enter full name"
            autoFocus={true}
          />

          <FormInput
            name="email"
            label="Email address"
            placeholder="Enter email address"
          />

          <div className="passwordContainer">
            <fieldset className="password">
              <label htmlFor="password">Password</label>
              <div className="inputField">
                <input
                  {...register("password")}
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  {passwordVisible ? (
                    <RiEyeLine style={{ color: "#007e99" }} />
                  ) : (
                    <RiEyeOffLine style={{ color: "#007e99" }} />
                  )}
                </button>
              </div>
            </fieldset>

            <fieldset className="confirmPassword">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="inputField">
                <input
                  {...register("confirmPassword")}
                  name="confirmPassword"
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
                <button type="button" onClick={toggleConfirmPasswordVisibility}>
                  {confirmPasswordVisible ? (
                    <RiEyeLine style={{ color: "#007e99" }} />
                  ) : (
                    <RiEyeOffLine style={{ color: "#007e99" }} />
                  )}
                </button>
              </div>
            </fieldset>
          </div>
          {errors.password && (
            <p className="errorMessage">{errors.password.message}</p>
          )}
          {!errors.password && errors.confirmPassword ? (
            <p className="errorMessage">{errors.confirmPassword.message}</p>
          ) : (
            ""
          )}

          <div
            className="termz"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div className="terms-and-conditions">
              <input
                {...register("radioButton")}
                type="radio"
                id="terms"
                name="terms"
                value="true"
                onChange={handleRadioChange}
              />
              <span>
                <label htmlFor="terms">
                  I agree to the terms of service and privacy policy
                </label>
              </span>
            </div>
            {errors.radioButton && (
              <p className="errorMessage">{errors.radioButton.message}</p>
            )}
          </div>
          <div className="form-btn">
            <Button
              color="#fff"
              bgColor="#007e99"
              type="submit"
              isLoading={methods.formState.isSubmitting}
            >
              Create Account
            </Button>
          </div>
        </form>
      </FormProvider>
    </AuthLayout>
  );
};

export default CreateAccount;
