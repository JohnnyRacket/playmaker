import { ControllableGameObject } from '../GameObjects/ControllableGameObeject';
import { Controller } from './Controller';

export class InputController extends Controller{

    protected angle: number = 0;
    private right: boolean = false;
    private left: boolean = false;


    public constructor(subject: ControllableGameObject, angle?: number){
        super(subject);
        this.angle = angle * Math.PI/180 || 0;
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
            this.angle += this.subject.speed * Math.PI/180;
            console.log('rotate right');
        }
        if(this.left){
            this.angle -= this.subject.speed * Math.PI/180;
            console.log('rotate left');
        } 

    }
    act() {
        this.subject.x += this.subject.speed * Math.cos(this.angle);
        this.subject.y += this.subject.speed * Math.sin(this.angle);
    }

}