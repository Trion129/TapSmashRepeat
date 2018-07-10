import * as Assets from '../assets';

export default class Title extends Phaser.State {
    private googleFontText: Phaser.Text = null;
    private localFontText: Phaser.Text = null;
    private bitmapFontText: Phaser.BitmapText = null;

    public create(): void {
        this.localFontText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Get ready for smashing!', {
            font: '30px ' + Assets.CustomWebFonts.Fonts2DumbWebfont.getFamily(),
            fill: '#FFF',
        });
        this.localFontText.anchor.setTo(0.5);

        this.game.camera.flash(0x000000, 1000);
    }
}
