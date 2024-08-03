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
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    // Form validation
    initialValues: {
      firstName: "",
      email: "",
      date: "",
      type: "hireMe",
      comment: "",
      phone: "",
    },
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      date: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });

  // Show an alert when the form is submitted successfully
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      // Reset the form if the response is successful
      if (response.type === "success") formik.resetForm();
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#495E57"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          <h1 className="bigHeader" style={{ color: "#ffffff" }}>
            Reservations
          </h1>
        </Heading>
        <Box p={6} rounded="md" w="100%">
          {/* Connect the form onSubmit prop with Formik's handleSubmit function */}
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.phone && formik.touched.phone}
              >
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  {...formik.getFieldProps("phone")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              {/* <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")} // Make the Input components from Chakra UI controlled components
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl> */}
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormControl
                isInvalid={!!formik.errors.date && formik.touched.date}
              >
                <FormLabel htmlFor="type">Date</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  {...formik.getFieldProps("date")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              {/* Show Date myyyy*/}
              <FormControl>
                <FormLabel htmlFor="type">Time</FormLabel>
                <Select
                  id="time"
                  name="time"
                  {...formik.getFieldProps("time")} // Make the Input components from Chakra UI controlled components
                >
                  <option value="hireMe">6PM</option>
                  <option value="7PM">7PM</option>
                  <option value="8PM">8PM</option>
                </Select>
              </FormControl>
              {/* Show Time myyyy*/}
              <FormControl>
                <FormLabel htmlFor="type">Number of Guests</FormLabel>
                <Select
                  id="guests"
                  name="guests"
                  {...formik.getFieldProps("type")} // Make the Input components from Chakra UI controlled components
                >
                  <option value="hireMe">1</option>
                  <option value="1">2</option>
                  <option value="3">3</option>
                </Select>
              </FormControl>
              {/* Show occasion myyyy*/}
              <FormControl>
                <FormLabel htmlFor="type">Occasion</FormLabel>
                <Select
                  id="occasion"
                  name="occasion"
                  {...formik.getFieldProps("type")} // Make the Input components from Chakra UI controlled components
                >
                  <option value="hireMe">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Birthday">Birthday</option>
                </Select>
              </FormControl>
              {/* Show occasion myyyy*/}
              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              {/* Show a loading indicator */}
              <Button
                type="submit"
                colorScheme="yellow"
                width="full"
                isLoading={isLoading}
                backgroundColor="#F4CE14"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
