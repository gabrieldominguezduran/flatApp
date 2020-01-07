import React, { Component } from 'react'
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
    super(props)
    this.state = {
      filtered: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.items
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    })
  }

  handleChange = (event) => {
    let currentList = []

    let newList = []

    if(event.target.value !== "") {
      currentList = this.props.items

      newList = currentList.filter(item => {

        const lc = item.toLowerCase()

        const filter = event.target.value.toLowerCase()


        return lc.includes(filter)

      })
  } else {
    newList = this.props.items
  }

    this.setState({
      filtered: newList
    })

  }
  render() {
    return (

      <div>
        <input type="text" className="input" onChange={this.handleChange} placeholder="City..." />
        <input type="text" className="input" onChange={this.handleChange} placeholder="Price..." />
        <input type="text" className="input" onChange={this.handleChange} placeholder="M2..." />
        <input type="text" className="input" onChange={this.handleChange} placeholder="Rooms..." />
        <input type="text" className="input" onChange={this.handleChange} placeholder="Bathrooms..." />
      </div>   
    );
  }
}

export default SearchForm