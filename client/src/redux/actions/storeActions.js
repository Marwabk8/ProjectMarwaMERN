import axios from "axios";
import { GET_ALL_STORE } from "../types/storeTypes";

 
export const addStore = formData => async dispatch =>{

try {
 await axios.post('/store/stores',formData);
 dispatch(getAllStore())
   
} catch (error) {

   console.log (error);   
   
}

};

export const getAllStore=()=>async (dispatch) =>{
   try {
      const res= await axios.get('/store/stores');
      dispatch({
      type :GET_ALL_STORE,
      payload : res.data })
   } catch (error) {
   console.log (error);
  
       
   }
   };

 export const editStore =(id, formData)=>async dispatch=>{
   try {
await axios.put(`/store/stores/${id}`, formData);
dispatch(getAllStore());

       
   } catch (error) {
       console.log(error);
   }
};

 export const deleteStore =(id)=> async dispatch=>{
try {
   await axios.delete(`/store/stores/${id}`)
 dispatch(getAllStore());
} catch (error) {
   console.log(error);
}


 }


