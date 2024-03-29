import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory, Link } from 'react-router-dom';
import { getData } from '../services/service-call';
import { ROUTES } from '../config';
import env from 'react-dotenv'
import { alertService } from '../_services/alert.service';


function Login(props) {

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      password: 'pesto',
      email: 'pesto@pesto.tech',
    },
    validationSchema: Yup.object({
      email: Yup.string().email()
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required'),
    }),
    onSubmit: async values => {

      if (values.password === 'pesto' && values.email === 'pesto@pesto.tech'){
        values.password = 'pesto1';
      }

      const auth = getAuth();
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async (userCredential) => {

          const user = userCredential.user;
          localStorage.setItem('token', user.accessToken);
          const result = await getData({
            url: ROUTES.login
          });

          localStorage.setItem('role', result.role);
          alertService.success('Logged in successfully', { autoClose: true, keepAfterRouteChange: true })
          if(result.role === 'ngo'){
            history.push('/ngo-dashboard');
          }else if(result.role === 'restaurant'){
            history.push('/dashboard');
          }

        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          alertService.error(`Error: ${errorMessage}`, { autoClose: true, keepAfterRouteChange: true })
        });
    },
  });



  return (
    <div className="container-fluid row">

      <div className="col-md-6 sign-up-container">

        <div className="heading center">Login</div>

        {/* <div>{env.REACT_APP_FIREBASE_API_KEY}</div>

        <div>{process.env.REACT_APP_FIREBASE_API_KEY}</div> */}


        <form onSubmit={formik.handleSubmit}>

          <div className="row">

            <div className="col">
              <input
                id="email"
                placeholder="Email"
                name="email"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <span>{formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}</span>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span>{formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}</span>
            </div>

          </div>

          <div className="row ">
            <div className="col d-flex justify-content-end">
              Forgot Password?
            </div>
          </div>

          <div className="row mt-3">
            <div className="col mt-2 d-flex justify-content-center">
              <button className="primary-button full-width" type="submit">Login</button>
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-start">
              <>{"Don't have an account?  "}&nbsp; <Link to="register"> Sign Up</Link></>
            </div>
          </div>

        </form>


      </div>

      <div className="col-md-6" style={{display:'flex', justifyContent:'center', alignContent:'center', height:'100vh', padding:'70px 20px'}}>
                <img width="100%" height="100%" src="./bg1.png"></img>
      </div>
    </div>
  );
}

export default Login;