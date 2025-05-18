import React, { useEffect, useState } from 'react'
import {Card , Button,} from "react-bootstrap"
import {FaHeart ,FaTrash} from "react-icons/fa"
const Favorite = () => {

   const [favoriteItems , setFavoriteItems] = useState([])
  
  useEffect(()=>{
      const favoriteItems = JSON.parse(localStorage.getItem("favoriteItems"));
      setFavoriteItems( favoriteItems);
  },[])

  const deleteFavorite = (item)=>{
    const updateFavorite = favoriteItems.filter((x)=>x.id !==item.id);

    if(confirm("Confirm to deelete Cart Item")){
      setFavoriteItems(updateFavorite);
      localStorage.setItem("favoriteItems",JSON.stringify(updateFavorite))
    }
  }


  if (!favoriteItems || favoriteItems.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>No Items added to the Cart 🛒</h2>
      </div>
    );
  }
  
  
  return (
    <>

    <div className="receipes-container">
      {favoriteItems.map((recipe) => (
        <Card className="receipe-card position-relative">
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>Cuisine: {recipe.cuisine}</Card.Text>

        <div className="d-flex justify-content-between">
         
          <Button variant="outline-success" >
            <FaHeart /> Move to Favorite
          </Button>
        </div>
      </Card.Body>

      {/* Delete Icon in Top Right Corner */}
      <Button
        variant="danger"
        className="position-absolute top-0 end-0 m-2 p-1"
              onClick={()=>deleteFavorite(recipe)}

      >
        <FaTrash />
      </Button>
    </Card>
      ))}
    </div>


    
    </>
  )
}

export default Favorite