/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../Components/Navbar/Landinghome.css';

import landing from '../../../src/imgaes/Landingimg.png';

const Landinghome = () => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto"></div>

            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1 className="text-center">
                Welcome to <strong className="brand-name">LandKit</strong>
              </h1>
              <h1 className="text-center">Developed Anything</h1>

              <h2 className="my-3 text-center text2">
                Build Beautiful modern, website with flexible Bootstrap
                components built from scratch.
              </h2>
              <div className="ButtonAll">
                <div className="mt-3 center">
                  <button type="button" class="btn btn-primary float-middle">
                    View All Pages
                  </button>

                  <button type="button" class="btn ml-4 btn-secondary">
                    Documents
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={landing} className="img-fluid" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landinghome;
