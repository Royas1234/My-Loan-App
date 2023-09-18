import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Website/Home/Home";
import AboutUs from "./Pages/Website/AboutUs/AboutUs";
import Pricing from "./Pages/Website/Pricing/Pricing";
import Blog from "./Pages/Website/Blog/Blog";
import CreateAccount from "./Pages/Onboarding/FormValidation/CreateAccount";
import AccountVerify from "./Pages/Onboarding/AccountVerification/AccountVerify";
import ForgotPassword from "./Pages/Onboarding/FormValidation/ForgotPassword";
import ForgotPasswordVerify from "./Pages/Onboarding/FormValidation/ForgotPwdVerify/AccountVerify";
import NewPassword from "./Pages/Onboarding/FormValidation/NewPassword";
import SecurityQuestion from "./Pages/Onboarding/FormValidation/SecurityQuestion";
import SuccessfulPage from "./Pages/Onboarding/SuccessfulPage/SuccessfulPage";
import Login from "./Pages/Onboarding/FormValidation/Login";
import NewDashboard from "./Pages/Dashboard/DashboardOverview/NewDashboard";
import UserPreference from "./Pages/Dashboard/Settings/User-Preference/UserPreference";
import ContactForm from "./components/NewForm/ContactForm";
import CreatePersonal from "./Pages/Dashboard/PortfolioAnalysis/Components/NewPortfolio/CreatePersonal/CreatePersonal";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about-us" element={<AboutUs />} />
					<Route exact path="/pricing" element={<Pricing />} />
					<Route exact path="/blog" element={<Blog />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/forgot-Password" element={<ForgotPassword />} />
					<Route exact path="/contact-form" element={<ContactForm />} />
					<Route
						exact
						path="/security-question"
						element={<SecurityQuestion />}
					/>
					<Route exact path="/create-account" element={<CreateAccount />} />
					<Route exact path="/account-verify" element={<AccountVerify />} />
					<Route
						exact
						path="/forget-password-verify"
						element={<ForgotPasswordVerify />}
					/>
					<Route exact path="/new-password" element={<NewPassword />} />
					<Route exact path="/successful" element={<SuccessfulPage />} />
					<Route path="/dashboard/*" element={<NewDashboard />} />
					<Route path="/userPreference" element={<UserPreference />} />
					<Route path="/personal" element={<CreatePersonal />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
