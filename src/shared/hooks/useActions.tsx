import { bindActionCreators } from 'redux';

import { useTypedDispatch } from './useRedux';
import { newsActions } from 'widgets/News';

const useActions = () => {
  const dispatch = useTypedDispatch();

  const allActions = {
    ...newsActions,
  };

  const action = bindActionCreators(allActions, dispatch);

  return { action };
};

export default useActions;
