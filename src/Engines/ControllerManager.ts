import { Controller } from '../Controllers/Controller';

export class ControllerManager{
    private _controllers: Controller[] = [];
    get controllers(): Controller[]{
        return this._controllers;
    }

    public addController(controller: Controller){
        this._controllers.push(controller);
    }
}