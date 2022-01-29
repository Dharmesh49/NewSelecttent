/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';
import Landinghome from './Landinghome';

const Landings = () => {
  return (
    <div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg  text-xs-center navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <h1 className="LandKitt">Landkit.</h1>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav  ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Landings
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/pages">
                        Pages
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/documents">
                        Documents
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/accounts">
                        Accounts
                      </NavLink>
                    </li>
                  </ul>

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="button"
                    aria-pressed="false"
                    autocomplete="off"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Landinghome />
    </div>
  );
};

export default Landings;
