import * as Assets from '../assets';

import Opponent from '../utils/Opponent';

export default class MainMenu extends Phaser.State {
    private id: number;
    private playGameText: Phaser.Text = null;
    private playButtonSprite: Phaser.Sprite = null;
    public opponent: Opponent = null;

    init(id: number): void {
        this.id = id;
    }

    public create(): void {
        this.game.stage.backgroundColor = '#F5F5F5';

        this.playButtonSprite = this.game.add.sprite(
            this.game.world.centerX,
            this.game.world.centerY,
            Assets.Images.ImagesButton.getName()
        );
        this.playButtonSprite.anchor.setTo(0.5);
        this.playButtonSprite.scale = new Phaser.Point(2, 1);

        this.playGameText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Finding Opponent...', {
            fontSize: 25,
            font: Assets.GoogleWebFonts.Roboto,
            fill: '#fff',
        });
        this.playGameText.anchor.setTo(0.5);

        this.opponent = new Opponent(this.id, this.game, this.game.world.centerX, this.game.world.centerY - 200);
    }

    onFound(): void {
        this.playGameText.text = 'Found! Starting...';

        this.game.state.start('mode-select', true, false, this.id);
    }
}