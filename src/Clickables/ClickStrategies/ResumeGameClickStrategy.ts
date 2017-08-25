import { GameEngine } from '../../Engines/GameEngine';
import { ClickStrategy } from '../ClickStrategy';
export class ResumeGameClickStrategy implements ClickStrategy{
    public execute(object: Object) {
        GameEngine.getInstance().start();
    }

}