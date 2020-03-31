import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge, Media } from 'reactstrap';
//import BibRestaurantData from './data/allRestaurantsJoin.json';

var failedFetch = false;
class MovieList extends Component {

    state = {
        todos: []
    }
    componentDidMount() {
        fetch('https://denzel-server.alexr1221.now.sh/movies/search')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todos: data })
                console.log(this.state.todos)
            }).catch((err) => failedFetch = true)
    }

    render() {

        return (
            <div className="container">
                <div className="col-xs-12">
                    <h4>
                        {
                            failedFetch &&
                        <span>
                            Failed to get data
                </span>}</h4>

                    {this.state.todos.map((mov) => (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{mov.title}  {mov.metascore >= 70 &&
                                    <span>
                                    <Badge pill color="success">must-watch</Badge>
                                </span>
                                }
                                    {mov.metascore < 70 &&
                                        <span>

                                        </span>
                                    }</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {mov.synopsis}
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MovieList;



//export const MovieList = () => (

//    <div>
//        {
//            movies.map((res, name) => {
//            return (

//                <div className="gradient-border">
//                    {this.state.todos.map((mov) => (
//                        <div className="card">
//                            <div className="card-body">
//                                <h5 className="card-title">{mov.title}</h5>
//                                <h6 className="card-subtitle mb-2 text-muted">
//                                    {mov.metascore >= 70 &&
//                                        <span>
//                                            Must-watch
//                </span>
//                                    }
//                                    {mov.metascore < 70 &&
//                                        <span>

//                                        </span>
//                                    }
//                                </h6>
//                            </div>
//                        </div>
//                    ))}

//                </div>
//            );
//        })}
//    </div>

//);

//export default MovieList;

//<ListGroup>
//    <ListGroupItem>
//        <ListGroupItemHeading>{res.title} <Badge pill>X etoiles</Badge></ListGroupItemHeading>
//        <ListGroupItemText>
//            {res.metascore}
//        </ListGroupItemText>
//    </ListGroupItem>
//</ListGroup>