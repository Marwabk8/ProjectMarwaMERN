import { GET_ALL_RATE } from "../types/rateTypes";

export const  getAllRate= ()=>async (dispatch) => {
    try {
    const res= await axios.get(`/rate/raiting/${id}`);
    dispatch({
        type:GET_ALL_RATE,
         payload: res.data});
    } catch (error) {
        console.log (error);
        
    }


};



export const editRate =(id, formData)=>async dispatch=>{
    try {
 await axios.put(`/rate/raiting/${id}`, formData);
 dispatch(getAllRate());

        
    } catch (error) {
        console.log(error);
    }
};