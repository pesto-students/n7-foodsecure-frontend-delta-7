

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';



function WelcomePage(props) {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">FoodSecure</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#aboutUs">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/register">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>



      <div className="p-3 horizontal-center">
        <div style={{ marginTop: '120px', fontSize: '60px', fontWeight: '600' }}>
          Food Secure
        </div>

        <div style={{ fontSize: '30px', marginTop: '20px' }}>Donate Now</div>

        <div style={{ maxWidth: '75%', fontSize: '24px' }} className="horizontal-center">
          Food Secure is a platform to connect NGO's with Restaurant to donate food or to distribute food at a minimal cost, which helps restaurant owner recover there cost and NGO's to get food at a minimal price
        </div>

        <div style={{ marginBottom: '100px', marginTop: '60px' }}>
          <Link to="/register">
            <button style={{ width: '300px', cursor: 'pointer' }} className="primary-button" type="submit">Sign Up</button>
          </Link>

        </div>

      </div>

      {/* About Us */}
      <div id="aboutUs" style={{ marginTop: '0px', height: '300px', backgroundColor: '#ba99e7' }}>

        <div className="heading horizontal-center text-black pt-4">
          About Us
        </div>

        <div className="mt-2 horizontal-center" style={{ maxWidth: '75%', fontSize: '24px' }}>
          We connect NGO's with Restaurant to donate food or to distribute food at a minimal cost, which helps restaurant owner recover there cost and NGO's to get food at a minimal price
        </div>

        <div>

        </div>

      </div>

    </div>
  )

}

export default WelcomePage;