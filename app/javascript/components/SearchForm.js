import React, { Component } from 'react'
import Home from './pages/Home'
import styled from 'styled-components'


const Select = styled.select`
  width: 20%;
  font-weight: 900;
  letter-spacing: 2px;
  padding: 10px;
  text-align: center;
  background-color: rgba(251, 132, 7, 0.5)
`

const Input = styled.input`
  width: 20%;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 2px;
  padding: 11px;
  background-color:#FB8407;
  border-color: rgba(251, 132, 7, 1.5)
  color: black;
  border-style: none;   
`


class SearchForm extends Component {
  constructor(props) {
    super()
    this.state = {};
  }
  myChangeHandler = (event) => {
    this.setState({});
  }
  render() {
    return (
      <form>
        <Select name="city">
          <option value="City">City</option>
          <option value="">Barcelona</option>
          <option value="">Bilbao</option>
          <option value="">Madrid</option>
          <option value="">Valencia</option>
        </Select>
      
      <Select name="price">
        <option value="Price">Price</option>
        <option value="">Less than 200.000</option>
        <option value="">200.000 - 300.000</option>
        <option value="">300.000 - 400.000</option>
        <option value="">More than 500.000</option>
      </Select>
    
    <Select name="m2">
      <option value="m2">M2</option>
      <option value="">Less tha 50 m2</option>
      <option value="">50 - 100 m2</option>
      <option value="">More than 100m2</option>
    </Select>
  
  <Select name="rooms">
    <option value="rooms">Rooms</option>
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4+</option>
    
  </Select>
  <Input type="submit" value="Find"></Input>
</form>
    );
  }
}

export default SearchForm