export interface ControleRemoto{
    play():void
    pause():void
}

export interface ControleSom extends ControleRemoto{
    mudarRadio():void
}

export class Bluray implements ControleRemoto {
    play():void{}
    pause():void{}
}

export class Som implements ControleSom {
    play():void{}
    pause():void{}
    mudarRadio():void{}
}