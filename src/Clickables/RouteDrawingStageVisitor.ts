import { DrawRouteClickStrategy } from './ClickStrategies/DrawRouteClickStrategy';
import { SquarePlayerViewObject } from '../ViewObjects/Samples/SquarePlayerViewObject';
import { ViewObjectVisitor } from './ViewObjectVisitor';
import { ClickableViewObject } from '../MenuViewObjects/ClickableViewObject';
import { DoubleBufferedViewObject } from '../ViewObjects/DoubleBufferedViewObject';
export class RouteDrawingStageVisitor implements ViewObjectVisitor{

    visitPlayerObject(subject: DoubleBufferedViewObject) {
        (subject as ClickableViewObject).clickStrategy = new DrawRouteClickStrategy(null);
    }
    visitFieldObject(subject: DoubleBufferedViewObject) {
        throw new Error("Method not implemented.");
    }
    
}