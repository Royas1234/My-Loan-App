import React from "react";
import {
 FormControl,
 FormErrorMessage,
 FormLabel,
 Input,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const NewFormInput = ({ label, name, placeholder, type, ...rest }) => {
 const {
  register,
  formState: { isSubmitting, errors },
 } = useFormContext();
 const error = Array.isArray(errors[name])
  ? errors[name].join(", ")
  : errors[name]?.message || errors[name];

 return (
  <FormControl isInvalid={Boolean(error)} mb="8px">
   <FormLabel m={0} fontSize={"14px"} padding="2px" color="#00151a">
    {label}
   </FormLabel>
   <Input
    type={type}
    isDisabled={isSubmitting}
    {...register(name)}
    {...rest}
    placeholder={placeholder}
    bgColor="white"
    outline={"none"}
    color="black"
   />
   <FormErrorMessage m={0} fontStyle="italic">
    {error}
   </FormErrorMessage>
  </FormControl>
 );
};

export default NewFormInput;
