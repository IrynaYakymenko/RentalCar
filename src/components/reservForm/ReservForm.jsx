import { Field, Form, Formik } from "formik";
import React from "react";
import { sendReservation } from "../../services/mockAPI";
import toast from "react-hot-toast";
import s from "./ReservForm.module.css";

const ReservForm = () => {
  const handleSubmit = async (values, options) => {
    try {
      await sendReservation(values);
      toast.success("Reservation sent successfully!");
      options.resetForm();
    } catch (error) {
      toast.error(`Error submitting form ${error.message}`);
    }
  };
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };
  return (
    <div className={s.container}>
      <p className={s.heading}>Book your car now</p>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <Field
            className={s.input}
            type="date"
            name="date"
            placeholder="Booking date"
          />
          <Field
            as="textarea"
            className={s.input}
            type="text"
            name="comment"
            placeholder="Comment"
            row={3}
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
