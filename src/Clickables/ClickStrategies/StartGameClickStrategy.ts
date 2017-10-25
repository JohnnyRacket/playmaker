import { ReferenceManager } from '../../Engines/ReferenceManager';
import { ClickStrategy } from '../ClickStrategy';
import { GameEngine } from '../../Engines/GameEngine';
import { RenderEngine } from '../../Engines/RenderEngine';
import { IViewObject } from '../../ViewObjects/ViewObject.interface';
export class StartGameClickStrategy implements ClickStrategy{



    public execute(object: Object) {
        GameEngine.getInstance().start();
        let refs = RenderEngine.getInstance().getReferencesForStage('routeStage');
        refs.forEach(element => {
            RenderEngine.getInstance().unregister(element as IViewObject);
        });
    }

}