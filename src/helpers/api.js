import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.compassionatepartnerskc.org/wp-json/wp/v2/'
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

const getStats = async function() {
  // axios
  //   .get(`pages/5`)
  //   .then(res => {
  //     const [, boxes, cupcakes, packets] = /<p>BOXES=(\d+) CUPCAKES=(\d+) PACKETS=(\d+)<\/p>/.exec(
  //       res.data.content.rendered
  //     );
  //     console.log(boxes, cupcakes, packets);
  //     return { boxes, cupcakes, packets };
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  console.log('before');
  const res = await axios.get('pages/9');
  console.log('after');
  const [, boxes, cupcakes, packets] = /<p>BOXES=(\d+) CUPCAKES=(\d+) PACKETS=(\d+)<\/p>/.exec(
    res.data.content.rendered
  );
  return { boxes, cupcakes, packets };
};

export { getPageData, getStats };
