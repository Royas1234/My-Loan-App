
import AuthLayout from "../../../components/Layout/AuthLayout";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../../components/NewForm/form/FormInput";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";



function SecurityQuestion() {
  const userSchema = Yup.object().shape({
    answerOne: Yup.string().required(
      "You must select a question and enter an answer"
    ),
    answerTwo: Yup.string().required(
      "You must select a question and enter an answer"
    ),
  });

  const methods = useForm({
    resolver: yupResolver(userSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const navigate = useNavigate();

  const location = useLocation();
  const token = location.state?.token ||"hello";
  console.log(location)
  console.log(token)


  const onSubmit = async (data) => {
     const values = {
      jwtToken:token,
      securityQuestion: 
        {
          firstQuestion: data.questionOne,
          firstAnswer: data.answerOne,
          secondQuestion: data.questionTwo,
          secondAnswer: data.answerTwo
        },
      
    };

    try {
      const response = await axios.put(
        // `https://loanwise.onrender.com/api/${token}/security-question`,
        `${process.env.REACT_APP_BACKEND_URL}/account/security-questions`,
        values
      );
      console.log(response.data);
      console.log("Form submitted successfully");
    
      
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
    { value: "What is your mother's name?" },
    { value: "What is your father's name?" },
    { value: "Where did you grow up?" },
    { value: "What university did you attend?" },
  ];

  const option = options.map((item, index) => (
    <option key={index} value={item.value}>
      {item.value}
    </option>
  ));

 
 
 if (!token){
    return<Navigate to = "/create-account" />
 }
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
            name="questionOne"
            placeholder="Select a question"
            bgColor="white"
            color="black"
            mb={"5px"}
            iconColor="#007e99"
            {...register("questionOne")}
          >
            {option}
          </Select>
          <FormInput
            name="answerOne"
            placeholder={"Enter answer"}
            autoFocus={true}
          />

          <Select 
            isDisabled={isSubmitting}
            name="questionTwo"
            placeholder="Select a question"
            bgColor="white"
            color="black"
            mt={"12px"}
            mb={"5px"}
            iconColor="#007e99"
            {...register("questionTwo")}
          >
            {option}
          </Select>
          <FormInput name="answerTwo" placeholder={"Enter answer"} />

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
    </div>
  </AuthLayout>
);
}

export default SecurityQuestion;
