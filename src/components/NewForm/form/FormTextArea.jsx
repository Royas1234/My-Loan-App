import React from "react";
import {
 FormControl,
 FormLabel,
 Textarea,
 FormErrorMessage,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function FormTextArea({ label, name, ...rest }) {
 const {
  register,
  formState: { isSubmitting, errors },
 } = useFormContext();
 const error = Array.isArray(errors[name])
  ? // @ts-ignore
    errors[name].join(", ")
  : errors[name]?.message || errors[name];

 return (
  <FormControl isInvalid={Boolean(error)}>
   <FormLabel>{label}</FormLabel>
   <Textarea isDisabled={isSubmitting} {...register(name)} {...rest} />
   <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
 );
}
