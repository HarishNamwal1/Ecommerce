import React from "react";
import {NavLink} from "react-router-dom";

function Footer(){
    return(
        <div class="card">
  <div class="card-body text-center">
    <h5 class="card-title">Footer</h5>
    <p class="card-text">This is a Footer Tab</p>
    <NavLink to="/" className="btn btn-primary">Go to Home</NavLink>
  </div>
</div>
    )
}

export default Footer;