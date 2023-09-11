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
import { useState } from "react";



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
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  
  const [errorState, setErrorState] = useState("")
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state?.token;
  
  const onSubmit = async (data) => {
    const { firstQuestion, firstAnswer, secondQuestion, secondAnswer} = data;
      const values = {
        jwtToken:token,
        securityQuestion:{
          firstQuestion,
          firstAnswer,
          secondQuestion,
          secondAnswer
        }
      };
    try {
     const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/account/security-questions`,
         values
      );
      navigate("/login");
      console.log(response)
    } 
    catch (error) {
      if (error.response) {
        setErrorState(error.response.data.message)
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

 if(!token){
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
      {errorState && (<span style={{ color: "red", marginBottom: "30px"}}>{errorState}</span>)}
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
            {...register("firstQuestion")}
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
            {...register("secondQuestion")}
          >
            {option}
          </Select>
          <FormInput name="secondAnswer" placeholder={"Enter answer"} />

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
