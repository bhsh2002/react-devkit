import useSWR from 'swr';
import { getTranslatedError } from '../utils/errorUtils';

export const useApi = (key, fetcher, options = {}) => {
  const { data, error, isLoading, mutate, isValidating } = useSWR(key, fetcher, {
    ...options,
    onError: (err) => {
      if (options.onError) {
        options.onError(err);
      }
    },
  });

  return {
    data,
    error,
    getTranslatedError,
    isLoading,
    mutate,
    isValidating,
  };
};
