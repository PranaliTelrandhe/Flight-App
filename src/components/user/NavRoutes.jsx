import React from "react";
import{BrowserRouter,Routes,Route} from'react-router-dom'
import Navbar from "../user/Navbar";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import FlightSearch from "../flight/FlightSearch";
import Support from "../support/Support";
import MyAccount from "../account/MyAccount";
import Country from "../country/Country";
import SignUp from "../Pages/SignUp";
import CancelBooking from "../cancel/CancelBooking";

import ImageSlider from "../ImageSlider";
import ModifySearchDetails from "../modify/ModifySearchDetails";
import DateCarousel from "../modify/DateCarousel";


import TravellerDetails from "../flight_details/TravellerDetails";

const NavRoutes = () =>{

    return(
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                <Route index element={<ImageSlider/>}></Route>
                <Route path='/login' element={<Login/>}></Route>    
                <Route path='/register' element={<Register/>}></Route>
                <Route  path='/flight' element={<FlightSearch/>}/>  
                <Route  path='/support' element={<Support/>}/> 
                <Route path='/signup' element={<SignUp/>}></Route> 
                <Route path='/account' element={<MyAccount/>}/> 
                <Route path='/cancelbooking' element={<CancelBooking/>}/>
                <Route path='/modifybooking' element={<ModifySearchDetails/>}/>     
                <Route path='/flightdetails' element={<TravellerDetails/>}/>
                <Route path='/modifybooking' element={<DateCarousel/>}/> 
                <Route path='/country' element={<Country/>}/>
                </Route> 
            </Routes>
            
         </BrowserRouter>
    );
}

export default NavRoutes;