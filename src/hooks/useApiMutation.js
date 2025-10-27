import { useState } from 'react';
// import { useNotifier } from '../store/notification-context';
import { getTranslatedError } from '../utils/errorUtils';

export const useApiMutation = (mutationFn, { onSuccess, onError, showSuccess = true } = {}) => {
//   const { showNotification } = useNotifier();
  const [isMutating, setIsMutating] = useState(false);

  const handleMutation = async (payload) => {
    setIsMutating(true);
    try {
      const res = await mutationFn(payload);
      if (showSuccess) {
        // showNotification({
        //   message: res?.message || 'تمت العملية بنجاح!',
        //   severity: 'success',
        // });
      }
      onSuccess?.(res);
      return res;
    } catch (err) {
      const msg = getTranslatedError(err);
    //   showNotification({ message: msg, severity: 'error' });
      onError?.(err);
      throw err;
    } finally {
      setIsMutating(false);
    }
  };

  return { handleMutation, isMutating };
};