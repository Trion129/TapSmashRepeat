import * as Assets from '../assets';

export default class MainMenu extends Phaser.State {
    private mainMenuTitle: Phaser.Text = null;
    private playGameText: Phaser.Text = null;
    private playButtonSprite: Phaser.Button = null;

    public create(): void {
        this.game.stage.backgroundColor = '#F5F5F5';

        this.mainMenuTitle = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, 'Stone Smasher', {
            fontSize: 50,
            font: Assets.GoogleWebFonts.Righteous,
        });
        this.mainMenuTitle.anchor.setTo(0.5);

        this.playButtonSprite = this.game.add.button(
            this.game.world.centerX,
            this.game.world.centerY,
            Assets.Images.ImagesButton.getName(),
            this.onStartButton, this
        );
        this.playButtonSprite.anchor.setTo(0.5);
        this.playButtonSprite.scale = new Phaser.Point(2, 1);

        this.playGameText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Play Game', {
            fontSize: 25,
            font: Assets.GoogleWebFonts.Roboto,
            fill: '#fff',
        });
        this.playGameText.anchor.setTo(0.5);
    }

    onStartButton(): void {
        this.game.state.start('Select Mode');
    }
}
