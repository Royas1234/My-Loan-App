import React, { useState } from "react";
import "../Newportfolio.css";
import { Button, Select, FormLabel, FormControl } from "@chakra-ui/react";
import NewFormInput from "../FormControl/NewFormInput";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const userSchema = Yup.object().shape({
  currentEmployer: Yup.string().required("This field is required"),
  currentRole: Yup.string().required("This field is required"),
  anualIncome: Yup.string().required("The field is required"),
  Total_Years_of_Employment: Yup.string().required(
    "Total no. of years of employment is required"
  ),
  incomeDebitRatio: Yup.string().required("Income debit ratio is required"),
  openCreditLines: Yup.string().required("This field is required"),
  creditUtilizationRate: Yup.string().required("This field is required"),
  mortgageAccounts: Yup.string().required("Enter Number"),
  Loan_Purpose: Yup.string().required("This field is required"),
  Loan_Term: Yup.string().required("This field is required"),
  requestedAmount: Yup.string().required("This field is required"),
  Verification_by_Loan_Company: Yup.string().required("This field is required"),
  Application_Type: Yup.string().required("This field is required"),
});

const EmploymentInfo = ({ handleNext }) => {
  /*
   * Validation
   */
  const methods = useForm({
    resolver: yupResolver(userSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    
  } = methods;
 
  const [inValid, setInValid] = useState("");

  const onSubmit = async (data) => {
    const values = {
      currentEmployer: data.currentEmployer,
      currentRole: data.currentRole,
      Annual_Income: data.annualIncome,
      Total_Years_of_Employment: data.employmentLength,
      Income_Debit_Ratio: data.incomeDebitRatio,
      No_of_Open_Credit_Lines: data.openCreditLines,
      Credit_Utilization_Rate: data.creditUtilizationRate,
      No_of_Mortgage_Account: data.mortgageAccounts,
      Loan_Purpose: data.loanPurpose,
      Loan_Term: data.loanTerm,
      requestedAmount: data.amount,
      Verification_by_Loan_Company: data.companyVerification,
      Application_Type: data.appType,
    };

    try {
      const response = await axios.post(
        "https://loanwise.onrender.com/borrowers-details",
        values
      );
      localStorage.setItem("email", data.email);
      handleNext();
      console.log("Form submitted successfully");
      console.log("Unexpected status code:", response.status);
    } catch (error) {
      if (error.response) {
        console.log("Request failed with status code:", error.response.status);
        console.log("Response data:", error.response.data);
        // Set error state and display error message to the user
        setInValid(error.response.data.message);
      } else {
        console.error("Error while submitting form:", error.message);
      }
    }
  };

  const options = [
    { value: "Choose answer" },
    { value: "Personal" },
    { value: "Business" },
    { value: "Mortgage" },
    { value: "Student" },
  ];

  const option = options.map((item, index) => (
    <option key={index} value={item.value}>
      {item.value}
    </option>
  ));

  return (
    <FormProvider {...methods}>
      {inValid && (
        <span style={{ color: "red", marginBottom: "30px" }}>{inValid}</span>
      )}
      <form className="new-portfolio-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="new-portfolio-wrapper">
          <h2>Employment Information</h2>
          <div>
            <NewFormInput
              type="text"
              label="Current Employer"
              name="currentEmployer"
              placeholder="Enter full name"
            />
          </div>
          <div>
            <NewFormInput
              type="text"
              label="Current Role"
              name="currentRole"
              placeholder="Enter answer"
            />
          </div>
          <div className="dFlex">
            <div className="dFlex1">
              <NewFormInput
                name="anualIncome"
                type="number"
                label="Annual Income"
                placeholder="Enter answer"
              />
            </div>
            <div className="dFlex2">
              <NewFormInput
                name="Total_Years_of_Employment"
                type="number"
                label="Total Years of Employment"
                placeholder="Enter answer"
              />
            </div>
          </div>
          <div className="dFlex">
            <div className="dFlex1">
              <NewFormInput
                name="incomeDebitRatio"
                type="number"
                label="Income-Debt Ratio"
                placeholder="Enter number"
              />
            </div>
            <div className="dFlex2">
              <NewFormInput
                name="openCreditLines"
                type="number"
                label="No. of Open Credit Lines"
                placeholder="Enter answer"
              />
            </div>
          </div>
          <div className="dFlex">
            <div className="dFlex1">
              <NewFormInput
                name="creditUtilizationRate"
                type="number"
                label="Credit Utilization Rate"
                placeholder="Enter answer"
              />
            </div>
            <div className="dFlex2">
              <NewFormInput
                name="mortgageAccounts"
                type="number"
                label="No. of Mortgage Account"
                placeholder="Enter number"
              />
            </div>
          </div>
          <h3>Loan Information</h3>
          <div>
            <NewFormInput
              name="bvn"
              type="number"
              label="Loan Purpose"
              placeholder="Enter number"
            />
          </div>
          <div className="dFlex">
            <div className="dFlex1">
              <NewFormInput
                name="bvn"
                type="number"
                label="Loan Term"
                placeholder="Enter number"
              />
            </div>
            <div className="dFlex2">
              <NewFormInput
                name="bvn"
                type="number"
                label="Requested Amount"
                placeholder="Enter number"
              />
            </div>
          </div>
          <div className="dFlex">
            <div className="dFlex1">
              <FormControl mb="8px">
                <FormLabel
                  m={0}
                  fontSize={"14px"}
                  padding="2px"
                  color="#00151a"
                >
                  Loan Company Verification
                </FormLabel>
                <Select
                  isDisabled={isSubmitting}

                  name="firstQuestion"
                  placeholder="Select option"
                  bgColor="white"
                  color="black"
                  // mb="8px"
                  iconColor="#007e99"
                  {...register("firstQuestion")}
                >
                  {option}
                </Select>
              </FormControl>
            </div>

            <div className="dFlex2">
              <NewFormInput
                name="bvn"
                type="number"
                label="Application Type"
                placeholder="$0.00"
              />
            </div>
          </div>
          <div className="Personalform-btn">
            <Button
              color="#fff"
              bgColor="#007e99"
              type="submit"
              isLoading={methods.formState.isSubmitting}
              mx="auto"
              px="40px"
              py="12px"
              borderRadius="0"
            >
              Analyze
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default EmploymentInfo;
