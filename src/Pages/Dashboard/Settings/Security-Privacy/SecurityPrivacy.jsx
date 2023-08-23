import React, { useState } from "react";
import "./SecurityPrivacy.css";
import Select from "react-select";
import { FormProvider, useForm } from "react-hook-form";
import { Button} from "@chakra-ui/react";
// import FilledBtn from "../../../../components/Button/FilledBtn";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import FormInput from "./SecurityForm/FormInput";

/*
 * Interface
 */

const userSchema = Yup.object().shape({
  name: Yup.string().required("The name field is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("The email field is required"),
  password: Yup.string()
    .required("The password field is required")
    .matches(
      /^(?=.*\d).*$/,
      "Password must contain at least 6 characters including a number"
    )
    .min(6, "Password must contain at least 6 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords do not match!"
  ),
  radioButton: Yup.string()
    .oneOf(["true"], "The radio field is required")
    .required("The radio field is required"),
});

const SecurityPrivacy = () => {
  /*
   * Validation
   */
  const methods = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      terms: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors},
    
  } = methods;

  const onSubmit = () => {
    let isValid = Object.keys(errors).length === 0;
        isValid && alert("/successful");
  
  };

  const options = [
    {
      value: "what is your mother's name?",
      label: "What is your Mother's name?",
    },
    {
      value: "what is your father's name?",
      label: "What is your Father's name?",
    },
    { value: "where did you grow up?", label: "Where did you grow up?" },
    {
      value: "what university did you attend?",
      label: "What University did you attend?",
    },
  ];
  const [toggleStates, setToggleStates] = useState([false, false]);

  const toggleBall = (index) => {
    setToggleStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <FormProvider {...methods}>
      <form className="securityPrivacy" onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="prevPass passFlex">
          <h3 htmlFor="Password">Previous Password</h3>
          <div>
            <FormInput
              name="Password"
              type="password"
              placeholder={"Enter full name"}
              autoFocus={true}
            />
          </div>
        </div> */}
        <div className="prevPass passFlex">
          <h3 htmlFor="Password">Previous Password</h3>
          <input type="password" />
        </div>
        <div className="prevPass passFlex">
          <h3 htmlFor="Password">New Password</h3>
          <input type="password" />
        </div>
        <div className="prevPass passFlex">
          <h3 htmlFor="Password">Confirm Password</h3>
          <input type="password" />
        </div>
        <div className="textToggle passFlex">
          <h3>Two factor authentication</h3>
          <div
            className={`toggle ${toggleStates[0] ? "move" : ""}`}
            onClick={() => toggleBall(0)}
          >
            <span className="toggle-ball"></span>
          </div>
        </div>
        <div className="changeSec passFlex">
          <h3 htmlFor="Password">Change security question</h3>
          <form className="changeSecurityQ">
            <Select
              className="select"
              placeholder={"Select question"}
              options={options}
            />
            <div className="mb">
              <input
                placeholder={"Enter answer"}
                {...register("select1", { required: true })}
                type="text"
                id="select1"
              />
              {errors.select1?.type === "required" && (
                <p className="errorMessage">
                  You must select a question and enter an answer
                </p>
              )}
            </div>

            <Select
              className="select"
              placeholder={"Select question"}
              options={options}
            />
            <div>
              <input
                placeholder={"Enter answer"}
                {...register("select2", { required: true })}
                type="text"
                id="select2"
              />
              {errors.select2?.type === "required" && (
                <p className="errorMessage">
                  You must select a question and enter an answer
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="textToggle passFlex">
          <h3>Use security question for sign-in</h3>
          <div
            className={`toggle ${toggleStates[1] ? "move" : ""}`}
            onClick={() => toggleBall(1)}
          >
            <span className="toggle-ball"></span>
          </div>
        </div>
        <Button color="#fff" bgColor="#007e99" type="submit">
          Save Changes
        </Button>
      </form>
    </FormProvider>
  );
};

export default SecurityPrivacy;
