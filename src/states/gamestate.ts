import * as Assets from '../assets';
import Player from '../utils/Player';
import Opponent from '../utils/Opponent';

export default class GameState extends Phaser.State {
    private id: number;
    private playerSprite: Phaser.Button;
    private opponentSprite: Phaser.Button;
    private player: Player;
    private opponent: Opponent;

    init(id: number, opponent: Opponent) {
        this.id = id;

        this.player = new Player(this.id, this.game, this.game.world.centerX, 2 / 3 * this.game.world.height, this.playerBroke);
        this.opponent = opponent;
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