const Axios = require('axios').default;



module.exports ={


    /**
     * Get All Available Endpoints From Neko.best
     * @async
     * @returns {object} axios response body
     */

    GetEndpoints: async () =>{

        //get from neko api
        const Response = await Axios.get(`https://nekos.best/api/v2/endpoints`, {
            
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
            },

        });


        //return response body
        if(Response.data){

            return Response.data;

        }else{

            return undefined;

        }


    }
    
}