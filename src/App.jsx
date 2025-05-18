import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbarr from './Components/Navbar/Navbarr.jsx'
import Home from './Components/Home/Home'
import Receipes from './Components/Receipes/Receipes'
import Favorite from './Components/Favorite/Favorite.jsx'
import Cart from './Components/Cart/Cart.jsx'
import axios from "axios";
import ReceipeDetails from './Components/Receipes/ReceipeDetails.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import Footer from './Components/Footer/Footer.jsx'



const App = () => {
  const [recipes, setRecipes] =useState([]);
    const [cartItems, setCartItems ] = useState(JSON.parse(localStorage.getItem("cartItems"))||[])
     const [favoriteItems,setFavoriteItems] = useState(JSON.parse(localStorage.getItem("favoriteItems"))||[])
  

useEffect(()=>{
  axios.get("https://dummyjson.com/recipes").then((res)=>{
    console.log(res.data.recipes);
    setRecipes(res.data.recipes)
  })

},[])

  return (
   <>
   <Navbarr cartCount={cartItems.length} favoriteCount = {favoriteItems.length}/>
   <Routes>
    <Route  path='/' element={<Home/>}></Route>
    <Route  path='/receipes' element={<Receipes recipesData = {recipes}/>}></Route>
    <Route  path='/receipes/:id' element={
      <ReceipeDetails 
      singleRecipe = {recipes}
      cartItems ={cartItems}
      favoriteItems ={favoriteItems}
      setCartItems = {setCartItems}
      setFavoriteItems = {setFavoriteItems}
      

    
    
    />}></Route>
    <Route  path='/favorite' element={<Favorite />}></Route>
    <Route  path='/cart' element={<Cart/>}></Route>
    <Route  path='/*' element={<NotFound/>}></Route>
    
   </Routes>

      <Footer></Footer>

   
   </>
  )
}

export default App