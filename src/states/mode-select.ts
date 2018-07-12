import * as Assets from '../assets';

export default class ModeSelect extends Phaser.State {
    private selectModeTitle: Phaser.Text = null;
    private playGameText: Phaser.Text = null;
    private playButtonSprite: Phaser.Button = null;

    public create(): void {
        this.game.stage.backgroundColor = '#F5F5F5';

        this.selectModeTitle = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 200, 'Select mode', {
            fontSize: 50,
            font: Assets.GoogleWebFonts.Righteous,
        });
        this.selectModeTitle.anchor.setTo(0.5);

        // Wood Button
        ['Wood', 'Stone', 'Obsidian'].forEach((value, index) => {
            const position = -200 + (index + 1) * 110 + this.game.world.centerY;
            this.playButtonSprite = this.game.add.button(
                this.game.world.centerX,
                position,
                Assets.Images.ImagesButton.getName(),
                () => { this.onStartButton(index); }, this
            );
            this.playButtonSprite.anchor.setTo(0.5);
            this.playButtonSprite.scale = new Phaser.Point(2, 1);
            this.playGameText = this.game.add.text(this.game.world.centerX, position, value, {
                fontSize: 20,
                font: Assets.GoogleWebFonts.Roboto,
                fill: '#fff',
            });
            this.playGameText.anchor.setTo(0.5);
        });
    }

    onStartButton(id: number): void {
        this.game.state.start('finding-opponent', true, false, id);
    }
}
