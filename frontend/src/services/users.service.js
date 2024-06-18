import axios from "axios";
import { get_api } from "../components/constants.component"

const login = async (data) => {

    const endpoint = get_api('users/login');

    const response = await axios.post(endpoint, data);

    return response.data;
}

export {
    login
};