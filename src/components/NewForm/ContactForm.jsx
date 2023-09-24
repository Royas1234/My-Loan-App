import React, { useState } from "react";
import { Button, Container, Stack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./form/FormInput";
import FormTextArea from "./form/FormTextArea";
import { nanoid } from "nanoid";
import axios from "axios";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const userSchema = object().shape({
 name: string().required("Name is required"),
 email: string().email().required("Email is required"),
 subject: string().nullable(),
 message: string().required("Message is required"),
});

function ContactForm() {
 const [messsage, setMessage] = useState("");
 const methods = useForm({ resolver: yupResolver(userSchema) });
 const onSubmit = async (data) => {
  const values = { ...data, id: nanoid() };
  const response = await axios.post(
   "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
   values
  );
  if (response.status === 201) {
   setMessage("Thank you for contacting us, we'll get back to you soon.");
  }
  methods.reset();
  setTimeout(() => {
   setMessage("");
  }, 10000);
 };

 return (
  <Container
   bg=" #242424"
   color="rgba(255, 255, 255, 0.87)"
   borderRadius={5}
   padding="40px"
   marginX="auto"
   marginY={50}
  >
   <p style={{ color: "green" }}>{messsage}</p>
   <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
     <Stack>
      <FormInput name="name" label="Name" />
      <FormInput name="email" label="Email" />
      <FormInput name="subject" label="Subject" />
      <FormTextArea name="message" label="Message" resize="none" />
      <Button
       color="#242424"
       type="submit"
       isLoading={methods.formState.isSubmitting}
      >
       Submit
      </Button>
     </Stack>
    </form>
   </FormProvider>
  </Container>
 );
}

export default ContactForm;
