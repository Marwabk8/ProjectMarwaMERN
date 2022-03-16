
import { GET_ALL_STORE } from "../types/storeTypes"

 const initstate ={
 stores :[],
 loading:true


 }

 const storeReducers= (state=initstate,{type,payload})=>{
switch (type) {
    case GET_ALL_STORE:
        return{...state,stores: payload,loading:false}
        
       

    default:
        return state;

}
 }


 export default storeReducers