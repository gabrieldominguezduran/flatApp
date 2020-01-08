import React, { Component } from 'react'
import Item from '../Item'
import styled from 'styled-components'


const Div = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  margin: 0 10%;
  
`


class Listing extends Component {
  constructor(props){
    super(props)
      this.state = {
        items: []
      }

    console.log(this.props.data)
  }

 
  render(){
    const items = this.props.modules.map( (data) => {
      return <Item key={data.id} city={data.city} description={data.description} price={data.price} m2={data.m2} rooms={data.rooms} bathrooms={data.bathrooms} photo={data.photo} />
    })
    return(
    <div className="pt-5 pb-5">
      <div className="container">
        <div className="text-center">
        <h2>Find your dream apartment</h2>
          <form>
            <Div className="form-group">
              <label className="m-3 p-2" >City</label>
                <select className="form-control m-3 p-2">
                  <option className="m-3 p-2"></option>
                    <option>...</option>
                      </select>
                      <label className="m-3 p-2">Price</label>
                        <input type="range" className="form-control-range" />
                          <label className="m-3 p-2">M2</label>
                            <input type="range" className="form-control-range" />
                          <label className="m-3 p-2">Rooms</label>
                        <input type="range" className="form-control-range" />
                      </Div>
                    </form>
                  <h2 className="pt-4 pb-4">Apartments</h2>
                </div>
              {this.items}
            </div>
          </div>
    )
  }
}

export default Listing