import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container } from 'reactstrap';
import { MovieNavBar } from './MovieNavBar';
import  MovieSearch  from './MovieSearch';
import { getAllMovies } from './ApiClient';

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
            //<div className="container">
            //    <div className="col-xs-12">
            //        <h1>My Todos</h1>
            //        {this.state.todos.map((mov) => (
            //            <div className="card">
            //                <div className="card-body">
            //                    <h5 className="card-title">{mov.title}</h5>
            //                    <h6 className="card-subtitle mb-2 text-muted">
            //                        {mov.metascore >= 70 &&
            //                            <span>
            //                                Must-watch
            //    </span>
            //                        }
            //                        {mov.metascore < 70 &&
            //                            <span>

            //                            </span>
            //                        }
            //                    </h6>
            //                </div>
            //            </div>
            //        ))}
            //    </div>
            //</div>
        );
    }
}

export default App;