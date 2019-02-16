import axios from 'axios';

export default axios.create({
  baseURL: `https://jogtracker.herokuapp.com/api/v1/`,
});