import { BottomLockPositioningDecorator } from '../ViewObjects/PositioningDecorators/BottomLockPositioningDecorator';
import { ScoreViewObject } from '../MenuViewObjects/ScoreViewObject';
import { StickerTextViewObject } from '../MenuViewObjects/StickerTextViewObject';
import { DebugViewObject } from '../ViewObjects/Samples/DebugViewObject';
import { CollisionManager } from './CollisionManager';
import { Endzone } from '../GameObjects/Samples/Endzone';
import { RenderEngine } from './RenderEngine';
import {
    HorizontalCenterPositioningDecorator,
} from '../ViewObjects/PositioningDecorators/HorizontalCenterPositioningDecorator';
import { HorizontalCenterDecorator } from '../ViewComposition/Decorators/HorizontalCenterDecorator';
import { ResumeGameClickStrategy } from '../Clickables/ClickStrategies/ResumeGameClickStrategy';
import { TopLeftDrawingStrategy } from '../DrawingStrategies/TopLeftDrawingStrategy';
import { ButtonViewObject } from '../MenuViewObjects/ButtonViewObject';
import { ClickableManager } from './ClickableManager';
import { SquarePlayerViewObject } from '../ViewObjects/Samples/SquarePlayerViewObject';
import { Player } from '../GameObjects/Samples/Player';
import { GameMap } from './GameMap';
import { IGameObject } from '../GameObjects/GameObject.interface';
import { ReferenceManager } from './ReferenceManager';
import { ComposableView } from '../ViewComposition/ComposableView';
import { Route } from '../Controllers/Route';
import { PlayerFactory } from "../GameObjects/PlayerFactory";
import { Coordinate } from "../Controllers/Coordinate";
import { GameEngine } from "./GameEngine";
import { MapObject } from '../GameObjects/MapObject';
import { PlayerViewObjectFactory } from '../ViewObjects/PlayerViewObjectFactory';
import { RouteDrawingStageVisitor } from '../Clickables/RouteDrawingStageVisitor';
import { StartGameClickStrategy } from '../Clickables/ClickStrategies/StartGameClickStrategy';
import { IViewObject } from '../ViewObjects/ViewObject.interface';
import { FieldFactory } from '../GameObjects/FieldFactory';
import { ComposableViewObject } from '../ViewObjects/ComposableViewObject';
import { RightLockPositioningDecorator } from '../ViewObjects/PositioningDecorators/RightLockPositioningDecorator';

export class MatchTemplater {

    private static _instance: MatchTemplater;
    private gameView: ComposableView;
    private playerFactory: PlayerFactory;
    private playerVOFactory: PlayerViewObjectFactory;
    private fieldFactory: FieldFactory;
    private clickManager: ClickableManager;
    private messages: ComposableViewObject[] = [];

    public constructor(gameView: ComposableView, playerFactory: PlayerFactory, playerVOFactory: PlayerViewObjectFactory, fieldFactory: FieldFactory, clickManager: ClickableManager) {
        if(MatchTemplater._instance){
            throw new Error("Error: Instantiation failed: Use MatchTemplater.getInstance() instead of new.");
        }
        this.gameView = gameView;
        this.playerFactory = playerFactory;
        this.playerVOFactory = playerVOFactory;
        this.fieldFactory = fieldFactory;
        this.clickManager = clickManager;
        MatchTemplater._instance = this;
    }
 
    public static getInstance(): MatchTemplater
    {
        return MatchTemplater._instance;
    }

    public createGame(){
        //create the player you control youreself (runner)
        let runner: Player = this.playerFactory.createRunner(160,380, -90);
        let runnerViewObject = this.playerVOFactory.CreateRunnerInArea(runner, this.gameView);


        //create blockers with aroutes
        let blockers: Player[] = [];
        let blockerVOs: SquarePlayerViewObject[] = [];

        blockers.push(this.playerFactory.createBlocker(110,300,null, this.gameView));
        blockers.push(this.playerFactory.createBlocker(145,300,new Route([new Coordinate(130,290)]), this.gameView));
        blockers.push(this.playerFactory.createBlocker(180,300,new Route([new Coordinate(150,280)]), this.gameView));
        blockers.push(this.playerFactory.createBlocker(215,300,new Route([new Coordinate(260,280)]), this.gameView));
        
        //create the view objects for each blocker
        blockers.forEach(blocker => {
            blockerVOs.push(this.playerVOFactory.CreateBlockerInArea(blocker, this.gameView));
        });
        
        //create defenders with routes
        let defenderPositions: Coordinate[][] = [
            [new Coordinate(60, 260), new Coordinate(110, 260), new Coordinate(160, 260), new Coordinate(210, 260), new Coordinate(260, 260)],
            [new Coordinate(100, 260), new Coordinate(130, 260), new Coordinate(160, 260), new Coordinate(190, 260), new Coordinate(220, 260)],
            [new Coordinate(60, 160), new Coordinate(110, 260), new Coordinate(160, 260), new Coordinate(210, 260), new Coordinate(260, 160)],
            [new Coordinate(80, 260), new Coordinate(133, 260), new Coordinate(186, 260), new Coordinate(240, 260), new Coordinate(160, 160)],
            [new Coordinate(60, 260), new Coordinate(110, 260), new Coordinate(160, 260), new Coordinate(210, 260), new Coordinate(260, 260)],
            [new Coordinate(80, 260), new Coordinate(160, 260), new Coordinate(240, 260), new Coordinate(120, 160), new Coordinate(200, 160)]
        ];
        let defenderRoutes: Coordinate[][] = [
            [new Coordinate(40,0), new Coordinate(0,40)], //right then down
            [new Coordinate(-40,0),new Coordinate(0,40)], // left then down
            [new Coordinate(0,30)], //straight down
            [new Coordinate(30,30)], //downright
            [new Coordinate(-30,30)], //downleft
            [new Coordinate(0,-60)], //drop into coverage
        ];
        let defenders: Player[] = [];
        let defenderVOs: SquarePlayerViewObject[] = [];
        let defenderPositionIndex = Math.floor(Math.random() * defenderPositions.length);
        
        for(let i = 0; i < 5; ++i){
            console.log(defenderPositionIndex);
            var route = defenderRoutes[Math.floor(Math.random()*defenderRoutes.length)];
            var newRoute: Coordinate[] = [];
            route.forEach(coordinate => {
                newRoute.push( new Coordinate(coordinate.x + defenderPositions[defenderPositionIndex][i].x, coordinate.y + defenderPositions[defenderPositionIndex][i].y));
            });
            defenders.push(this.playerFactory.createDefender(defenderPositions[defenderPositionIndex][i].x,defenderPositions[defenderPositionIndex][i].y,new Route(newRoute), this.gameView));
        }
        defenders.forEach(defender => {
            defenderVOs.push(this.playerVOFactory.CreateDefenderInArea(defender, this.gameView));
        });
        //GameEngine.getInstance().stop();
        //add endzone to score in
        let endzone = this.fieldFactory.CreateEndZone(0,0)//new Endzone(0,0,320,120,'endzone');
        //GameEngine.getInstance().register(endzone);
        //let endzoneVO = new DebugViewObject(endzone.x, endzone.y,endzone.width, endzone.height, 0, endzone, new TopLeftDrawingStrategy())
        //this.gameView.addView(endzoneVO);

        //create walls
        let wall1 = this.fieldFactory.CreateWall(-10,0,10,480);
        let wall1VO = new DebugViewObject(wall1.x, wall1.y, wall1.width, wall1.height,0,wall1,new TopLeftDrawingStrategy());
        this.gameView.addView(wall1VO);

        let wall2 = this.fieldFactory.CreateWall(320,0,10,480);
        let wall2VO = new DebugViewObject(wall2.x, wall2.y, wall2.width, wall2.height,0,wall2,new TopLeftDrawingStrategy());
        this.gameView.addView(wall2VO);

        let wall3 = this.fieldFactory.CreateWall(0,480,320,10);
        let wall3VO = new DebugViewObject(wall3.x, wall3.y, wall3.width, wall3.height,0,wall3,new TopLeftDrawingStrategy());
        this.gameView.addView(wall3VO);

        let scoreVO = new ScoreViewObject(20,0,100,40,0,new TopLeftDrawingStrategy(), null, null);
        let bottomLockScore = new BottomLockPositioningDecorator(scoreVO, 10)
        this.gameView.addView(bottomLockScore);


        let text = new StickerTextViewObject(10,20, 280, 50, 0, new TopLeftDrawingStrategy(), null, null, "Tap Your Defenders");
        text.backgroundColor = '#2ecc71';
        text.font = "bold 26px Arial"
        let text2 = new StickerTextViewObject(10,60, 280, 50, 0, new TopLeftDrawingStrategy(), null, null, "To Draw Their Routes");
        text2.backgroundColor = '#2ecc71';
        text2.font = "bold 26px Arial";
        this.messages.push(new HorizontalCenterPositioningDecorator(text));
        this.gameView.addView(this.messages[0]);
        this.messages.push(new HorizontalCenterPositioningDecorator(text2));
        this.gameView.addView(this.messages[1]);

        //this will moack stage 2 being hit where routes need to be drawn
        let visitor = new RouteDrawingStageVisitor(this.clickManager, this.gameView);
        blockerVOs.forEach(blockerVO => {
            blockerVO.accept(visitor);
        });

        let startButton = new ButtonViewObject(50,410,100,50,0,new TopLeftDrawingStrategy(), null, 'Start', () => {
            GameEngine.getInstance().start();
            let refs = RenderEngine.getInstance().getReferencesForStage('routeStage');
            refs.forEach(element => {
                RenderEngine.getInstance().unregister(element as IViewObject);
            });
            this.messages.forEach(element =>{
                this.gameView.remove(element);
            });
            this.messages = [];
        });
        let hcent = new RightLockPositioningDecorator(startButton, 20);
        this.gameView.addView(hcent);
        this.clickManager.addClickable(hcent);
        RenderEngine.getInstance().addReferenceToStage(hcent, 'routeStage');
        // setTimeout(function(){
        //     let objects = GameEngine.getInstance().getReferencesForStage("gameplayStage");
        //     objects.forEach(object => {
        //         GameEngine.getInstance().unregister(object as IGameObject);
        //         //need to chekc that the hitboxes arent being ghosts lmao
        //     });
            
        // }, 10000);
    }

}
