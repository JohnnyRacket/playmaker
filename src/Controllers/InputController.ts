import { ControllableGameObject } from '../GameObjects/ControllableGameObeject';
import { Controller } from './Controller';
import { CollidableGameObject } from "../GameObjects/CollidableGameObject";
import { CollisionManager } from "../Engines/CollisionManager";

export class InputController extends Controller{
    
    protected angle: number = 0;
    private right: boolean = false;
    private left: boolean = false;
    private collisionManager: CollisionManager;
    


    public constructor(subject: ControllableGameObject, collisionManager: CollisionManager){
        super(subject);
        this.collisionManager = collisionManager;
        this.angle = this.subject.angle * Math.PI/180 || 0;
        window.addEventListener('keydown', (event) => {this.onKeyDown(event);}, false);
        window.addEventListener('keyup', (event) => {this.onKeyUp(event);}, false);
    }

    private onKeyDown(event: KeyboardEvent){
        if(event.keyCode == 37){//left
            this.left = true;
        }
        if(event.keyCode == 39){//right
            this.right = true;
        }
    }

    private onKeyUp(event: KeyboardEvent){
        if(event.keyCode == 37){//left
            this.left = false;
        }
        if(event.keyCode == 39){//right
            this.right = false;
        }
    }

    decide() {
        if(this.right) {
            this.angle += this.subject.speed * 2 * Math.PI/180;
        }
        if(this.left){
            this.angle -= this.subject.speed * 2 * Math.PI/180;
        } 
        this.subject.angle = this.angle;
    }
    act() {
        console.log(this.subject.x + (this.subject.speed * Math.cos(this.angle)));
        // this.subject.x += this.subject.speed * Math.cos(this.angle);
        // this.subject.y += this.subject.speed * Math.sin(this.angle);
        if(!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y ) 
        && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y )
        ){
            this.subject.x += this.subject.speed * Math.cos(this.subject.angle);
        }
        if(!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
        && !this.collisionManager.wallCollisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))
        ){
            this.subject.y += this.subject.speed * Math.sin(this.subject.angle);
        }
    }

    collide(object: CollidableGameObject) {
        if(object.type == 'endzone'){
            console.log("ENDZONE, YOU WIN!!!!");
            //console.log('being slowed by a blocker!');
        }
    }

}