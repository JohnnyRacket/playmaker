import { ReferenceManager } from '../../Engines/ReferenceManager';
import { IViewObject } from '../../ViewObjects/ViewObject.interface';
import { RenderEngine } from '../../Engines/RenderEngine';
import { MatchTemplater } from '../../Engines/MatchTemplater';
import { ClickStrategy } from '../ClickStrategy';
export class FindMatchClickStrategy implements ClickStrategy{
    
    public execute(object: Object) {
        MatchTemplater.getInstance().createGame();
        //RenderEngine.getInstance().unregister(object as IViewObject);
        let refs = RenderEngine.getInstance().getReferencesForStage('menuStage');
        refs.forEach(element => {
            RenderEngine.getInstance().unregister(element as IViewObject);
        });
    }
}