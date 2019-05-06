import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import MainLayout from './MainLayout/MainLayout';
import loadableCons from './loadable';

const AppRoute = ({ container: Container, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Container {...props} />
      </Layout>
    )}
  />
);

export default () => (
  <HashRouter>
    <Switch>
      <AppRoute
        exact
        path="/"
        layout={MainLayout}
        container={loadableCons.MainPage}
      />
      <AppRoute
        exact
        path="/fighters"
        layout={MainLayout}
        container={loadableCons.FightersPage}
      />
      <AppRoute
        exact
        path="/tower"
        layout={MainLayout}
        container={loadableCons.TowerPage}
      />
      <AppRoute
        exact
        path="/glossary"
        layout={MainLayout}
        container={loadableCons.GlossaryPage}
      />
      <AppRoute
        exact
        path="/vip"
        layout={MainLayout}
        container={loadableCons.VipPage}
      />
      <AppRoute
        exact
        path="/*"
        layout={MainLayout}
        container={loadableCons.NotFound}
      />
    </Switch>
  </HashRouter>
);

AppRoute.propTypes = {
  container: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
};
