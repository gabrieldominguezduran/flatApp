import React, { Component } from 'react'
import Item from '../Item'

class Listing extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const items = this.props.modules.map( (data) => {
      return <Item key={data.id} city={data.city} description={data.description} price={data.price} m2={data.m2} rooms={data.rooms} bathrooms={data.bathrooms} />
    })
    return(
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 pb-4">Apartments</h2>
          </div>
          {items}
        </div>
      </div>
    )
  }
}

export default Listing