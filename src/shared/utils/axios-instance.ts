import Axios, { AxiosError, type AxiosRequestConfig, isAxiosError } from 'axios';
import { isServer } from './is-server';

export const axiosInstance = Axios.create({
  baseURL: isServer ? import.meta.env.INTERNAL_API_BASE_URL : import.meta.env.VITE_API_BASE_URL,
});
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (isAxiosError(err) && err.response) {
      switch (err.response?.status) {
        case 401:
          if (!isServer) {
            // TODO: 로그인 페이지로 이동
          }
          break;
        default:
          break;
      }
    }
    return Promise.reject(err);
  }
);

export const fetcher = <T>(config: AxiosRequestConfig): Promise<T> => {
  const promise = axiosInstance({
    ...config,
  }).then(({ data }) => data);

  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;
