import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EmploymentInfo from "./EmploymentInfo";

import UnsuccessfulReport from "./UnsuccessfulReport";
import { useNavigate } from "react-router-dom";
import SideBar from "../../../../../../components/SideBar/SideBar";
import DashboardHeader from "../../../../../../components/SideBar/DashboardHeader";
import {
 Step,
 Stack,
 StepIndicator,
 StepSeparator,
 StepStatus,
 Stepper,
 ThemeProvider,
 extendTheme,
} from "@chakra-ui/react";

const CreatePersonal = () => {
 const back = useState(true);
 const navigate = useNavigate();

 const [activeStep, setActiveStep] = useState(2);

 const handleNext = () => {
  return activeStep < 3 && !(activeStep >= 3) && setActiveStep(activeStep + 1);
 };

 const steps = [
  <PersonalInfo handleNext={handleNext} />,
  <EmploymentInfo />,
  <UnsuccessfulReport />,
 ];

 const backLink = () =>
  activeStep === 0
   ? navigate("/dashboard/portfolio")
   : activeStep <= 2 && !(activeStep < 1) && setActiveStep(activeStep - 1);

 const activeStepText = steps[activeStep];

 const theme = extendTheme({
  colors: {
   myCustomColorScheme: {
    50: "#007e99;",
    100: "#e6f2f5",
    200: "#007e99",
    300: "#007e99",
    400: "#007e99",
    500: "#007e99",
    600: "#007e99",
    700: "#007e99",
    800: "#007e99",
    900: "#007e99",
   },
  },
 });

 return (
  <ThemeProvider theme={theme}>
   <div className="dashboard-wrapper">
    <DashboardHeader back={back} backLink={backLink} />
    <div className="dashboard-body">
     <SideBar />
     <div className="dashboard-pages-wrapper">
      <div className="createPersonal container">
       <div className="createPersonalWrapper">
        <Stack>
         <Stepper
          size="md"
          index={activeStep}
          gap="0"
          mb="20px"
          color="#007e99;"
          colorScheme="myCustomColorScheme"
         >
          {steps.map((step, index) => (
           <Step key={index} gap="0">
            <StepIndicator color="#007e99;">
             <StepStatus />
            </StepIndicator>
            <StepSeparator
             bgColor="#e6f2f5"
             _horizontal={{ ml: "0", height: "2" }}
            />
           </Step>
          ))}
         </Stepper>
        </Stack>
        {activeStepText}
       </div>
      </div>
     </div>
    </div>
   </div>
  </ThemeProvider>
 );
};

export default CreatePersonal;
