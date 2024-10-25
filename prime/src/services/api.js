import axios from 'axios'

//Base URL: https://api.themoviedb.org/3/
//Service URL: movie/550?api_key=ebb810af310a21bd4f16bd2544db3713

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;