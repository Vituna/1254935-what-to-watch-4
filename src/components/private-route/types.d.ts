import {RouteProps} from "react-router-dom";

export type PrivateRouteProps = RouteProps & {
  authorizationStatus: string;
  render: () => React.ReactNode;
}

export interface PrivateRouteStore {
  authorizationStatus: string;
}
