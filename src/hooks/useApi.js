import useSWR from 'swr';
// import { useNotifier } from '../store/notification-context';
import { getTranslatedError } from '../utils/errorUtils';

export const useApi = (key, fetcher, options = {}) => {
//   const { showNotification } = useNotifier();

  const { data, error, isLoading, mutate } = useSWR(key, fetcher, {
    ...options,
    onError: (err) => {
    //   showNotification({
    //     message: getTranslatedError(err),
    //     severity: 'error',
    //   });
      if (options.onError) {
        options.onError(err);
      }
    },
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
