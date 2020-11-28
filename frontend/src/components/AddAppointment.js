import React, {Fragment, useState} from 'react';
import {Link, withRouter} from "react-router-dom"

import clientAxios from "../config/axios";

const AddAppointment = (props) => {

    const [appointment, storeAppointment] = useState({
        name:"",
        owner:"",
        date:"",
        hour:"",
        symptoms:""
    })

    const updateState = e => {
       storeAppointment({
           ...appointment,
           [e.target.name]: e.target.value

       })
    }

    const createNewDate = e => {
        e.preventDefault();

        clientAxios.post("/patients", appointment)
            .then(respone => {
                console.log(respone);
                props.storeConsult(true);
                props.history.push("/");
            })
    }
    return (
        <Fragment>
            <h1 className="my-5 ">Add appointment</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Go back</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                    <form onSubmit={createNewDate} className="bg-white p-5 bordered">
                        <div className="form-group">
                            <label htmlFor="name">Pet name</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="name" 
                                name="name" 
                                placeholder="Pet name" 
                                onChange={updateState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="owner">Owner</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="owner" 
                                name="owner" 
                                placeholder="Owner" 
                                onChange={updateState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input 
                                type="date" 
                                className="form-control form-control-lg" 
                                id="date" 
                                name="date"  
                                onChange={updateState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="hour">Hour</label>
                            <input 
                                type="time" 
                                className="form-control form-control-lg" 
                                id="hour" 
                                name="hour"  
                                onChange={updateState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="symptoms">Symptoms</label>
                            <textarea 
                                className="form-control" 
                                name="symptoms" 
                                rows="6"
                                onChange={updateState}
                            ></textarea>
                        </div>


                        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Add appointment"  />
                    </form>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}
 
export default withRouter(AddAppointment);