import axios from "axios"


export default axios.create({

    baseURL: 'https://cjbud9ur.directus.app/',
    
    
}) 
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'