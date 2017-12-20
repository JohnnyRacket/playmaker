import { GameMap } from '../Engines/GameMap';
import { ControllableGameObject } from '../GameObjects/ControllableGameObeject';
import { Controller } from './Controller';
import { CollidableGameObject } from "../GameObjects/CollidableGameObject";
import { CollisionManager } from "../Engines/CollisionManager";
import { Player } from '../GameObjects/Samples/Player';
import { DefenderController } from './DefenderController';
import { TouchPlayHandler } from '../Clickables/ClickHandlers/TouchPlayHandler';
import { ClickableManager } from '../Engines/ClickableManager';

export class InputController extends Controller{
    
    protected angle: number = 0;
    private right: boolean = false;
    private left: boolean = false;
    private speed: number = 1.5;
    private turning: boolean = false;
    private collisionManager: CollisionManager;
    private releasedLeft: number = 0;
    private releasedRight: number = 0;
    private jumpLeft: number = 0;
    private jumpRight: number = 0;
    public jumped: number = 0;
    private touchHandler: TouchPlayHandler;
    


    public constructor(subject: ControllableGameObject, collisionManager: CollisionManager, clickableManager: ClickableManager){
        super(subject);
        this.collisionManager = collisionManager;
        this.angle = this.subject.angle * Math.PI/180 || 0;
        this.subject.angle = this.angle;
        window.addEventListener('keydown', (event) => {this.onKeyDown(event.keyCode);}, false);
        window.addEventListener('keyup', (event) => {this.onKeyUp(event.keyCode);}, false);
        this.touchHandler = new TouchPlayHandler(this);
        clickableManager.clickInterceptor = this.touchHandler;
    }

    public onKeyDown(keyCode: number){
        if(keyCode == 37){//left
            this.left = true;
        }
        if(keyCode == 39){//right
            this.right = true;
        }
    }

    public onKeyUp(keyCode: number){
        if(keyCode == 37){//left
            this.left = false;
            this.releasedLeft = 3;
        }
        if(keyCode == 39){//right
            this.right = false;
            this.releasedRight = 3;
        }
    }

    decide() {
        this.turning = false;
        if(this.right) {
            if(this.releasedRight >0 && this.jumped <=0){
                this.jumpRight = 6;
                this.jumped = 60; 
                this.releasedRight = 0;
                this.juked();
                return;
            }
            this.angle += (5 - this.subject.speed) * 2 * Math.PI/180;
            this.turning = true;
        }
        if(this.left){
            if(this.releasedLeft > 0 && this.jumped <=0){
                this.jumpLeft = 6;
                this.jumped = 60;
                this.releasedLeft = 0;
                this.juked();
                return;
            }
            this.angle -= (5 - this.subject.speed) * 2 * Math.PI/180;
            this.turning = true;
        } 
        this.subject.angle = this.angle;
        if (this.releasedLeft > 0) this.releasedLeft--;
        if (this.releasedRight > 0) this.releasedRight--;
        if(this.jumped > 0) this.jumped--; 
    }
    act() {
        //console.log(this.jump);
        if(this.jumpLeft > 0 || this.jumpRight > 0){
            if(this.jumpLeft > 0){ //jump left
                let angle = this.subject.angle - (60 * Math.PI/180);
                
                if(!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y ) 
                && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y )
                ){
                    this.subject.x += 3 * Math.cos(angle);
                }
                if(!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
                && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
                ){
                    this.subject.y += 3 * Math.sin(angle);
                }
                
                this.jumpLeft--;
            }
            if(this.jumpRight > 0){//jump right
                let angle = this.subject.angle + (60 * Math.PI/180);
                if(!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y ) 
                && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y )
                ){
                    this.subject.x += 3 * Math.cos(angle);
                }
                if(!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
                && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
                ){
                    this.subject.y += 3 * Math.sin(angle);
                }
                
                this.jumpRight--;
            }
        }else{
            if(this.turning){
                if (this.speed > 1.3)
                this.speed -= .015;
            }else {
                if(this.speed < this.subject.speed - ((this.speed*2)/75))
                this.speed +=((this.speed*2)/75);
            }
            //console.log(this.speed);
            //console.log(this.subject.x + (this.subject.speed * Math.cos(this.angle)));
            // this.subject.x += this.subject.speed * Math.cos(this.angle);
            // this.subject.y += this.subject.speed * Math.sin(this.angle);
            if(!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y ) 
            && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y )
            ){
                this.subject.x += this.speed * Math.cos(this.subject.angle);
            }
            if(!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
            && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
            ){
                this.subject.y += this.speed * Math.sin(this.subject.angle);
            }
        }
    }

    collide(object: CollidableGameObject) {

    }

    private juked(){
        let defenders = GameMap.getInstance().getAllOfType('defender');
        defenders.forEach(defender => {
            ((defender.object as Player).controller as DefenderController).juked = 15;
        });
    }

}