import Axios from 'axios'
import {setBooks} from './bookSlice'


export const fetchBooks = async () => {
 return async (dispatch) => {
    try {
        const { data } = await Axios.get(`https://library.wahyuragil.my.id/reading-list`, {
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        // console.log(data);
        dispatch(setBooks(data))
    } catch (error) {
        console.log(error);
    }
 }
}