import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../../components/NewForm/form/FormInput";

function SecurityQuestion() {
  const userSchema = Yup.object().shape({
    firstAnswer: Yup.string().required(
      "You must select a question and enter an answer"
    ),
    secondAnswer: Yup.string().required(
      "You must select a question and enter an answer"
    ),
  });

  const methods = useForm({
    resolver: yupResolver(userSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors }
  } = methods;
  const navigate = useNavigate();

  //   const onSubmit = () => {
  //   let isValid = Object.keys(errors).length === 0;
  //   {
  //     isValid && navigate("/login");
  //   }
  // };

  const onSubmit = async (data) => {
    const values = {
      securityQuestions: [
        {
          question: data.firstquestion,
          answer: data.firstAnswer,
        },
        {
          question: data.secondQuestion,
          answer: data.secondAnswer,
        },
      ],
    };
   
    try {
      const response = await axios.put(
        `https://loanwise.onrender.com/api/648d4b1d86390176ebdd3f08/security-question`,
    values
      );
          console.log(response.data);
          console.log("Form submitted successfully");
          console.log(data.firstAnswer);
          console.log(data.secondAnswer);
          navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log("Request failed with status code:", error.response.status);
        console.log("Response data:", error.response.data);
      } else {
        console.error("Error while submitting form:", error.message);
      }
    }
  };

  const options = [
    {value: "What is your mother's name?"},
    {value: "What is your father's name?"},
    { value: "Where did you grow up?" },
    {value: "What university did you attend?"}
  ];

  const option = options.map((item, index) => (
    <option key={index} value={item.value}>{item.value}</option>
  ));
  
  return (
    <AuthLayout
      title={"Set Security Question"}
      subtitle={
        "To keep your account secured, create 2 security questions and answers"
      }
    >
      <div className="securityQxn">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Select
              isDisabled={isSubmitting}
              name="firstQuestion"
              placeholder="Select a question"
              bgColor="white"
              color="black"
              mb={"5px"}
              iconColor="#007e99"
            >
              {option}
            </Select>
            <FormInput
              name="firstAnswer"
              placeholder={"Enter answer"}
              autoFocus={true}
            />

            <Select
              isDisabled={isSubmitting}
              name="secondQuestion"
              placeholder="Select a question"
              bgColor="white"
              color="black"
              mt={"12px"}
              mb={"5px"}
              iconColor="#007e99"
            >
              {option}
            </Select>
            <FormInput
              name="secondAnswer"
              placeholder={"Enter answer"}
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
      </div>
    </AuthLayout>
  );
}

export default SecurityQuestion;
