import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { postData } from '../services/service-call';
import { ROUTES } from '../config';
import { alertService } from '../_services/alert.service';
import AppsIcon from '@material-ui/icons/Apps';



function PickUpRequest(props) {


    const history = useHistory();

    let [foodItemCount, setFoodItemCount] = useState(1);

    const formik = useFormik({
        initialValues: {

            number_of_mealss: '',
            prepared_time: '',
            expiry_time: '',
            description: '',
            price: '',
            food_items: [
                ...Array.from(Array(10).keys()).map(() => {
                    return {
                        item_name: '',
                        quantity: null
                    }
                })
            ]
        },
        validationSchema: Yup.object({
            number_of_meals: Yup.string()
                .required('This is required'),
            prepared_time: Yup.string()
                .required('This is required'),
            expiry_time: Yup.string()
                .required('This is required'),
            price: Yup.string()
                .required('This is required'),
            description: Yup.string()
                .required('This is required'),
            // food_items: Yup.array().of(
            //     Yup.object().shape({
            //         item_name: Yup.string(),
            //         quantity: Yup.string()
            //     })
            // )
        }),
        onSubmit: async values => {
            console.log(values);
            debugger

            const result = await postData({
                url: ROUTES.pickupRequest, body: {
                    "number_of_meals": values.number_of_meals,
                    "price": values.price,
                    // "description" : values.description,
                    "prepared_time": new Date(values.prepared_time),
                    "expiry_time": new Date(values.expiry_time),
                    "food_items": JSON.stringify(values.food_items)
                }
            });
            
            alertService.success('Request added successfully', { autoClose: true, keepAfterRouteChange: true })
            history.push('dashboard');
        },
    });

    const addFoodItem = () => {
        setFoodItemCount((state) => {
            if (state >= 10) {
                alertService.warn('Cannot add more than 10 food items');
                return state;
            }
            return state + 1;
        })
    }

    const removeFoodItem = (index) => {

    }



    return (
        <div className="container-fluid">

            <div className="row col-md-12 sign-up-container">

                <div className="heading">Food Details</div>


                <div>
                    <form onSubmit={formik.handleSubmit}>

                        <div className="row">

                            <div className="col">
                                <label htmlFor="number_of_meals">Number of Meals</label>
                                <input
                                    id="number_of_meals"
                                    placeholder=""
                                    name="number_of_meals"
                                    type="number"
                                    className="form-control"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.number_of_meals}
                                />
                                <span>{formik.touched.number_of_meals && formik.errors.number_of_meals ? (
                                    <div>{formik.errors.number_of_meals}</div>
                                ) : null}</span>
                            </div>

                            <div className="col">
                                <label htmlFor="prepared_time">Prepared Time</label>
                                <input
                                    id="prepared_time"
                                    name="prepared_time"
                                    type="datetime-local"
                                    placeholder="prepared_time"
                                    className="form-control"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.prepared_time}
                                />
                                <span>{formik.touched.prepared_time && formik.errors.prepared_time ? (
                                    <div>{formik.errors.prepared_time}</div>
                                ) : null}</span>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col">
                                <label htmlFor="expiry_time">Expiry Time</label>
                                <input
                                    id="expiry_time"
                                    placeholder=""
                                    name="expiry_time"
                                    type="datetime-local"
                                    className="form-control"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.expiry_time}
                                />
                                <span>{formik.touched.expiry_time && formik.errors.expiry_time ? (
                                    <div>{formik.errors.expiry_time}</div>
                                ) : null}</span>
                            </div>

                            <div className="col">
                                <label htmlFor="description">Description</label>
                                <input
                                    id="description"
                                    name="description"
                                    type="text"
                                    placeholder=""
                                    className="form-control"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}
                                />
                                <span>{formik.touched.description && formik.errors.description ? (
                                    <div>{formik.errors.description}</div>
                                ) : null}</span>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col">
                                <label htmlFor="price">Price</label>
                                <input
                                    id="price"
                                    placeholder=""
                                    name="price"
                                    type="number"
                                    className="form-control"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.price}
                                />
                                <span>{formik.touched.price && formik.errors.price ? (
                                    <div>{formik.errors.price}</div>
                                ) : null}</span>
                            </div>

                            <div className="col">

                            </div>

                        </div>

                        {
                            Array.from(Array(foodItemCount).keys()).map((ind, index) => {

                                return (<div key={index} className="row">
                                    <div className="col">

                                        <label htmlFor={`food_items[${index}].item_name`}>Item Name</label>
                                        <input
                                            id={`food_items[${index}].item_name`}
                                            placeholder=""
                                            name={`food_items[${index}].item_name`}
                                            type="text"
                                            className="form-control"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.food_items[index].item_name}
                                        />
                                        {/* <span>{formik.touched.food_items && formik.errors.food_items && formik.touched.food_items[index] && formik.errors.food_items[index]?.item_name ? (
                                            <div>This is required</div>
                                        ) : null}</span> */}


                                    </div>

                                    <div className="col">

                                        <label htmlFor={`food_items[${index}].quantity`}>Price</label>
                                        <input
                                            id={`food_items[${index}].quantity`}
                                            placeholder=""
                                            name={`food_items[${index}].quantity`}
                                            type="number"
                                            className="form-control"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.food_items[index].quantity}
                                        />
                                        {/* <span>{formik.touched.food_items && formik.errors.food_items && formik.touched.food_items?.[index] && formik.errors.food_items[index]?.quantity ? (
                                            <div>This is required</div>
                                        ) : null}</span> */}

                                    </div>

                                    <div className="col">
                                        <div onClick={() => addFoodItem()} style={{paddingTop:'25px'}}>
                                            <span style={{fontSize:'50px', cursor:'pointer'}} class="material-icons-outlined">
                                                add
                                            </span>
                                        </div>
                                        

                                        {/* {
                                            index >= 1 &&
                                            <div onClick={() => removeFoodItem(index)} style={{paddingTop:'25px'}}>
                                            <span style={{fontSize:'50px', cursor:'pointer'}} class="material-icons-outlined">
                                                remove
                                            </span>
                                        </div>
                                        } */}
                                    </div>
                                </div>)
                            })
                        }

                        <div className="row mt-3">
                            <div className="col mt-2 d-flex justify-content-start">
                                <button className="primary-button" type="submit">Submit</button>
                            </div>
                        </div>

                        {/* <div>
                            {
                                JSON.stringify(formik.errors)
                            }
                        </div> */}

                    </form>
                </div>

            </div>
        </div>
    );
}

export default PickUpRequest;