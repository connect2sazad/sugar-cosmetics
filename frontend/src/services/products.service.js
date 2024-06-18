import axios from 'axios';
import { get_api } from '../components/constants.component';

const getAllProducts = async () => {

    const endpoint = get_api('products');

    const response = await axios.get(endpoint);

    return response.data;
}

export {
    getAllProducts
};