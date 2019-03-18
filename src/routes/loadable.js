import Loadable from 'react-loadable';

import { Loading } from '../components';

export default {
  MainPage: Loadable({
    loader: () => import('../containers/MainPage/MainPage'),
    loading: Loading,
  }),
};
