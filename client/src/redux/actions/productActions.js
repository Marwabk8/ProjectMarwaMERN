import axios from "axios";
import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT, TOGGLE_FALSE, TOGGLE_TRUE} from "../types/productTypes";

export const  getAllProducts= ()=>async (dispatch) => {
    try {
    const res= await axios.get('/product/produit');
    dispatch({
        type:GET_ALL_PRODUCTS,
         payload: res.data});
    } catch (error) {
        console.log (error);
        
    }


};

export const addProduct = formData => async dispatch => {

    try {
         await axios.post('/product/produit',formData);
    dispatch(getAllProducts())
        
    } catch (error) {
        console.log (error);    }
};


export const deleteProduct =(id)=>async dispatch=>{
    try {
       await axios.delete(`/product/produit/${id}`)
     dispatch(getAllProducts());
    } catch (error) {
       console.log(error);
    }
};
    
// export const editProduct =(id,productData)=>async dispatch=>{
//     try {
//  await axios.put(`/product/produit/${id}`, productData);
//  dispatch(getAllProducts());

        
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const toggleTrue = ()=>{
//     return{
//         type:TOGGLE_TRUE
//        }
   
//    }
   
   
//    export const toggleFalse =()=>{
//        return{type:TOGGLE_FALSE
    
//     }
   
   
//    }


//    export const getOneProduct=(id)=>async(dispatch)=> {
//     try { 
//         const res = await axios.get(`/product/produit/${id}`);
//         dispatch({type:GET_ONE_PRODUCT, payload:res.data});
        
//     } catch (error) {
//         console.log(error);
//     }

// }


 export const updateRate =(id,formData)=>async(dispatch)=>{
 try {
   await axios.put(`/product/produit/rate/${id}`,formData); 
   dispatch(getAllProducts());
 } catch (error) {
    console.log(error);
 }


 }
