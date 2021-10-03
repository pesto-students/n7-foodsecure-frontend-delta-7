import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';


function Login(props) {

  const history = useHistory();

  const formik = useFormik({
    initialValues: {

      password: '',
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required'),
    }),
    onSubmit: async values => {

      const auth = getAuth();
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          localStorage.setItem('token', user.accessToken);
          localStorage.setItem('role', 'NGO');  
          history.push('/dashboard');

          
          // alert(JSON.stringify(user));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });


      // const result = await postData({url: ROUTES.loginUser, body: values});
      // if(result.statusCode === 200){
      //     alertService.success('Logged in successfully', { autoClose:true, keepAfterRouteChange: true })
      //     localStorage.setItem('token', result.data.token);
      //     store.dispatch({
      //         type: 'LOGIN',
      //         token: result.data.token
      //     });
      //     history.push('/home');
      // }else if(result.statusCode === 401){
      //     alertService.error(result.data.msg, { autoClose:true, keepAfterRouteChange: true })
      // }
    },
  });



  return (
    <div className="container">

      <form onSubmit={formik.handleSubmit}>

        <div className="row">

          <div className="col">
            <label htmlFor="user_name">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_name}
            />
            <span>{formik.touched.user_name && formik.errors.user_name ? (
              <div>{formik.errors.user_name}</div>
            ) : null}</span>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
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

        <div className="row mt-3">
          <div className="col mt-2 d-flex justify-content-center">
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </div>

      </form>

    </div>
  );
}

export default Login;