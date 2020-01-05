import React, { Component } from 'react'
import main from '../../assets/images/main.jpg'

const Header = () => {
    return (
        <section className="home-section--1">
            <div className="container">
              <div className="row">
                <div className="col col-sm-12 col-m-4">
                  <div className="pt-4 mt-4 text-center">
                    <h1>Flat App</h1>
                      <p>Find your perfect flat match</p>
                  </div>
                </div>
                <div className ="col col-sm-12 col-m-8">
                    <div className="pt-4 mt-4 text-center">
                      <img width="600" height="400" className="img-fluid" src={main}/>
                    </div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default Header