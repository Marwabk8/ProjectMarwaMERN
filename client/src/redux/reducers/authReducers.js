import { CLEARERRORS, FAIL, GET_CURRENT, LOGOUT, SGININ, SGINUP } from "../types/authTypes"

const intialState = {
 user:{},
 auth:false,
 errors:[],
 loading:true
}

const authReducers =(state=intialState,action)=>{

switch (action.type) {
    case SGINUP:
    case SGININ:
        localStorage.setItem('token',action.payload.token)
       return {...state, user:action.payload.user, auth:true,loading:false}
    case FAIL:
      return{...state, errors:action.payload.errors, auth:false,loading:false}   

      case GET_CURRENT:
        return{...state, user:action.payload, auth:true,loading:false}

     case LOGOUT:
       localStorage.removeItem('token')
       return{...state,auth: false, user:null,loading:false}
        
      case CLEARERRORS:
        return {...state,errors:[]}
    default:
       
} return state


   
}

export default authReducers