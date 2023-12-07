const Axios = require('axios').default;



module.exports ={


    /**
     * Get Image From Neko.best
     * @async
     * @param {string} endpoint - the endpoint for the nekos.best api
     * @returns {object} axios response body
     */

    GetNeko: async (endpoint) =>{

        //get from neko api
        const Response = await Axios.get(`https://nekos.best/api/v2/${endpoint}`, {
            
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
            },

        });

        //return response body
        if(Response.data){

            return Response.data.results[0];

        }else{

            return undefined;

        }


    }
    
}