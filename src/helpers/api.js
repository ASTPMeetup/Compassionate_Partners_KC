import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://cpkc.azurewebsites.net/wp-json/wp/v2/'
});

const getPageData = function(pageNum) {
  axios
    .get(`pages/${pageNum}`)
    .then(res => {
      // pull raw text from wordpress formatting
      const [, body] = /<p>(.*)<\/p>/.exec(res.data.content.rendered);
      const title = res.data.title.rendered;
      // console.log({ title, body });
      return { title, body };
    })
    .catch(e => {
      console.log(e);
    });
};

export default getPageData;
