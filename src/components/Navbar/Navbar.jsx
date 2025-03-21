import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Navbar.module.css'
import Clogo from './flower1.svg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand styles.inter-title" href="#">
        <img className={styles.Clogo} src={Clogo} alt="LOGO" />

          Corona Tracker
        
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
