import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import clientAxios from "./config/axios";

import Patients from "./components/Patients"
import AddAppointment from "./components/AddAppointment"
import GetAppointmentById from "./components/GetAppointmentById"


function App() {

  // State
   const [appointments, storeAppointments]= useState([]);
   const [consult, storeConsult] = useState(true);

   useEffect(() => {

    if(consult) {
      const callAPI = () => {
        clientAxios.get("/patients")
          .then(response => {
            storeAppointments(response.data);
            storeConsult(false);
          })
          .catch(error => {
            console.log(error);
          })
      };
  
      callAPI();
    }
     
   }, [consult]);

  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          component={() => <Patients appointments={appointments} />}
        />

      <Route
          exact path="/add"
          component={() => <AddAppointment storeConsult={storeConsult}/>}
        />
      <Route
          exact path="/appointment/:id"
          render={(props) => {
            const appointment = appointments.filter(element => element._id === props.match.params.id);
            return (<GetAppointmentById 
              appointment={appointment[0]}
               storeConsult={storeConsult}/>)
          }}
      />
      </Switch>
    </Router>
  );
}

export default App;
