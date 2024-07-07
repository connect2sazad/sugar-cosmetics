import axios from 'axios';
import { get_api } from '../components/constants.component';

const add = async data => {

    const endpoint = get_api('cart/add');

    const response = await axios.post(endpoint, data);

    return response.data;
}

const remove = async data => {

    const endpoint = get_api('cart/remove');

    const response = await axios.post(endpoint, data);

    return response.data;
}

const CART_SERVICE = {
    add, remove
}

export {
    CART_SERVICE
};