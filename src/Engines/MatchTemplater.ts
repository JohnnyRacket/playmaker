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

export class MatchTemplater {

    private static _instance: MatchTemplater;
    private gameView: ComposableView;
    private playerFactory: PlayerFactory;
    private playerVOFactory: PlayerViewObjectFactory;
    private clickManager: ClickableManager;

    public constructor(gameView: ComposableView, playerFactory: PlayerFactory, playerVOFactory: PlayerViewObjectFactory, clickManager: ClickableManager) {
        if(MatchTemplater._instance){
            throw new Error("Error: Instantiation failed: Use MatchTemplater.getInstance() instead of new.");
        }
        this.gameView = gameView;
        this.playerFactory = playerFactory;
        this.playerVOFactory = playerVOFactory;
        this.clickManager = clickManager;
        MatchTemplater._instance = this;
    }
 
    public static getInstance(): MatchTemplater
    {
        return MatchTemplater._instance;
    }

    public createGame(){
        //create the player you control youreself (runner)
        let runner: Player = this.playerFactory.createRunner(160,400, -90);
        let runnerViewObject = this.playerVOFactory.CreateRunnerInArea(runner, this.gameView);


        //create blockers with aroutes
        let blockers: Player[] = [];
        let blockerVOs: SquarePlayerViewObject[] = [];

        blockers.push(this.playerFactory.createBlocker(110,300,new Route([new Coordinate(90,280)]), this.gameView));
        blockers.push(this.playerFactory.createBlocker(145,300,new Route([new Coordinate(130,290)]), this.gameView));
        blockers.push(this.playerFactory.createBlocker(180,300,new Route([new Coordinate(150,280)]), this.gameView));
        blockers.push(this.playerFactory.createBlocker(230,300,new Route([new Coordinate(260,280)]), this.gameView));
        
        //create the view objects for each blocker
        blockers.forEach(blocker => {
            blockerVOs.push(this.playerVOFactory.CreateBlockerInArea(blocker, this.gameView));
        });
        
        //create defenders with routes
        let defenders: Player[] = [];
        let defenderVOs: SquarePlayerViewObject[] = [];

        defenders.push(this.playerFactory.createDefender(60,250,new Route([new Coordinate(80,270)]), this.gameView));
        defenders.push(this.playerFactory.createDefender(110,250,new Route([new Coordinate(130, 270)]), this.gameView));
        defenders.push(this.playerFactory.createDefender(160,250,new Route([new Coordinate(160,150), new Coordinate(170,100)]), this.gameView));
        defenders.push(this.playerFactory.createDefender(260,250,new Route([new Coordinate(240,270)]), this.gameView));
        defenders.push(this.playerFactory.createDefender(210,250,new Route([new Coordinate(190,270)]), this.gameView));

        defenders.forEach(defender => {
            defenderVOs.push(this.playerVOFactory.CreateDefenderInArea(defender, this.gameView));
        });
        GameEngine.getInstance().stop();
        
        //this will moack stage 2 being hit where routes need to be drawn
        let visitor = new RouteDrawingStageVisitor(this.clickManager, this.gameView);
        blockerVOs.forEach(blockerVO => {
            blockerVO.accept(visitor);
        });


        // setTimeout(function(){
        //     let objects = GameEngine.getInstance().getReferencesForStage("gameplayStage");
        //     objects.forEach(object => {
        //         GameEngine.getInstance().unregister(object as IGameObject);
        //         //need to chekc that the hitboxes arent being ghosts lmao
        //     });
            
        // }, 10000);
    }

}
