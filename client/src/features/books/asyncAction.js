import Axios from 'axios'
import {setBooks} from './bookSlice'


export const fetchBooks = () => {
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

export const handleDelete = (bookId) => {
    return async (dispatch) => {
        try {
            await Axios.delete(`https://library.wahyuragil.my.id/reading-list/${bookId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            dispatch(fetchBooks())
        } catch (error) {
            console.log(error);
        }
    }
}