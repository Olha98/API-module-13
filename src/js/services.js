const axios = require('axios').default;


export default {
  page: 1,
  axoisImage(searchInput) {
    const API_key = '17505359-e5f9f93771b0e5762108364f3';
    return axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchInput}&page=${this.page}&per_page=12&key=${API_key}`)
      .then(data => {
        this.page += 1;
        return (data.data.hits);
      })
      .catch(error => PNotify.error(`${error}`));


  },

  getPage() {
    return this.page = 1;
  }
}
