import axios from 'axios';

axios.defaults.baseURL =
  'https://cors-anywhere.herokuapp.com/https://pixabay.com/api';

const apiKey = '16159179-9a5d2f4d64cb4ee75e82dc2d4';

export default ({ query, currentPage }) =>
  axios
    .get(
      `/?q=${query}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=4&key=${apiKey}`,
    )
    .then(res => res.data.hits)
    .catch(error => error);
