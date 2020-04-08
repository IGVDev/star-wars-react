import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundary';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            planets: [],
            searchfield: ''
        }

    }

    componentDidMount() {
        fetch('https://swapi.co/api/planets/')
            .then(response=> response.json())
            .then(users => this.setState({ planets: users.results}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { planets: planets, searchfield } = this.state;
        const filteredPlanets = planets.filter(planet => {
            return planet.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !planets.length ? 
            <h1>Loading...</h1> :
        (
            <div className='tc'>
            <h1 className='f1'>Star Wars</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList planets={filteredPlanets}/>
                </ErrorBoundry>
            </Scroll>
            </div>
        )
    }
}  

export default App;