import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { sendReservation } from "../../services/mockAPI";
import toast from "react-hot-toast";
import s from "./ReservForm.module.css";

const ReservForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = async (values, options) => {
    try {
      await sendReservation(values);
      toast.success("Reservation sent successfully!");
      options.resetForm();
    } catch (error) {
      toast.error(`Error submitting form ${error.message}`);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        "Email must be a valid email address"
      ),
    date: Yup.date(),
    comment: Yup.string(),
  });

  return (
    <div className={s.container}>
      <p className={s.heading}>Book your car now</p>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <>
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage className={s.error} component="p" name="name" />
          </>
          <>
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage className={s.error} component="p" name="email" />
          </>

          <Field
            className={s.input}
            type="date"
            name="date"
            placeholder="Booking date"
          />
          <Field
            as="textarea"
            className={s.input}
            name="comment"
            placeholder="Comment"
            rows={3}
          />
          <button type="submit" className={s.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReservForm;
