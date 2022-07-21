import {
  matchRoutes,
  MatchedRoute as MatchedRouteType,
} from 'react-router-config';
import {Route, routes} from "../src/routes";

export type MatchedRoute<
  Params extends { [K in keyof Params]?: string }
> = Omit<MatchedRouteType<Params>, 'route'> & {
  route: Route;
};

export default (path: string) => {
  const branch = matchRoutes(routes, path) as MatchedRoute<
    Record<string, string>
  >[];
    console.info('branch', branch)
  return (
    branch[0] || {
      route: {
        sagasToRun: [],
        title: '404 - Not found',
        cache: true,
      },
      match: { params: {} },
    }
  );
};
