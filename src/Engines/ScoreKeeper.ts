import { MatchTemplater } from './MatchTemplater';
import { IObservable } from '../Observables/Observable.interface';
import { ComposableViewObject } from "../ViewObjects/ComposableViewObject";
import { IObserver } from "../Observables/Observer.interface";
import array = require('lodash/array');


export class ScoreKeeper{
    private static _instance: ScoreKeeper = new ScoreKeeper();

        protected _score: number = 0;
        public get score(): number{
            return this._score;
        }

        private scored: boolean = false;

        private observers: IObserver[] = [];

        public matchTemplater: MatchTemplater; //TODO remove this coupling
    
        private constructor() {
            if(ScoreKeeper._instance){
                throw new Error("Error: Instantiation failed: Use ScoreKeeper.getInstance() instead of new.");
            }
            ScoreKeeper._instance = this;
            //this.register(this.collisionManager);
            //add collision manager to the ticks, add functions for adding and removing stuff
        }
    
        public static getInstance(): ScoreKeeper
        {
            return ScoreKeeper._instance;
        }

        public incrementScore(){
            if(!this.scored){
                this._score++;
                this.scored = true;
                this.updateObservers();
                this.matchTemplater.resetGame();
            }
        }

        public resetScore(){
            this._score = 0;
            this.scored = false;
            this.updateObservers();
            this.matchTemplater.resetGame();
        }

        public unlockScoring(){
            this.scored = false;
        }
        public lockScoring(){
            this.scored = true;
        }

        private updateObservers(){
            this.observers.forEach(observer => {
                observer.update();
            });
        }

        public register(observer: IObserver){
            this.observers.push(observer);
        }
        public unregister(observer: IObserver){
            array.pull(this.observers, observer);
        }
}