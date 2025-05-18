import React from "react";
import { useParams, Link } from "react-router-dom";
import {Container, Row, Col, Badge, ListGroup, Card, Button,} from "react-bootstrap";
import "./ReceipeDetails.css";
import NotFound from "../NotFound/NotFound";
const ReceipeDetails = ({ singleRecipe,
  cartItems, favoriteItems,setCartItems,setFavoriteItems
 }) => {
  
  console.log(singleRecipe);
   const recipeId = useParams();
   console.log(recipeId.id);
   
  const recipe = singleRecipe.find((x) => x.id === Number(recipeId.id));





  const  handleCartItems=()=>{

    const updatedCart = [...cartItems , recipe]
      localStorage.getItem("cartItems",JSON.stringify(updatedCart));
   // addToCartArray.push(recipe);
    alert("Recipe added to cart");
    localStorage.setItem("cartItems",JSON.stringify(updatedCart))
    console.log(updatedCart , "Add to cart");
    setCartItems(updatedCart)
    
  }

  const handleFavoriteItems = ()=>{
    const updatedFavorite = [...favoriteItems , recipe];
    setFavoriteItems(updatedFavorite)
    localStorage.setItem("favoriteItems", JSON.stringify(updatedFavorite))
    alert("Recipe added to favorites");
  }

  if(!recipe){
    return(
      <>

      <NotFound/>
      </>
    )
  }

  



  return (
    <>
   
      <Container className="recipe-detail-container">
      <Row>
        <Col md={6}>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="recipe-image"
          />
        </Col>
        <Col md={6}>
          <h1 className="recipe-title">{recipe.name}</h1>
          <p className="cuisine">
            <strong>Cuisine:</strong> {recipe.cuisine}
          </p>
          <p>
            <strong>Difficulty:</strong>{" "}
            <Badge bg="success">{recipe.difficulty}</Badge>
          </p>
          <p>
            <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins
          </p>
          <p>
            <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
          </p>
          <p>
            <strong>Servings:</strong> {recipe.servings}
          </p>
          <p>
            <strong>Calories/Serving:</strong> {recipe.caloriesPerServing}
          </p>
          <p>
            <strong>Meal Type:</strong> {recipe.mealType}
          </p>
          <p className="tags">
            <strong>Tags:</strong>{" "}
            {recipe.tags.map((tag, i) => (
              <Badge bg="warning" key={tag + i} className="me-1 tag-badge">
                {tag}
              </Badge>
            ))}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {recipe.rating} ({recipe.reviewCount}
            reviews)
          </p>

          <div className="button-group mt-4">
            <Button variant="primary" className="me-3" onClick={()=>handleCartItems()}>
              🛒 Add to Cart
            </Button>
            <Button variant="danger"
             onClick={()=>handleFavoriteItems()}
            >
              ❤️ Add to Favorite
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <Card className="info-card">
            <Card.Header as="h5">🧂 Ingredients</Card.Header>
            <ListGroup variant="flush">
              {recipe.ingredients.map((item, idx) => (
                <ListGroup.Item key={idx}>• {item}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="info-card">
            <Card.Header as="h5">📖 Instructions</Card.Header>
            <ListGroup variant="flush">
              {recipe.instructions.map((step, idx) => (
                <ListGroup.Item key={idx}>
                  <strong>{idx + 1}.</strong> {step}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ReceipeDetails;
