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

/*
 * Interface
 */

const userSchema = Yup.object().shape({
	email: Yup.string()
		.email("Please enter email address")
		.required("Please enter a valid email address"),
	password: Yup.string()
		.required(
			"Please provide a password that contains atleast 6 characters including a number"
		)
		.matches(
			/^(?=.*\d).*$/,
			"Please provide a password that contains atleast 6 characters including a number"
		)
		.min(
			6,
			"Please provide a password that contains atleast 6 characters including a number"
		),
});

const Login = () => {
	/*
	 * Validation
	 */
	const methods = useForm({ resolver: yupResolver(userSchema) });
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = methods;

	const navigate = useNavigate();
	const [allErrorsState, setAllErrors] = useState("");
	const [inValid, setInValid] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);
	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const onSubmit = async (data) => {
		const values = {
			email: data.email,
			password: data.password,
		};
		try {
			const response = await axios.post(
				// "https://loanwise.onrender.com/api/login",
				`${process.env.REACT_APP_BACKEND_URL}/login`,
				values
			);
			navigate("/dashboard/overview");
			console.log("Form submitted successfully");
			console.log(response.data);
		} catch (error) {
			if (error.response) {
				console.log("Request failed with status code:", error.response.status);
				console.log("Response data:", error.response.data);
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
			reset();
		}
	};

	const formFooter = (
		<p>
			Don’t have an account? <a href="/create-account">Sign Up</a>
		</p>
	);

	return (
		<AuthLayout
			title="Welcome Back!"
			subtitle="Enter your details to sign in"
			formFooter={formFooter}
		>
			{inValid && (
				<span style={{ color: "red", marginBottom: "30px" }}>
					User already exists! Please{" "}
					<a
						href="/"
						style={{ textDecoration: "underline" }}
						onClick={() => navigate("/create-account")}
					>
						Login
					</a>
				</span>
			)}
			{!inValid && allErrorsState && (
				<span style={{ color: "red", marginBottom: "30px" }}>
					{allErrorsState}
				</span>
			)}
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormInput
						name="email"
						label="Email address"
						placeholder={"Enter email address"}
					/>

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
							<p className="errorMessage">{errors.password.message}</p>
						)}
					</fieldset>

					<div className="checkForgot">
						<div className="checkText">
							<input type="checkbox" name="Keep me signed in" /> Keep me signed
							in
						</div>
						<p className="subHeading">
							<a href="/forgot-password">Forgot Password?</a>
						</p>
					</div>

					<div className="form-btn">
						<Button
							color="#fff"
							bgColor="#007e99"
							type="submit"
							isLoading={methods.formState.isSubmitting}
						>
							Sign In
						</Button>
					</div>
				</form>
			</FormProvider>
		</AuthLayout>
	);
};

export default Login;
