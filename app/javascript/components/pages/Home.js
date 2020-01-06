import React, { Component } from "react"
import Header from '../Header'
import SearchForm from '../SearchForm'
import Listing from './Listing'
import axios from 'axios'


class Home extends Component {
    constructor(){
        super ()

        this.state = {
            modules: []
        }
    }

    componentDidMount(){
        axios.get('/flats.json')
        .then(data => {
            
            let res= []
            data.data.data.map( (data) => {
                res.push({id: data.id, city: data.city, description: data.description, price: data.price, m2: data.m2, rooms: data.rooms, bathrooms: data.bathrooms, photo: data.photo 
                 })

                 this.setState({modules: res})
            })
        })
        .catch(data => {
            
        })
    }


    render() {
        return (
            <div>
                <Header />
                <SearchForm />
                <Listing modules={this.state.modules} />
            </div>
        )
    }
}

export default Home