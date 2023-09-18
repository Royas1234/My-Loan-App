import React from "react";
import GetStarted from "./GetStarted";

function Vision() {
	return (
		<div className="vision-section vision">
			<GetStarted
				title="Our Vision"
				content="Our vision at Loan Default Prediction App is to revolutionize the lending industry by providing financial institutions with innovative and data-driven solutions that streamline the lending process, reduce the risk of loan default, and ultimately lead to increased profitability. We believe that by utilizing advanced predictive analytics and staying up-to-date with the latest lending technologies and trends, we can provide financial institutions with the tools they need to make more informed lending decisions and improve the overall customer experience. "
			/>
			<div className="loan-analysis">
				<img src="/images/Loan-Analysis.svg" alt="loan analysis" />
			</div>
		</div>
	);
}

export default Vision;
