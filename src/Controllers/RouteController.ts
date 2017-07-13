import { Route } from './Route';

export abstract class RouteController{
    //I expect this class to change as we think about what needs to happen
    protected route: Route;
    protected started: boolean;
    //more to come, need ot think through collisions first
    abstract startRoute();
    abstract pauseRoute();
    abstract resumeRoute();
    abstract stopRoute();
}