import { useState } from 'react';
import { getTranslatedError } from '../utils/errorUtils';

export const useApiMutation = (mutationFn, { onSuccess, onError } = {}) => {
  const [isMutating, setIsMutating] = useState(false);

  const handleMutation = async (payload) => {
    setIsMutating(true);
    try {
      const res = await mutationFn(payload);
      onSuccess?.(res);
      return res;
    } catch (err) {
      onError?.(err);
      throw err;
    } finally {
      setIsMutating(false);
    }
  };

  return { handleMutation, isMutating, getTranslatedError };
};