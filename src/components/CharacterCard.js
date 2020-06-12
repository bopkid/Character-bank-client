import React from 'react';
import {Card,Button ,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../CSS/CharacterCard.css'

const CharacterCard = (props) => {
    return (
        <Card style={{ width: '18rem' ,display:'flex'}} className ="card" >
            <Image src= {props.img} fluid />
            <Card.Body>
                <Card.Title>{props.Name}</Card.Title>
                <Card.Text>
                    System:{props.System}
                </Card.Text>
                <Button variant="primary"><Link to ={`/characters/${props._id}`}>See More</Link></Button>
            </Card.Body>
        </Card>
    );
}

export default CharacterCard;
