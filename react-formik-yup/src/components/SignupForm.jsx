import "./signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors.email);
  return (
    <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Your name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name..."
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}
        <label htmlFor="email">Email address: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <p className="errorMsg">{formik.errors.email}</p>
        )}
        <label htmlFor="phone">Phone number: </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter your phone number..."
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && (
          <p className="errorMsg">{formik.errors.phone}</p>
        )}
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password..."
          value={formik.values.password}
          onChange={formik.handleChange}
          autoComplete="on"
        />
        {formik.errors.password && (
          <p className="errorMsg">{formik.errors.password}</p>
        )}
        <label htmlFor="confirmedPassword">Confirm Password: </label>
        <input
          type="password"
          name="confirmedPassword"
          id="confirmedPassword"
          placeholder="Confirm your password..."
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          autoComplete="on"
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg">{formik.errors.confirmedPassword}</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default SignupForm;
