import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response){
      if(response.type == "success") {
        onOpen("success", response.message);
      } else {
        onOpen("error", response.message);
      }
      formik.resetForm();
    } 
  }, [response])
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string().required("Required").min(25, "Must be at least 25 characters"),
    }),
    onSubmit: (values) => {
      submit("/api/contact", values);
    },
  });

  return (
    <FullScreenSection isDarkBackground backgroundColor="#512DA8" py={16} spacing={8} id="contactme-section">
      <VStack p={6} alignItems="flex-start">
        <Heading as="h1">
          Contact me
        </Heading>
        <Box p={6} rounded="md" width={{ base: "80vw", md: "60vw" }} height={{ base: "80vh", md: "60vh" }} >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* First Name */}
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input {...formik.getFieldProps("firstName")} id="firstName" />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              {/* Email */}
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input {...formik.getFieldProps("email")} id="email" type="email" />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              {/* Type */}
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...formik.getFieldProps("type")} id="type">
                  <option style={{color:"black"}} value="hireMe">Freelance project proposal</option>
                  <option style={{color:"black"}} value="openSource">Open source consultancy session</option>
                  <option style={{color:"black"}} value="other">Other</option>
                </Select>
              </FormControl>

              {/* Comment */}
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea {...formik.getFieldProps("comment")} id="comment" height={250} />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              {/* Submit Button */}
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
