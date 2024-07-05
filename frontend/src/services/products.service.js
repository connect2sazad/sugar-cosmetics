import axios from 'axios';
import { get_api } from '../components/constants.component';

const getAllProducts = async () => {

    const endpoint = get_api('products');

    const response = await axios.get(endpoint);

    // console.log(response);

    return response.data;
}

const PRODUCT_SERVICE = {
    getAllProducts
}

export {
    PRODUCT_SERVICE
};