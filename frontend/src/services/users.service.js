import axios from "axios";
import { get_api } from "../components/constants.component";

const login = async (data) => {

    const endpoint = get_api('users/login');

    const response = await axios.post(endpoint, data);
    console.log(response);

    return response.data;
}

const USER_SERVICE = {
    login,
}

export {
    USER_SERVICE
};