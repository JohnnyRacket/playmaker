import { IGameObject } from '../GameObjects/GameObject.interface';
import { ReferenceManager } from './ReferenceManager';
import { ComposableView } from '../ViewComposition/ComposableView';
import { Route } from '../Controllers/Route';
import { PlayerFactory } from "../GameObjects/PlayerFactory";
import { Coordinate } from "../Controllers/Coordinate";
import { GameEngine } from "./GameEngine";

export class MatchTemplater {

    private static _instance: MatchTemplater;
    private gameView: ComposableView;

    public constructor(gameView: ComposableView) {
        if(MatchTemplater._instance){
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        this.gameView = gameView;
        MatchTemplater._instance = this;
    }
 
    public static getInstance(): MatchTemplater
    {
        return MatchTemplater._instance;
    }

    public createGame(){
        //create the player you control youreself (runner)
        PlayerFactory.createRunnerInArea(160,400, -90, this.gameView);

        //create blockers with aroutes
        PlayerFactory.createBlockerInArea(110,300,new Route([new Coordinate(60,280)]), this.gameView);
        PlayerFactory.createBlockerInArea(145,300,new Route([new Coordinate(110,280)]), this.gameView);
        PlayerFactory.createBlockerInArea(180,300,new Route([new Coordinate(150,280)]), this.gameView);
        PlayerFactory.createBlockerInArea(230,300,new Route([new Coordinate(260,280)]), this.gameView);
        //create defenders with routes
        PlayerFactory.createDefenderInArea(60,250,new Route([new Coordinate(80,270)]), this.gameView);
        PlayerFactory.createDefenderInArea(110,250,new Route([new Coordinate(130, 270)]), this.gameView);
        PlayerFactory.createDefenderInArea(160,250,new Route([new Coordinate(160,150), new Coordinate(170,100)]), this.gameView);
        PlayerFactory.createDefenderInArea(260,250,new Route([new Coordinate(240,270)]), this.gameView);
        PlayerFactory.createDefenderInArea(210,250,new Route([new Coordinate(190,270)]), this.gameView);

        setTimeout(function(){
            console.log('removing from game loop');
            let objects = ReferenceManager.getInstance().getReferencesForStage("gameplayStage");
            objects.forEach(object => {
                GameEngine.getInstance().unregister(object as IGameObject);
                //need to chekc that the hitboxes arent being ghosts lmao
            });
            
        }, 1000);
    }

}