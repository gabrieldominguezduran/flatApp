import React, { Component } from "react"
import Header from '../Header'
import SearchForm from '../SearchForm'

class Home extends Component {
    constructor(){
        super ()

        this.state = {
            modules: [
                { id: 1, city: 'Barcelona', description: 'Beautiul aparment in the best area', price: '500.000€', m2: '100', rooms: '4', bathrooms: '3'},
                { id: 2, city: 'Barcelona', description: 'Modern attic near the beach', price: '650.500€', m2: '110', rooms: '2', bathrooms: '2'},
                { id: 3, city: 'Madrid', description: 'Family aparment', price: '350.000#', m2: '250', rooms: '3', bathrooms: '2'},
                { id: 4, city: 'Bilbao', description: 'Classic home in downtwon area', price: '450.000€', m2: '130', rooms: '5', bathrooms: '3'},
                { id: 5, city: 'Valencia', description: 'Wonderful loft near the stadium ', price: '250.000€', m2: '90', rooms: '1', bathrooms: '1'}
            ]
        }
    }

    render() {
        return (
            <div>
                <Header />
                <SearchForm />
            </div>
        )
    }
}

export default Home