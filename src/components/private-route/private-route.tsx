import * as React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

import {PrivateRouteProps, PrivateRouteStore} from "./types";

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = (props: PrivateRouteProps) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

const mapStateToProps = (state: string): PrivateRouteStore => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
