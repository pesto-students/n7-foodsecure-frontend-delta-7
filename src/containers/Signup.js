import React, { useEffect } from 'react';


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import { useFormik } from 'formik';
import { alertService } from '../_services/alert.service';


import * as Yup from 'yup';
import { postData } from '../services/service-call';
import { ROUTES } from '../config';
import { useHistory } from 'react-router-dom';


function Signup(props) {

  const history = useHistory();


  const auth = getAuth();



  useEffect(() => {
    function initialize() {
      const google = window.google;
      var input = document.getElementById('location');
      var autocomplete = new google.maps.places.Autocomplete(input);


      autocomplete.addListener('place_changed', () => {
        let place = autocomplete.getPlace();

        const { lat: getLat, lng: getLng } = place.geometry.location;

        const lat = getLat();
        const lng = getLng();
      })
    }

    initialize();
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      // role: '',
      password: '',
      confirm_password: '',
      location: 'Durg',
      role: ""
    },
    validationSchema: Yup.object({

      //     .required('This field is required'),
      email: Yup.string().email('Invalid email address').required('This field is required'),
      // user_name: Yup.string().max(20, 'Must be 20 characters or less')
      //     .required('This field is required'),
      password: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('This field is required'),
      confirm_password: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('This field is required'),
      name: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('This field is required'),
      role: Yup.string()
        .required('This field is required').nullable(),
      location: Yup.string()
        .required('This field is required'),
    }),
    onSubmit: async values => {
      if (values.password !== values.confirm_password) {
        alertService.error('Password and confirm passsword should be of same value', { autoClose: true, keepAfterRouteChange: true })
        return
      }


      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {

          const user = userCredential.user;
          debugger


          //{
          // access_token
          // }

          // {
          //   role:,
          // }


          // request info
          // {
          //   location: {
          //     lat: lat,
          //     long: long
          //   },
          //   userInfo : {
          //  ...role
          //   }
          // }

          //response body
          // {
          //   msg : 'Success',
          //   statusCode: 200
          // }

        })
        .catch((error) => {
          debugger
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      // const result = await postData({url: ROUTES.registerUser, body: values});
      // if(result.statusCode === 200){
      //     alertService.success('Registered Successfully', { autoClose:true, keepAfterRouteChange: true })
      //     history.push('/login');
      // }else {
      //     alertService.error(result.data.msg, { autoClose:true, keepAfterRouteChange: true })
      // }
    },
  });

  return (
    <div className="container">



      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col">
            <label htmlFor="name">Name</label>
            <input className="form-control"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <span>{formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}</span>
          </div>

        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" className="form-control" onChange={formik.handleChange}
              onBlur={formik.handleBlur} value={formik.values.role}>
              <option value={""}>---Select---</option>
              <option value="NGO">NGO</option>
              <option value="RESTAURANT">Restaurant</option>
             
            </select>

            <span>{formik.touched.role && formik.errors.role ? (
              <div>{formik.errors.role}</div>
            ) : null}</span>
          </div>

         

        </div>

        <div className="row">

          <div className="col">
            <label htmlFor="location">Location</label>
            <input id="location" name="location" onChange={formik.handleChange}
              onBlur={formik.handleBlur} className="form-control" type="text" id="location" />

            <span>{formik.touched.location && formik.errors.location ? (
              <div>{formik.errors.location}</div>
            ) : null}</span>
          </div>
          

        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
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
            <label htmlFor="email">Password</label>
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

        <div className="row">
        <div className="col">
            <label htmlFor="email">Reenter Password</label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm_password}
            />
            <span>{formik.touched.confirm_password && formik.errors.confirm_password ? (
              <div>{formik.errors.confirm_password}</div>
            ) : null}</span>
          </div>
        </div>



        <div className="row">
          <div className="col mt-3 d-flex justify-content-center">
            <button className="btn btn-primary" type="submit">Register</button>
          </div>
        </div>


      </form>

    </div>
  );
}

export default Signup;