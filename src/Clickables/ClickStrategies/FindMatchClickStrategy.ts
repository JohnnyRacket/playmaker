import { MatchTemplater } from '../../Engines/MatchTemplater';
import { ClickStrategy } from '../ClickStrategy';
export class FindMatchClickStrategy implements ClickStrategy{
    
    public execute(object: Object) {
        MatchTemplater.getInstance().createGame();
    }
}