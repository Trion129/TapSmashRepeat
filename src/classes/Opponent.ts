import * as Assets from '../assets';
import * as socketIo from 'socket.io-client';

const URL = 'http://localhost:8080/';

export default class Opponent extends Phaser.Sprite {
    private io: SocketIOClient.Socket;
    private playerId: string;
    private opponentId: string;
    private roomId: string;

    constructor(id, game: Phaser.Game, x: number, y: number) {
        const spriteSheets = [
            Assets.Spritesheets.SpritesheetsWood646410,
            Assets.Spritesheets.SpritesheetsStone646410,
            Assets.Spritesheets.SpritesheetsObsidian646410
        ];

        super(game, x, y, spriteSheets[id].getName());

        this.anchor.setTo(0.5);
        this.scale = new Phaser.Point(2, 2);

        this.frame = 0;
        this.io = socketIo(URL);
    }

    findOpponent(callback: Function) {
        this.io.emit('findOpponent');
        this.io.on('foundOpponent', (opponentData) => {
            this.setupWithSocket(opponentData);
            callback();
        });
    }

    sendPlayerFrame(frame: number) {
        this.io.emit('nextFrame', {
            frame,
        });
    }

    display() {
        this.game.add.existing(this);
    }

    listenOpponentFrame() {
        this.io.on('nextFrame', (data) => {
            this.frame = data.frame;
        });
    }

    sendPlayerFinished() {
        this.io.emit('finished', {
            id: this.playerId,
        });
    }

    listenOpponentFinished(callback: Function) {
        this.io.on('lost', _ => {
            callback();
            this.kill();
        });
    }

    listenPlayerWon(callback: Function) {
        this.io.on('won', _ => {
            callback();
        });
    }

    setupWithSocket(opponentData): void {
        console.log(opponentData);
        this.playerId = opponentData.yourId;
        this.roomId = opponentData.roomId;
        this.opponentId = opponentData.opponentId;
    }
}