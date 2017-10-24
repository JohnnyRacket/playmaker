import { CenterDrawingStrategy } from '../DrawingStrategies/CenterDrawingStrategy';
import { SquarePlayerViewObject } from './Samples/SquarePlayerViewObject';
import { ComposableView } from '../ViewComposition/ComposableView';
import { Player } from '../GameObjects/Samples/Player';
export class PlayerViewObjectFactory{

    CreateRunnerInArea(runner: Player, area: ComposableView): SquarePlayerViewObject{
        let playerVO = new SquarePlayerViewObject(runner.x,runner.y,16,16,0,runner, new CenterDrawingStrategy());
        playerVO.color = '#3498db';
        playerVO.outline = '#ffffff';
        runner.register(playerVO);
        area.addView(playerVO);
        return playerVO;
    }

    CreateBlockerInArea(blocker: Player, area: ComposableView): SquarePlayerViewObject{
        let playerVO = new SquarePlayerViewObject(blocker.x,blocker.y,16,16,0,blocker, new CenterDrawingStrategy());
        playerVO.color = '#3498db';
        blocker.register(playerVO);
        area.addView(playerVO);
        return playerVO;
    }

    CreateDefenderInArea(defender: Player, area: ComposableView): SquarePlayerViewObject{
        let playerVO = new SquarePlayerViewObject(defender.x,defender.y,16,16,0,defender, new CenterDrawingStrategy());
        playerVO.color = '#e74c3c';
        defender.register(playerVO);
        area.addView(playerVO);
        return playerVO;
    }
}