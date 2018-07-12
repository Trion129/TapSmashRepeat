import * as Assets from '../assets';
import Player from '../classes/Player';
import Opponent from '../classes/Opponent';

export default class GameState extends Phaser.State {
    private id: number;
    private player: Player;
    private opponent: Opponent;

    init(id: number, opponent: Opponent) {
        this.id = id;

        this.player = new Player(this.id,
            this.game, this.game.world.centerX, this.game.world.centerY + 200,
            this.playerFrameChanged.bind(this), this.playerBroke.bind(this));

        this.opponent = opponent;
        opponent.display();
        opponent.listenOpponentFinished(this.opponentBroke.bind(this));
        opponent.listenOpponentFrame();
    }

    playerFrameChanged(frame: number) {
        this.opponent.sendPlayerFrame(frame);
    }

    playerBroke() {
        this.opponent.sendPlayerFinished();
        console.log('Player broke');
    }

    opponentBroke() {
        console.log('Opponent broke');
    }

    create() {
        this.game.stage.backgroundColor = '#F5F5F5';
    }
}