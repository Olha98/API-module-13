const axios = require('axios').default;

export default {


  axoisImage(searchInput) {
    const API_key = '17505359-e5f9f93771b0e5762108364f3';
    return axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchInput}&page=1&per_page=12&key=${API_key}`)
      
  },
}
