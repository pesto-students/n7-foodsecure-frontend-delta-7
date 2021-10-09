import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useHistory } from 'react-router-dom';
// import { getData } from '../services/service-call';
// import { ROUTES } from '../config';
import { alertService } from '../_services/alert.service';
import AppsIcon from '@material-ui/icons/Apps';



function PickUpRequest(props) {


    // const history = useHistory();

    let [foodItemCount, setFoodItemCount] = useState(1);

    const formik = useFormik({
        initialValues: {

            number_of_meal: '',
            prepared_time: '',
            expiry_time: '',
            description: '',
            price: '',
            foodItems: [
                ...Array.from(Array(foodItemCount).keys()).map(() => {
                    return {
                        item_name: '',
                        quantity: 0
                    }
                })
            ]
        },
        validationSchema: Yup.object({
            number_of_meal: Yup.string()
                .required('This is required'),
            prepared_time: Yup.string()
                .required('This is required'),
            expiry_time: Yup.string()
                .required('This is required'),
            price: Yup.string()
                .required('This is required'),
            description: Yup.string()
                .required('This is required'),
            foodItems: Yup.array().of(
                Yup.object().shape({
                    item_name: Yup.string().required('This is required'),
                    quantity: Yup.string().required('This is required')
                })
            )
        }),
        onSubmit: async values => {

            // need to integrate with API here

            console.log(values);

            //abpve values will contain
           
        },
    });

    const addFoodItem = () => {
        setFoodItemCount((state) => {
            if(state >= 10){
                alertService.warn('Cannot add more than 10 food items');
                return state;
            }
            return state + 1;
        })
    }



    return (
        <div className="container-fluid">

            <div className="row col-md-12 sign-up-container">

                <div className="heading">Food Details</div>


                <div>
                    <form onSubmit={formik.handleSubmit}>

                        <div className="row">

                            <div className="col">
                                <label htmlFor="number_of_meal">Number of Meals</label>
                                <input
                                    id="number_of_meal"
                                    placeholder=""
                                    name="number_of_meal"
                                    type="number"
                                    className="form-control"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.number_of_meal}
                                />
                                <span>{formik.touched.number_of_meal && formik.errors.number_of_meal ? (
                                    <div>{formik.errors.number_of_meal}</div>
                                ) : null}</span>
                            </div>

                            <div className="col">
                                <label htmlFor="prepared_time">Prepared Time</label>
                                <input
                                    id="prepared_time"
                                    name="prepared_time"
                                    type="time"
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
                                    type="time"
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
                            Array.from(Array(foodItemCount).keys()).map((index) => {
                                
                                return (<div key={index} className="row">
                                    <div className="col">

                                        <label htmlFor={`foodItems[${index}].item_name`}>Item Name</label>
                                        <input
                                            id={`foodItems[${index}].item_name`}
                                            placeholder=""
                                            name={`foodItems[${index}].item_name`}
                                            type="text"
                                            className="form-control"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.foodItems[index].item_name}
                                        />
                                        <span>{formik.touched.foodItems && formik.errors.foodItems && formik.touched.foodItems[index] && formik.errors.foodItems[index]?.item_name ? (
                                            <div>This is required</div>
                                        ) : null}</span>


                                    </div>

                                    <div className="col">

                                        <label htmlFor={`foodItems[${index}].quantity`}>Price</label>
                                        <input
                                            id={`foodItems[${index}].quantity`}
                                            placeholder=""
                                            name={`foodItems[${index}].quantity`}
                                            type="number"
                                            className="form-control"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.foodItems[index].quantity}
                                        />
                                        <span>{formik.touched.foodItems && formik.errors.foodItems && formik.touched.foodItems?.[index] && formik.errors.foodItems[index]?.quantity ? (
                                            <div>This is required</div>
                                        ) : null}</span>

                                    </div>

                                    <div className="col">
                                        <label>Add</label>
                                        <div onClick={() => addFoodItem()}>
                                            <AppsIcon style={{ fontSize: 30 }} className="svg_icons"></AppsIcon>
                                        </div>
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