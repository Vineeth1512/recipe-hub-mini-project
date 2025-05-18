import React from 'react'
import {Card , Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
const Receipe = ({singleRecipe}) => {

    const navigate = useNavigate();
    
    
  return (
   <Card className="receipe-card">
      <Card.Img variant="top" src={singleRecipe.image} />
      <Card.Body>
        <Card.Title>{singleRecipe.name}</Card.Title>
        <Card.Text >Cuisine:{singleRecipe.cuisine}</Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/receipes/${singleRecipe.id}`)}>View More</Button>
      </Card.Body>
    </Card>
  )
}

export default Receipe