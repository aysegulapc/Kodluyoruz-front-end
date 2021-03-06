import axios from "axios";

class BasService {

  getProductList() {

    const username = sessionStorage.getItem('username');

    const url = '/api/v1/basket/users/' + username + '/products/';

    return axios.get(url);
  }

  getBasket() {
    const username = sessionStorage.getItem('username');

    const url = '/api/v1/basket/users/' + username;

    return axios.get(url);
  }

  addProductToBasket(product) {

    const username = sessionStorage.getItem('username');

    const url = '/api/v1/basket/users/' + username + '/products'

    return axios.post(url, product);
  }

  
}

export default new BasService();