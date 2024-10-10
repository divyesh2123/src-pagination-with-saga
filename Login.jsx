import React from 'react'
import TextField  from '@mui/material/TextField'
import * as yup from 'yup';
import {useFormik} from 'formik'
import { Button } from '@mui/material';
import {useDispatch} from 'react-redux'
import { LoginRequest } from './slice/registration';
import { useNavigate } from 'react-router-dom';

export default function Login() {


  const dis = useDispatch();
  const nav1 = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required")
    
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
     
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dis(LoginRequest(values));
      nav1("/User");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
