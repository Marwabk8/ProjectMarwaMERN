import  { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../redux/actions/productActions"
import ProductCard from "./ProductCard"
import "../App.css"




function Home({search}) {

const products = useSelector(state=>state.productsReducers.products)
const dispatch = useDispatch()
console.log(products)

useEffect(()=>{
      dispatch (getAllProducts())
    },[]);
 

  return (
    
    <div  className='user'>

<h1> Beautyadvisor</h1>

<p>BeautyAdvisor est un site web Tunisien qui offre des avis <br/> 
   et des conseils de beauté émanant de consommateurs sur des produits<br/> cosmétiques,
    à l'international. vous pouvez ajouter un produit et donner  <br/> votre avis sur ce produit!</p>
<div className='carte'>
{products && products.filter(el=>el.name.toUpperCase().includes(search.toUpperCase()))
.map((el)=><ProductCard product={el} key={el._id}></ProductCard>)}

    </div>
    </div>
  )
}

export default Home