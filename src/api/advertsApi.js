// Libs
import axios from 'axios';

axios.defaults.baseURL = 'https://64849eb7ee799e321626def8.mockapi.io';

export const limit = 10;

export const getAdverts = async (page = 1) => {
    const { data } = await axios.get(`/adverts?limit=${limit}&page=${page}`);
    return data;
};
