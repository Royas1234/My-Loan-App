import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { nanoid } from 'nanoid'
import axios from 'axios'


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isDirty },
  } = useForm();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async data => {
    const values = { ...data, id: nanoid() }
    const response = await axios.post('http://localhost:4000/api/user', values)
    if (response.status === 201) {
      navigate("/dashboard/overview")
    }
    

    // let isValid = Object.keys(errors).length === 0;
    // {
    //   isValid && navigate("/dashboard/overview");
    // }
  };

  const formFooter = (
    <p>
      Don’t have an account? <a href="/createAccount">Sign Up</a>
    </p>
  );

  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Enter your details to sign in"
      formFooter={formFooter}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="email">Email address</label>
          <input
            {...register("email", { required: true })}
            isDisabled={isSubmitting}
            type="email"
            id="email"
            placeholder={"Enter email address"}
          // autoComplete=false
          />
          {errors.email?.type === "required" && (
            <p className="errorMessage">The email field is required</p>
          )}
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <div className="inputField">
            <input
              {...register("password", { required: true, minLength: 6 })}
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder={"Enter Password"}
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <RiEyeLine style={{ color: "#007e99" }} />
              ) : (
                <RiEyeOffLine style={{ color: "#007e99" }} />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="errorMessage">
              Password must contain at least 6 characters including numbers
            </p>
          )}
        </fieldset>

        <div className="checkForgot">
          <div className="checkText">
            <input type="checkbox" name="Keep me signed in" /> Keep me signed in
          </div>
          <p className="subHeading">
            <a href="/forgotpassword">Forgot Password?</a>
          </p>
        </div>

        <div className="form-btn">
          <FilledBtn type={"submit"} title={"Sign In"} isLoading={isSubmitting} isDisabled={isDirty || isSubmitting}/>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
