import Loadable from 'react-loadable';

import { Loading } from '../components';

export default {
  MainPage: Loadable({
    loader: () => import('../containers/MainPage/MainPage'),
    loading: Loading,
  }),
  FightersPage: Loadable({
    loader: () => import('../containers/Fighters/Fighters'),
    loading: Loading,
  }),
  TowerPage: Loadable({
    loader: () => import('../containers/Tower/Tower'),
    loading: Loading,
  }),
  GlossaryPage: Loadable({
    loader: () => import('../containers/Glossary/Glossary'),
    loading: Loading,
  }),
};
