/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
    export class ImagesBackgroundTemplate {
        static getName(): string { return 'background_template'; }

        static getPNG(): string { return require('assets/images/background_template.png'); }
    }
    export class ImagesButton {
        static getName(): string { return 'button'; }

        static getPNG(): string { return require('assets/images/button.png'); }
    }
}

export namespace Spritesheets {
    export class SpritesheetsObsidian646410 {
        static getName(): string { return 'obsidian.[64,64,10,0,0]'; }

        static getPNG(): string { return require('assets/spritesheets/obsidian.[64,64,10,0,0].png'); }
        static getFrameWidth(): number { return 64; }
        static getFrameHeight(): number { return 64; }
        static getFrameMax(): number { return 10; }
        static getMargin(): number { return 0; }
        static getSpacing(): number { return 0; }
    }
    export class SpritesheetsStone646410 {
        static getName(): string { return 'stone.[64,64,10,0,0]'; }

        static getPNG(): string { return require('assets/spritesheets/stone.[64,64,10,0,0].png'); }
        static getFrameWidth(): number { return 64; }
        static getFrameHeight(): number { return 64; }
        static getFrameMax(): number { return 10; }
        static getMargin(): number { return 0; }
        static getSpacing(): number { return 0; }
    }
    export class SpritesheetsWood646410 {
        static getName(): string { return 'wood.[64,64,10,0,0]'; }

        static getPNG(): string { return require('assets/spritesheets/wood.[64,64,10,0,0].png'); }
        static getFrameWidth(): number { return 64; }
        static getFrameHeight(): number { return 64; }
        static getFrameMax(): number { return 10; }
        static getMargin(): number { return 0; }
        static getSpacing(): number { return 0; }
    }
}

export namespace Atlases {
    export class AtlasesPreloadSpritesArray {
        static getName(): string { return 'preload_sprites_array'; }

        static getJSONArray(): string { return require('assets/atlases/preload_sprites_array.json'); }

        static getPNG(): string { return require('assets/atlases/preload_sprites_array.png'); }
    }
    export namespace AtlasesPreloadSpritesArray {
        export enum Frames {
            PreloadBar = 'preload_bar.png',
            PreloadFrame = 'preload_frame.png',
        }
    }
    export class AtlasesPreloadSpritesHash {
        static getName(): string { return 'preload_sprites_hash'; }

        static getJSONHash(): string { return require('assets/atlases/preload_sprites_hash.json'); }

        static getPNG(): string { return require('assets/atlases/preload_sprites_hash.png'); }
    }
    export namespace AtlasesPreloadSpritesHash {
        export enum Frames {
            PreloadBar = 'preload_bar.png',
            PreloadFrame = 'preload_frame.png',
        }
    }
    export class AtlasesPreloadSpritesXml {
        static getName(): string { return 'preload_sprites_xml'; }

        static getPNG(): string { return require('assets/atlases/preload_sprites_xml.png'); }

        static getXML(): string { return require('assets/atlases/preload_sprites_xml.xml'); }
    }
    export namespace AtlasesPreloadSpritesXml {
        export enum Frames {
            PreloadBar = 'preload_bar.png',
            PreloadFrame = 'preload_frame.png',
        }
    }
}

export namespace Audio {
    export class AudioHit1 {
        static getName(): string { return 'hit-01'; }

        static getWAV(): string { return require('assets/audio/hit-01.wav'); }
    }
    export class AudioLose {
        static getName(): string { return 'lose'; }

        static getWAV(): string { return require('assets/audio/lose.wav'); }
    }
    export class AudioWin {
        static getName(): string { return 'win'; }

        static getWAV(): string { return require('assets/audio/win.wav'); }
    }
}

export namespace Audiosprites {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace GoogleWebFonts {
    export const Righteous: string = 'Righteous';
    export const Roboto: string = 'Roboto';
}

export namespace CustomWebFonts {
    export class Fonts2DumbWebfont {
        static getName(): string { return '2Dumb-webfont'; }

        static getFamily(): string { return '2dumbregular'; }

        static getCSS(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.css'); }
        static getEOT(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.eot'); }
        static getSVG(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.svg'); }
        static getTTF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.ttf'); }
        static getWOFF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.woff'); }
    }
}

export namespace BitmapFonts {
    export class FontsFontFnt {
        static getName(): string { return 'font_fnt'; }

        static getFNT(): string { return require('assets/fonts/font_fnt.fnt'); }
        static getPNG(): string { return require('assets/fonts/font_fnt.png'); }
    }
    export class FontsFontXml {
        static getName(): string { return 'font_xml'; }

        static getPNG(): string { return require('assets/fonts/font_xml.png'); }
        static getXML(): string { return require('assets/fonts/font_xml.xml'); }
    }
}

export namespace JSON {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace XML {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Text {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Scripts {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
export namespace Shaders {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
export namespace Misc {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
