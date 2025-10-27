import { useApi, useApiMutation } from '../hooks'

const useResource = (api, { key, params = {}, options } = {}) => {
  const { data, error, isLoading, mutate } = useApi(key, () => api.list(params), options);
  const create = useApiMutation(api.create, { onSuccess: mutate });
  const update = useApiMutation(api.update, { onSuccess: mutate });
  const remove = useApiMutation(api.delete, { onSuccess: mutate });
  return { data, error, isLoading, mutate, create, update, remove };
};

export default useResource;