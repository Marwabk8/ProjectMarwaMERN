import axios from "axios"

import { CLEARERRORS, FAIL, GET_CURRENT, LOGOUT, SGININ, SGINUP } from "../types/authTypes"

export const sginup=(data,navigate)=>async(dispatch)=>{
    try {
    const res = await axios.post('/auth/Sginup',data)
    
    dispatch({type:SGINUP, payload: res.data })
    navigate('/profile')
    } catch (error) {
        dispatch({type:FAIL, payload:error.response.data})
    }

}


export const sginin =(data,navigate)=>async (dispatch)=>{

    try {
const res = await axios.post('/auth/signIn',data)
 dispatch({type:SGININ,payload:res.data})
 navigate('/profile')
        
    } catch (error) {

     dispatch({type: FAIL,payload: error.response.data})   
        
    }




}

export const getcurrent=()=>async(dispatch)=>{

    const token= localStorage.getItem('token')
    
    const config={
     headers:{
        authorization: token 
     }

    }

    try {

    const res = await axios.get('/auth/marwa',config)

    dispatch({type:GET_CURRENT,payload:res.data})
        
    } catch (error) {

    dispatch({type:FAIL, payload:error.response.data})
        
    }



}


export const logout=()=>{

return {type:LOGOUT}
 
}


export const clearerrors=(dispatch)=>{
 
dispatch({type:CLEARERRORS})
    
}