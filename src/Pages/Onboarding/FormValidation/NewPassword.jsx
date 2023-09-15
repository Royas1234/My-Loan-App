import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();
 const navigate = useNavigate();

 const onSubmit = () => {
  let isValid = Object.keys(errors).length === 0;
  return isValid && navigate("/login");
 };

 // const formFooter = (
 //   <p>
 //     Already have an account? <a href="/loginn">Sign In</a>
 //   </p>
 // );

 return (
  <AuthLayout
   title="Create New Password"
   subTitle="Please enter a password different from your old password"
  >
   <form onSubmit={handleSubmit(onSubmit)}>
    <fieldset>
     <label htmlFor="name">Password</label>
     <input
      {...register("password", { required: true })}
      id="password"
      type="password"
      placeholder="Enter answer"
     />
     {errors.password && (
      <p className="errorMessage">
       Password must contain at least 6 characters including numbers
      </p>
     )}
    </fieldset>
    <fieldset>
     <label htmlFor="name">Confirm Password</label>
     <input
      {...register("confirmPassword", { required: true })}
      id="confirmPassword"
      type="password"
      placeholder="Enter answer"
     />
     {errors.confirmPassword && (
      <p className="errorMessage">
       Password must contain at least 6 characters including numbers
      </p>
     )}
    </fieldset>

    <div className="form-btn">
     <FilledBtn type="submit" title="Submit" />
    </div>
   </form>
  </AuthLayout>
 );
};

export default NewPassword;
