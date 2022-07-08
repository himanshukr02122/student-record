import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Dashboard from "../containers/student";
import AddStudent from "../containers/student/addStudent";



const AppRoutes =()=> {
    return (
        <Suspense>
          <Router>
            <Routes>
                <Route  element={<Dashboard />} path="/" exact={true} />
                <Route  element={<AddStudent />} path="/add-student" exact={true} />
            </Routes>    
          </Router>  
        </Suspense>
    )

}
export default AppRoutes;