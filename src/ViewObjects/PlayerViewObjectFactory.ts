import { CenterDrawingStrategy } from '../DrawingStrategies/CenterDrawingStrategy';
import { SquarePlayerViewObject } from './Samples/SquarePlayerViewObject';
import { ComposableView } from '../ViewComposition/ComposableView';
import { Player } from '../GameObjects/Samples/Player';
import { AbilityDots } from './Samples/AbilityDots';
export class PlayerViewObjectFactory{

    CreateRunnerInArea(runner: Player, area: ComposableView): SquarePlayerViewObject{
        let playerVO = new SquarePlayerViewObject(runner.x,runner.y,16,16,0,runner, new CenterDrawingStrategy());
        playerVO.color = '#3498db';
        playerVO.outline = '#ffffff';
        runner.register(playerVO);
        area.addView(playerVO);
        return playerVO;
    }

    PlayAbilityDots(runner: Player, area: ComposableView){
        let abilityDots = new AbilityDots(runner.x,runner.y + 14,14,3,0,new CenterDrawingStrategy(),runner);
        runner.register(abilityDots);
        area.addView(abilityDots);
        return abilityDots;
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