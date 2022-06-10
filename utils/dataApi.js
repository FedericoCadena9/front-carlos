import axios from 'axios';

export const baseUrl = 'https://backend-project-carlos.herokuapp.com/api';

export const dataApi = async (url) => {
    const {data} = await axios.get((url));

    return data;
}
