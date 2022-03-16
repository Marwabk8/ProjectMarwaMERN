import { EDITPRODUCT, GET_ALL_PRODUCTS, GET_ONE_PRODUCT, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/productTypes";


const initstate =
{
products:[],
loading: true,
edit:false,


};

const productsReducers= (state= initstate,{type,payload}) =>{
    switch (type) {
        case GET_ALL_PRODUCTS:
        return{...state,products:payload,loading:false}
        // case TOGGLE_TRUE:
        //   return{...state,edit:true}
      
        //   case TOGGLE_FALSE:
        //       return{...state,edit:false}

          // case GET_ONE_PRODUCT:
          //       return {...state, product:payload, loading : false}   
  default: 
  return state;
    

    }   }
    
     export default productsReducers