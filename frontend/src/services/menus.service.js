import axios from 'axios';
import { get_api } from '../components/constants.component';

const getAllMenus = async () => {

    const endpoint = get_api('menus');

    const response = await axios.get(endpoint);

    return response.data;
}

const MENU_SERVICE = {
    getAllMenus
}

export {
    MENU_SERVICE
};