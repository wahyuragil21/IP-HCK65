const Axios = require("axios");

const API_KEY = 'AIzaSyB0HkVo931bOtLmIbSOgxLZEUB6fBOOmQ8'
module.exports = class BooksController{
    
    static async getBooks (req, res, next){
        try {
           const {data} = await Axios.get('https://www.googleapis.com/books/v1/volumes?q=technologi')
        // const {data} = await Axios.get('https://www.googleapis.com/books/v1/volumes?q=technologi', {
        //     params: {
        //         key: API_KEY
        //     },
        // });
           res.status(200).json(data.items)
        } catch (error) {
            console.log(error);
        }
    }
}