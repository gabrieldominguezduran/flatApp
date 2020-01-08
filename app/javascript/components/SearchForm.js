import React, { Component } from 'react'
import styled from 'styled-components'
import Item from './Item'





const Input = styled.input`
  width: 100%;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 2px;
  padding: 11px;
  border-bottom: 2px solid #000;
  border-radius: 2px;
  
  color: black;
  text-align: center;
  outline: none;   
`


class SearchForm extends Component {
    constructor(){
      super()
      this.state = {
        flat: [],
        sortedFlats: [],
        city: "All",
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        minRooms: 0,
        maxRooms: 0,
        minBath: 0,
        maxBath: 0

      }
  }
  //Get data
  componentDidMount() {
    let flats = this.props.modules(data)
    let maxPrice = Math.max(...flats.map(data => data.price))
    let maxSize = Math.max(...flats.map(data => data.m2))
    
    

    this.setState({
      flats,
      allFlats,
      sortedFlats: flats,
      price: maxPrice,
      maxPrice,
      maxSize
    })

  }
  
  updateSearch = event => {
    const type = event.target.type
    const name = event.target.name
    const value = event.target.value
  }

  filterFlats = () => {
    console.log("hello")
    
  }

  render() {
    
      return (
          <div>
            <Input type="text" 
            value={this.state.value}
            onChange={this.updateSearch.bind(this)} 
            placeholder="Search" />
          </div>   
          
      ) 
    }
  }


    
  


export default SearchForm