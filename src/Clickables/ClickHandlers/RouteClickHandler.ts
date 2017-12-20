// import { DrawRouteClickStrategy } from '../ClickStrategies/DrawRouteClickStrategy';
// import { ClickableManager } from '../../Engines/ClickableManager';
// import { RenderEngine } from '../../Engines/RenderEngine';
// import { ComposableView } from '../../ViewComposition/ComposableView';
// import { RouteViewObject } from '../../ViewObjects/Samples/RouteViewObject';
// import { ControllableGameObject } from '../../GameObjects/ControllableGameObeject';
// import { ClickHandler } from './ClickHandler';
// import { Coordinate } from '../../Controllers/Coordinate';
// export class RouteClickHandler implements ClickHandler{

//     private gameObject: ControllableGameObject;
//     private viewObject: RouteViewObject;
//     private route: Coordinate[];
//     private gameArea: ComposableView;
//     private clickManager: ClickableManager;
//     private drawRouteClickStrategy: DrawRouteClickStrategy;

//     public constructor(gameObject: ControllableGameObject, route: Coordinate[], viewObject: RouteViewObject, gameArea: ComposableView, clickManager: ClickableManager, drawRouteClickStrategy: DrawRouteClickStrategy){
//         this.gameObject = gameObject;
//         this.route = route;
//         this.viewObject = viewObject;
//         this.gameArea = gameArea;
//         this.clickManager = clickManager;
//         this.drawRouteClickStrategy = drawRouteClickStrategy;
//     }

//     handleClick(event: MouseEvent, scale: number) {
//         console.log('handling intercepted click');
//         if(event.y - this.gameArea.y < 120){
//             console.log("what");
//             this.clickManager.clickInterceptor = null;
//             this.drawRouteClickStrategy.finish(this.route);
//             return;
//         }
//         this.route.push(new Coordinate(event.x - this.gameArea.x, event.y - this.gameArea.y));
//         this.viewObject.updateRoute(this.route);
//     }

//     handleMouseDown(event: MouseEvent, scale: number){}
//     handleMouseUp(event: MouseEvent, scale: number){}

// }