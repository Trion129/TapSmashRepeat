import * as Assets from '../assets';

class Player extends Phaser.Sprite {
    private id: number;
    private totalHealth: number;

    constructor(id, game: Phaser.Game, x: number, y: number) {
        const spriteSheets = [
            Assets.Spritesheets.SpritesheetsWood646410,
            Assets.Spritesheets.SpritesheetsStone646410,
            Assets.Spritesheets.SpritesheetsObsidian646410
        ];

        super(game, x, y, spriteSheets[id].getName());

        this.inputEnabled = true;
        this.totalHealth = [30, 70, 130][id];
        this.health = this.totalHealth;

        this.events.onInputDown.add(this.tapped);
        this.frame = 0;
    }

    tapped(): void {
        this.damage(1);

        this.frame = Math.ceil( (1.0 - (this.health / this.totalHealth)) * 10.0);
    }
}

export default class GameState extends Phaser.State {
    private id: number;
    private playerSprite: Phaser.Button;
    private opponentSprite: Phaser.Button;
    private player: Player;
    private opponent: Player;

    init(id: number) {
        this.id = id;

        this.player = new Player(this.id, this.game, this.game.world.centerX, this.game.world.centerY);
        // this.opponent = new Player(this.id, this.game, this.game.world.centerX, this.game.world.centerY);
    }

    create() {
        this.game.stage.backgroundColor = '#F5F5F5';
    }
}