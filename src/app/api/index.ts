import axios from 'axios';
import env from '../env';

const API = async (userToken?: any) => {
  const headers: any =
    userToken === undefined
      ? {
          'Content-Type': 'application/json',
          GUID: '24BE-DB0E-D75E-4060',
        }
      : {
          'Content-Type': 'application/json',
          GUID: '24BE-DB0E-D75E-4060',
          Authorization: 'Bearer' + userToken,
        };

  return axios.create({
    baseURL: env.API_URL,
    headers: headers,
  });
};

export default API;
