import React, { Component } from 'react'
import { FaCheckSquare } from "react-icons/fa"
import { FaBed } from "react-icons/fa"
import { FaBath } from "react-icons/fa"
import styled from 'styled-components'

const H4 = styled.h4`
  font-size: 2em;
`
const P = styled.p`
  font-size: 1.5em;
`
const Div = styled.div`
  background-color: rgba(66, 57, 48, 0.2);
  margin-bottom: 10px;
`
const Item = (props) => {
  return(

    <div className="card">
      <img className="card-img-top" src={props.photo} alt="Thumbnail photo" />
        <Div className="card-body">
        <H4 className="card-tilte">{props.city}</H4>
        <P className="card-text">{props.description} <br/> {props.price} |  <FaCheckSquare/>  {props.m2} |  <FaBed/>  {props.rooms} | <FaBath />  {props.bathrooms}</P>
    <a href="https://www.google.es/maps/@40.3565126,-3.7536421,7z" className="btn btn-light float-right">Map</a>
  </Div>
</div>
    
    
  )
}

export default Item