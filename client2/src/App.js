import React, { Component } from 'react';

import { MovieNavBar } from './MovieNavBar';
import { MovieSearch } from './MovieSearch';
//import { Button, Container } from 'reactstrap';



class App extends Component {

    state = {
        todos: []
    }
    componentDidMount() {
        fetch('https://denzel-server.alexr1221.now.sh/movies/search')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todos: data })
                console.log(this.state.todos)
            })
            .catch(console.log)
    }

    render() {

        return (
            <div>
                <Container className="themed-container" fluid="md">
                    <MovieNavBar></MovieNavBar>
                    <MovieSearch />
                </Container>

            </div>
            
        );
    }
}

export default App;