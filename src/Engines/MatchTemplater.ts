import { AbilityDots } from '../ViewObjects/Samples/AbilityDots';
import { CountDownViewObject } from '../MenuViewObjects/CountDownViewObject';
import { CenterDrawingStrategy } from '../DrawingStrategies/CenterDrawingStrategy';
import { ClickStrategy } from '../Clickables/ClickStrategy';
import { PlaySelectViewObject } from '../MenuViewObjects/PlaySelectViewObject';
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
import { ScoreKeeper } from './ScoreKeeper';
import { LogoViewObject } from '../MenuViewObjects/LogoViewObject';

export class MatchTemplater {

    private static _instance: MatchTemplater;
    private gameView: ComposableView;
    private playerFactory: PlayerFactory;
    private playerVOFactory: PlayerViewObjectFactory;
    private fieldFactory: FieldFactory;
    private clickManager: ClickableManager;
    private collisionManager: CollisionManager;
    private messages: ComposableViewObject[] = [];
    private abilityDots: AbilityDots;

    private blockers: Player[] = [];
    private blockerVOs: SquarePlayerViewObject[] = [];

    private defenders: Player[] = [];
    private defenderVOs: SquarePlayerViewObject[] = [];

    private playSelection: number = 0;
    private blockerPositions : Coordinate[][] = [];

    private runner: Player;
    private runnerViewObject: SquarePlayerViewObject;

    public constructor(gameView: ComposableView, playerFactory: PlayerFactory, playerVOFactory: PlayerViewObjectFactory, fieldFactory: FieldFactory, clickManager: ClickableManager, collisionManager: CollisionManager) {
        if(MatchTemplater._instance){
            throw new Error("Error: Instantiation failed: Use MatchTemplater.getInstance() instead of new.");
        }
        this.gameView = gameView;
        this.playerFactory = playerFactory;
        this.playerVOFactory = playerVOFactory;
        this.fieldFactory = fieldFactory;
        this.clickManager = clickManager;
        this.collisionManager = collisionManager;
        MatchTemplater._instance = this;
    }
 
    public static getInstance(): MatchTemplater
    {
        return MatchTemplater._instance;
    }

    public touchdown(){
        let startBanner = new StickerTextViewObject(0,100,320,80,0,new TopLeftDrawingStrategy(), null, null, 'Touchdown!');
        startBanner.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        startBanner.font = 'bold 48px Arial';
        this.gameView.addView(startBanner);
        RenderEngine.getInstance().addReferenceToStage(startBanner, 'touchdownStage');
        setTimeout(() => {
            let refs = RenderEngine.getInstance().getReferencesForStage('touchdownStage');
            refs.forEach(element => {
                RenderEngine.getInstance().unregister(element as IViewObject);
            });
            this.playSelectStage();
        },500);
    }

    public tackled(score: number, hiscore: number){
        let startBanner = new StickerTextViewObject(0,100,320,80,0,new TopLeftDrawingStrategy(), null, null, 'Tackled!');
        startBanner.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        startBanner.font = 'bold 48px Arial';
        startBanner.color = '#E68364';
        this.gameView.addView(startBanner);
        RenderEngine.getInstance().addReferenceToStage(startBanner, 'tackledStage');
        setTimeout(() => {
            let refs = RenderEngine.getInstance().getReferencesForStage('tackledStage');
            refs.forEach(element => {
                RenderEngine.getInstance().unregister(element as IViewObject);
            });
            this.gameOver(score, hiscore);
        },500);
    }

    public gameOver(score: number, hiscore: number){
        let backdrop = new StickerTextViewObject(0,0,320,480,0,new TopLeftDrawingStrategy(), null, null, ' ');
        backdrop.backgroundColor = 'rgba(0, 0, 0, 0.5)';        
        this.gameView.addView(backdrop);
        let gameOverBanner = new LogoViewObject(0,120,320,80,0,new TopLeftDrawingStrategy(), null, null, 'Game Over.');
        this.gameView.addView(gameOverBanner);
        let hiScore = new LogoViewObject(0,190,320,80,0,new TopLeftDrawingStrategy(), null, null, 'Hi-Score: '+ hiscore);
        hiScore.font = "bold 32px Arial";
        this.gameView.addView(hiScore);
        let scoreView = new LogoViewObject(0,240,320,80,0,new TopLeftDrawingStrategy(), null, null, 'Score: ' + score);
        scoreView.font = "bold 32px Arial";
        this.gameView.addView(scoreView);
        RenderEngine.getInstance().addReferenceToStage(gameOverBanner, 'gameOverStage');
        RenderEngine.getInstance().addReferenceToStage(hiScore, 'gameOverStage');
        RenderEngine.getInstance().addReferenceToStage(scoreView, 'gameOverStage');
        RenderEngine.getInstance().addReferenceToStage(backdrop, 'gameOverStage');
        
        

        let startButton = new ButtonViewObject(10,340,150,50,0,new TopLeftDrawingStrategy(), null, 'Play Again', () => {
            let refs = RenderEngine.getInstance().getReferencesForStage('gameOverStage');
            refs.forEach(element => {
                RenderEngine.getInstance().unregister(element as IViewObject);
            });
            this.playSelectStage();
        });
        let hcent = new HorizontalCenterPositioningDecorator(startButton);
        this.gameView.addView(hcent);
        this.clickManager.addClickable(hcent);
        RenderEngine.getInstance().addReferenceToStage(hcent, 'gameOverStage');
    }

    public resetGame(){
        GameEngine.getInstance().stop();
        ScoreKeeper.getInstance().unlockScoring();
        

        this.blockers.forEach(blocker => {
            GameEngine.getInstance().unregister(blocker);
        });
        this.defenders.forEach(defender => {
            GameEngine.getInstance().unregister(defender);
        });
        this.blockerVOs.forEach(blocker => {
            RenderEngine.getInstance().unregister(blocker);
        });
        this.defenderVOs.forEach(defender => {
            RenderEngine.getInstance().unregister(defender);
        });
        this.blockers = []; this.defenders = []; this.blockerVOs = []; this.defenderVOs = [];
        if (this.runner) GameEngine.getInstance().unregister(this.runner);
        if (this.runnerViewObject) RenderEngine.getInstance().unregister(this.runnerViewObject);
        this.runner = null;
        this.runnerViewObject = null;
        this.collisionManager.dumpActiveHitboxes();
        GameMap.getInstance().clearGameMap();

        this.runner = this.playerFactory.createRunner(160,380, -90);
        this.runnerViewObject = this.playerVOFactory.CreateRunnerInArea(this.runner, this.gameView);
        ScoreKeeper.getInstance().finishedResetting();
        
    }
    public createGame(){
        //create the player you control youreself (runner)

        //
        
        
        //GameEngine.getInstance().stop();
        //add endzone to score in
        let endzone = this.fieldFactory.CreateEndZone(0,0);//new Endzone(0,0,320,120,'endzone');
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

        let scoreVO = new ScoreViewObject(20,0,120,40,0,new TopLeftDrawingStrategy(), null, null);
        let bottomLockScore = new BottomLockPositioningDecorator(scoreVO, 10)
        this.gameView.addView(bottomLockScore);


        

        this.playSelectStage();
        // setTimeout(function(){
        //     let objects = GameEngine.getInstance().getReferencesForStage("gameplayStage");
        //     objects.forEach(object => {
        //         GameEngine.getInstance().unregister(object as IGameObject);
        //         //need to chekc that the hitboxes arent being ghosts lmao
        //     });
            
        // }, 10000);
    }

    private playSelectStage(){
        this.resetGame();
        
        let blockerIndex = 0;
        this.blockerPositions = [
            [new Coordinate(110, 300), new Coordinate(145, 300), new Coordinate(180, 300), new Coordinate(215, 300)],
            [new Coordinate(70, 300), new Coordinate(105, 300), new Coordinate(140, 300), new Coordinate(200, 300)],
            [new Coordinate(120, 300), new Coordinate(185, 300), new Coordinate(220, 300), new Coordinate(255, 300)]
            //[new Coordinate(70, 300), new Coordinate(105, 300), new Coordinate(220, 300), new Coordinate(255, 300)],
        ]
        let blockerPositionIndex = Math.floor(Math.random() * this.blockerPositions.length);
        

        this.blockers.push(this.playerFactory.createBlocker(this.blockerPositions[blockerPositionIndex][0].x,this.blockerPositions[0][0].y,null, this.gameView));
        this.blockers.push(this.playerFactory.createBlocker(this.blockerPositions[blockerPositionIndex][1].x,this.blockerPositions[0][1].y,null, this.gameView));
        this.blockers.push(this.playerFactory.createBlocker(this.blockerPositions[blockerPositionIndex][2].x,this.blockerPositions[0][2].y,null, this.gameView));
        this.blockers.push(this.playerFactory.createBlocker(this.blockerPositions[blockerPositionIndex][3].x,this.blockerPositions[0][3].y,null, this.gameView));
        
        //create the view objects for each blocker 
        this.blockers.forEach(blocker => {
            this.blockerVOs.push(this.playerVOFactory.CreateBlockerInArea(blocker, this.gameView));
        });
        // let leftButton = new ButtonViewObject(20,215,50,50,0,new TopLeftDrawingStrategy(), null, '<', () => {
        //     this.setPlay(this.playSelection - 1);
        //     this.changeBlockerLayout(this.playSelection);
        // });

        // let rightButton = new ButtonViewObject(250,215,50,50,0,new TopLeftDrawingStrategy(), null, '>', () => {
        //     this.setPlay(this.playSelection + 1);
        //     this.changeBlockerLayout(this.playSelection);
        // });
        // this.clickManager.addClickable(leftButton);

        // this.clickManager.addClickable(rightButton);
        
        // this.gameView.addView(leftButton);
        // this.gameView.addView(rightButton);
        // RenderEngine.getInstance().addReferenceToStage(leftButton, 'playSelectStage');
        // RenderEngine.getInstance().addReferenceToStage(rightButton, 'playSelectStage');

        // let selectButton = new ButtonViewObject(50,410,100,50,0,new TopLeftDrawingStrategy(), null, 'Select', () => {
            
        //     let refs = RenderEngine.getInstance().getReferencesForStage('playSelectStage');
        //     refs.forEach(element => {
        //         RenderEngine.getInstance().unregister(element as IViewObject);
        //     });
        //     this.messages.forEach(element =>{
        //         this.gameView.remove(element);
        //     });
        //     this.messages = [];
            
        //     this.routeDrawStage();
        // });
        // let hcent = new RightLockPositioningDecorator(selectButton, 25);
        // this.gameView.addView(hcent);
        // this.clickManager.addClickable(hcent);
        // RenderEngine.getInstance().addReferenceToStage(hcent, 'playSelectStage');

        // let text = new StickerTextViewObject(10,20, 280, 50, 0, new TopLeftDrawingStrategy(), null, null, "Tap Arrows to");
        // text.backgroundColor = '#2ecc71';
        // text.font = "bold 26px Arial"
        // let text2 = new StickerTextViewObject(10,60, 280, 50, 0, new TopLeftDrawingStrategy(), null, null, "Change Plays");
        // text2.backgroundColor = '#2ecc71';
        // text2.font = "bold 26px Arial";
        // this.messages.push(new HorizontalCenterPositioningDecorator(text));
        // this.gameView.addView(this.messages[0]);
        // this.messages.push(new HorizontalCenterPositioningDecorator(text2));
        // this.gameView.addView(this.messages[1]);

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
        let defenderPositionIndex = Math.floor(Math.random() * defenderPositions.length);
        
        for(let i = 0; i < 5; ++i){
            console.log(defenderPositionIndex);
            var route = defenderRoutes[Math.floor(Math.random()*defenderRoutes.length)];
            var newRoute: Coordinate[] = [];
            route.forEach(coordinate => {
                newRoute.push( new Coordinate(coordinate.x + defenderPositions[defenderPositionIndex][i].x, coordinate.y + defenderPositions[defenderPositionIndex][i].y));
            });
            this.defenders.push(this.playerFactory.createDefender(defenderPositions[defenderPositionIndex][i].x,defenderPositions[defenderPositionIndex][i].y,new Route(newRoute), this.gameView));
        }
        this.defenders.forEach(defender => {
            this.defenderVOs.push(this.playerVOFactory.CreateDefenderInArea(defender, this.gameView));
        });


        // let startButton = new ButtonViewObject(50,410,100,50,0,new TopLeftDrawingStrategy(), null, 'Start', () => {
        //     GameEngine.getInstance().start();
        //     let refs = RenderEngine.getInstance().getReferencesForStage('routeStage');
        //     refs.forEach(element => {
        //         RenderEngine.getInstance().unregister(element as IViewObject);
        //     });
        //     this.messages.forEach(element =>{
        //         this.gameView.remove(element);
        //     });
        //     this.messages = [];
        // });
        // let hcent = new RightLockPositioningDecorator(startButton, 25);
        // this.gameView.addView(hcent);
        // this.clickManager.addClickable(hcent);
        // RenderEngine.getInstance().addReferenceToStage(hcent, 'routeStage');
        this.abilityDots = this.playerVOFactory.PlayAbilityDots(this.runner, this.gameView);
        
        this.CountdownStage();
    }

    public CountdownStage(){
        let startBanner = new StickerTextViewObject(0,100,320,80,0,new TopLeftDrawingStrategy(), null, null, 'Get Ready...');
        startBanner.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        startBanner.font = 'bold 42px Arial';
        this.gameView.addView(startBanner);
        RenderEngine.getInstance().addReferenceToStage(startBanner, 'routeStage');
        let count = 4;
        let counter = setInterval(() => {
            --count;
            if(count > 1) {
                startBanner.text = "Get Ready...";
            }//nothing{}
            else if(count == 1 ) startBanner.text = "Go!";
            else{
                clearInterval(counter);
                let refs = RenderEngine.getInstance().getReferencesForStage('routeStage');
                refs.forEach(element => {
                    RenderEngine.getInstance().unregister(element as IViewObject);
                });
                GameEngine.getInstance().start();
            }
        },300);
    }


    private changeBlockerLayout(play: number){
        //create blockers with aroutes
       for(let i = 0; i < this.blockers.length; ++i){
           this.blockers[i].x = this.blockerPositions[play][i].x;
           this.blockers[i].y = this.blockerPositions[play][i].y;
           
       }

       this.blockerVOs.forEach(blockerVO => {
           blockerVO.update();
       });
  
    }

    private routeDrawStage(){
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
        let defenderPositionIndex = Math.floor(Math.random() * defenderPositions.length);
        
        for(let i = 0; i < 5; ++i){
            console.log(defenderPositionIndex);
            var route = defenderRoutes[Math.floor(Math.random()*defenderRoutes.length)];
            var newRoute: Coordinate[] = [];
            route.forEach(coordinate => {
                newRoute.push( new Coordinate(coordinate.x + defenderPositions[defenderPositionIndex][i].x, coordinate.y + defenderPositions[defenderPositionIndex][i].y));
            });
            this.defenders.push(this.playerFactory.createDefender(defenderPositions[defenderPositionIndex][i].x,defenderPositions[defenderPositionIndex][i].y,new Route(newRoute), this.gameView));
        }
        this.defenders.forEach(defender => {
            this.defenderVOs.push(this.playerVOFactory.CreateDefenderInArea(defender, this.gameView));
        });

        //create route drawing stuff
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
        this.blockerVOs.forEach(blockerVO => {
            blockerVO.accept(visitor);
        });


        //add start button
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
        let hcent = new RightLockPositioningDecorator(startButton, 25);
        this.gameView.addView(hcent);
        this.clickManager.addClickable(hcent);
        RenderEngine.getInstance().addReferenceToStage(hcent, 'routeStage');
    }
    
    private setPlay(number){
        
        if (number < 0) this.playSelection = this.blockerPositions.length -1;
        else if(number >= this.blockerPositions.length) this.playSelection = 0;
        else this.playSelection = number;
    }

}
