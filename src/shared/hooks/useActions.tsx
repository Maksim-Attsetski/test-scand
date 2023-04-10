import { bindActionCreators } from 'redux';

import { useTypedDispatch } from './useRedux';

const useActions = () => {
  const dispatch = useTypedDispatch();

  const allActions = {};

  const action = bindActionCreators(allActions, dispatch);

  return { action };
};

export default useActions;
