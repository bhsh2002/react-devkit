import axios from 'axios';

export const createApiClient = (baseURL, onUnauthorized) => {
  const client = axios.create({ baseURL });

  client.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response?.status === 401 && onUnauthorized) {
        onUnauthorized();
      }
      return Promise.reject(err);
    }
  );

  return client;
};
