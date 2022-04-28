import axios from 'axios';

export const baseUrl = 'https://project-carlos.herokuapp.com/api';

export const dataApi = async (url) => {
    const {data} = await axios.get((url));

    return data;
}
