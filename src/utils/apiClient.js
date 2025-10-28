import axios from 'axios';

export const createApiClient = (baseURL, { onUnauthorized, interceptors } = {}) => {
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

  if (interceptors) {
    interceptors.forEach((interceptor) => {
      client.interceptors.response.use(interceptor.success, interceptor.error);
    });
  }

  return client;
};
