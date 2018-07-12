import * as Assets from '../assets';
// import * as sio from 'socket.io-client';

export default class Opponent extends Phaser.Sprite {
    private id: number;
    private totalHealth: number;

    constructor(id, game: Phaser.Game, x: number, y: number) {
        const spriteSheets = [
            Assets.Spritesheets.SpritesheetsWood646410,
            Assets.Spritesheets.SpritesheetsStone646410,
            Assets.Spritesheets.SpritesheetsObsidian646410
        ];

        super(game, x, y, spriteSheets[id].getName());

        this.anchor.setTo(0.5);
        this.scale = new Phaser.Point(3, 3);

        this.frame = 0;

        game.add.existing(this);
    }
}