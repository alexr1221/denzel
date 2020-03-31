import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge, Media } from 'reactstrap';
//import BibRestaurantData from './data/allRestaurantsJoin.json';

var isFetching = true;
var failedFetch = false;
class MovieRandom extends Component {

    movi = {}
    componentDidMount() {
        fetch('https://denzel-server.alexr1221.now.sh/movies')
            .then(res => res.json())
            .then((data) => {
                this.movi = data
                console.log(this.movi)
                isFetching = false
            }).catch((err) => { failedFetch = true; isFetching = false; })
    }

    render() {

        return (
            <div className="container">
                <div className="col-xs-12">
                    <h5>
                        {
                            isFetching &&
                            <span>
                                Retrieving data...
                            </span>
                        }
                        {
                            failedFetch &&
                            <span>
                                Failed to get data
                            </span>
                        }
                    </h5>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.movi.title}  {this.movi.metascore >= 70 &&
                                <span>
                                    <Badge pill color="success">must-watch</Badge>
                                </span>
                            }
                                {this.movi.metascore < 70 &&
                                    <span>

                                    </span>
                                }</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                {this.movi.synopsis}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieRandom;