import { GameEngine } from '../../Engines/GameEngine';
import { ClickStrategy } from '../ClickStrategy';
export class PauseGameClickStrategy implements ClickStrategy {
    public execute(object: Object) {
        GameEngine.getInstance().stop();
    }
}