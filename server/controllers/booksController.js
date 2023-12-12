const Axios = require("axios");

module.exports = class BooksController {

    static async getBooks(req, res, next) {
        try {
            const { data } = await Axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript', {
                params: {
                    startIndex : 0,
                    maxResults : 20
                },
            });
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }
}