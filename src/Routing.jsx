import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import PrivacyPolicy from './Pages/PrivacyPlcy/PrivacyPolicy';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='home' element={<Home/>} />
                    <Route path='blog' element={<Blog/>} />
                    <Route path='about-us' element={<AboutUs/>} />
                    <Route path='contact-us' element={<ContactUs/>} />
                    <Route path='privacy-policy' element={<PrivacyPolicy/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
