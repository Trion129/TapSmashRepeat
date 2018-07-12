import * as Assets from '../assets';

class Player extends Phaser.Sprite {
    private id: number;
    private totalHealth: number;

    constructor(id, game: Phaser.Game, x: number, y: number, finished: Function) {
        const spriteSheets = [
            Assets.Spritesheets.SpritesheetsWood646410,
            Assets.Spritesheets.SpritesheetsStone646410,
            Assets.Spritesheets.SpritesheetsObsidian646410
        ];

        super(game, x, y, spriteSheets[id].getName());

        this.anchor.setTo(0.5);
        this.inputEnabled = true;

        this.totalHealth = [30, 70, 130][id];
        this.health = this.totalHealth;

        this.events.onInputDown.add(this.tapped, this);
        this.events.onKilled.add(finished, this);
        this.frame = 0;

        game.add.existing(this);
    }

    tapped(): void {
        this.damage(1);
        if (this.health !== 0) {
            this.frame = Math.floor( (1.0 - (this.health / this.totalHealth)) * 10.0);
        }
    }
}

class Opponent extends Phaser.Sprite {
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

        this.frame = 0;

        game.add.existing(this);
    }
}

export default class GameState extends Phaser.State {
    private id: number;
    private playerSprite: Phaser.Button;
    private opponentSprite: Phaser.Button;
    private player: Player;
    private opponent: Opponent;

    init(id: number) {
        this.id = id;

        this.player = new Player(this.id, this.game, this.game.world.centerX, this.game.world.centerY - 200, this.playerBroke);
        this.opponent = new Opponent(this.id, this.game, this.game.world.centerX, this.game.world.centerY + 200);
    }

    playerBroke() {
        console.log('Player broke');
    }

    opponentBroke() {
        console.log('Opponent broke');
    }

    create() {
        this.game.stage.backgroundColor = '#F5F5F5';
    }
}