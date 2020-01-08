import React, { Component } from 'react'
import Item from '../Item'
import styled from 'styled-components'


const Div = styled.div`
  display: flex;
  text-align: left;
  justify-content: center;
  text-align: left;
`
const Label = styled.div`
  display: flex; 
  justify-content: center;
  text-align: left;

`
const Input = styled.input`
  width: 300px;
`


class Listing extends Component {
  constructor(props){
    super(props)
      this.state = {
        searchCity: ''

      }

  }

  updateSearchCity(event) {
    this.setState({searchCity: event.target.value.substr(0, 20)})
  }
 
  render(){
    let filteredData = this.props.modules.filter((data) => {
      return data.city.toLowerCase().indexOf(this.state.searchCity.toLowerCase()) !== -1
    })


    const items = filteredData.map( (data) => {
      return <Item key={data.id} city={data.city} description={data.description} price={data.price} m2={data.m2} rooms={data.rooms} bathrooms={data.bathrooms} photo={data.photo} />
    })
    
    return(
    <div className="pt-5 pb-5">
      <div className="container">
        <div className="text-center">
        <h2 className="mb-5">Find your dream apartment</h2>
          <form>
            <Div className="form-group">
              <label className="p-2 " >City</label>
                <Input type="text" className="form-control" value={this.state.searchCity} onChange={this.updateSearchCity.bind(this)} />  
                  </Div>
                    </form>
                  <h2 className="pt-4 pb-4">Apartments</h2>
                </div>
              {items}
            </div>
          </div>
    )
  }
}

export default Listing