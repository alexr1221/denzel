import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
//import BibRestaurantData from './data/allRestaurantsJoin.json';


export var movies = [];

export const MovieList = () => (

    <div>
        {
            movies.map((res, name) => {
            return (
                <div className="gradient-border">
                    <ListGroup>
                        <ListGroupItem>
                            <ListGroupItemHeading>{res.title} <Badge pill>X etoiles</Badge></ListGroupItemHeading>
                            <ListGroupItemText>
                                {res.metascore}
        </ListGroupItemText>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            );
        })}
    </div>

);

export default MovieList;

//return (
//    <ListGroup>
//        <ListGroupItem>
//            <ListGroupItemHeading>List group item heading <Badge pill>3 etoiles</Badge></ListGroupItemHeading>
//            <ListGroupItemText>
//                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
//        </ListGroupItemText>
//        </ListGroupItem>
//    </ListGroup>
//);