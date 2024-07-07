import axios from 'axios';
import { get_api } from '../components/constants.component';

const add = async data => {

    const endpoint = get_api('wishlist/add');

    const response = await axios.post(endpoint, data);

    return response.data;
}

const remove = async data => {

    const endpoint = get_api('wishlist/remove');

    const response = await axios.post(endpoint, data);

    return response.data;
}

const WISHLIST_SERVICE = {
    add, remove
}

export {
    WISHLIST_SERVICE
};