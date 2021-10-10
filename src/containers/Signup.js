import React, { useEffect, useState } from 'react';


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import { alertService } from '../_services/alert.service';


import * as Yup from 'yup';
import { postData } from '../services/service-call';
import { ROUTES } from '../config';
import { useHistory } from 'react-router-dom';


function Signup(props) {

  const history = useHistory();
  const auth = getAuth();
  const [location, setLocation] = useState({});

  useEffect(() => {
    const initializePlaces = () => {
      const google = window.google;
      var input = document.getElementById('location');
      var autocomplete = new google.maps.places.Autocomplete(input);

      autocomplete.addListener('place_changed', () => {
        let place = autocomplete.getPlace();

        if (place.geometry && place.geometry.location) {
          const { lat: getLat, lng: getLng } = place.geometry.location;
          const lat = getLat();
          const lng = getLng();
          let location = {
            lat, lng
          }
          setLocation(location);
        } else {
          alertService.error('Please select location from dropdown', { autoClose: true, keepAfterRouteChange: true })
        }
      })
    }

    initializePlaces();
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      // role: '',
      password: '',
      confirm_password: '',
      location: '',
      role: ""
    },
    validationSchema: Yup.object({

      email: Yup.string().email('Invalid email address').required('This field is required'),
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

      if (!location.lat || !location.lng) {
        alertService.error('Please select location from dropdown', { autoClose: true, keepAfterRouteChange: true })
        return
      }

      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (userCredential) => {

          const user = userCredential.user;

          await postData({
            url: ROUTES.register, body: {
              token: user.accessToken,
              role: values.role.toLowerCase(),
              ...location
            }
          });
          alertService.success('Registered Successfully', { autoClose: true, keepAfterRouteChange: true })
          history.push('/login');


        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;

          alertService.error(`Error: ${errorMessage}`, { autoClose: true, keepAfterRouteChange: true })
        });

    },
  });

  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-6 sign-up-container">

          <div className="heading center">Sign Up</div>

          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col">
                  <input className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Name"
                  />
                  <span>{formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                  ) : null}</span>
                </div>

              </div>

              <div className="row">
                <div className="col">
                  <select placeholder="Role" id="role" name="role" className="form-control" onChange={formik.handleChange}
                    onBlur={formik.handleBlur} value={formik.values.role}>
                    <option value={""}>---Role---</option>
                    <option value="ngo">NGO</option>
                    <option value="restaurant">Restaurant</option>

                  </select>

                  <span>{formik.touched.role && formik.errors.role ? (
                    <div>{formik.errors.role}</div>
                  ) : null}</span>
                </div>



              </div>
 
              <div className="row">

                <div className="col">
                  <input placeholder="Location" id="location" name="location" onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className="form-control" type="text" />

                  <span>{formik.touched.location && formik.errors.location ? (
                    <div>{formik.errors.location}</div>
                  ) : null}</span>
                </div>


              </div>

              <div className="row">
                <div className="col">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
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

              <div className="row">
                <div className="col">
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type="text"
                    placeholder="Confirm password"
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
                  <button className="primary-button full-width" type="submit">Sign Up</button>
                </div>
              </div>

              <div className="row">
                <div className="col d-flex justify-content-start">
                  <>{"Have an account?  "}&nbsp; <Link to="login"> Login</Link></>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;