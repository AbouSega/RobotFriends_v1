import React, { Component } from 'react';

import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            // En lieu et place d'un fichier statique, on intègre à la variable robots un lien
            robots: [],
            searchfield: ''
        } 
    }
    
    componentDidMount() {
        // console.log('check');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }
    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            }
        )

        if (!robots.length) {
            return <h1>Loading robots...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1>RobotFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    
                    <ErrorBoundary>
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </ErrorBoundary>
                </div>
            );
        }
    }
}

export default App;