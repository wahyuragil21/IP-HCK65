const Axios = require("axios");

module.exports = class BooksController {
    static async getBooks(req, res, next) {
        const { q, categories } = req.query
        // console.log(q);
        // console.log(req.query);
        let paramsQuery = {
            q: 'programmer fullstack',
            // filter : 'free-ebooks',
            key: process.env.GOOGLE_API_KEY
        }

        if (q){
            paramsQuery = {q}
        }

        // if (categories) {
        //     paramsQuery = {
        //         q
        //     }
        // }


        try {
            const { data } = await Axios.get(`https://www.googleapis.com/books/v1/volumes`, {
                params: {
                    ...paramsQuery,
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