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
        search : ''
      }
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render(){
    const { search } = this.state 
    const filtered = this.props.modules.filter( (data) => {
      
        return search !== "" && data.city.toLowerCase().indexOf( search.toLowerCase()) === -1 
          
        
      
    })
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