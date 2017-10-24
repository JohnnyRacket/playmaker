import { ComposableView } from '../ViewComposition/ComposableView';
import { ClickableManager } from '../Engines/ClickableManager';
import { DrawRouteClickStrategy } from './ClickStrategies/DrawRouteClickStrategy';
import { SquarePlayerViewObject } from '../ViewObjects/Samples/SquarePlayerViewObject';
import { ViewObjectVisitor } from './ViewObjectVisitor';
import { ClickableViewObject } from '../MenuViewObjects/ClickableViewObject';
import { DoubleBufferedViewObject } from '../ViewObjects/DoubleBufferedViewObject';
export class RouteDrawingStageVisitor implements ViewObjectVisitor{

    private clickManager: ClickableManager;
    private gameArea: ComposableView;

    public constructor(clickManager: ClickableManager, gameArea: ComposableView){
        this.clickManager = clickManager;
        this.gameArea = gameArea;
    }

    visitPlayerObject(subject: DoubleBufferedViewObject) {
        console.log("visitingPlayerObject");
        (subject as ClickableViewObject).clickStrategy = new DrawRouteClickStrategy(this.clickManager, this.gameArea);
        this.clickManager.addClickable((subject as ClickableViewObject));
    }
    visitFieldObject(subject: DoubleBufferedViewObject) {
        throw new Error("Method not implemented.");
    }
    
}