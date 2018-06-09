import 'phaser';

import { BootScene } from './scenes/bootScene';

const config: GameConfig = {
  title: "Click RPG",
  url: "https://github.com/dzefa/click-rpg",
  version: "0.1",
  width: 600,
  height: 800,
  zoom: 1,
  type: Phaser.AUTO,
  parent: "game",
  scene: [BootScene],
  input: {
    keyboard: true,
    mouse: true,
    touch: true,
    gamepad: false,
  },
  physics: {
    default: "arcade",
    gravity: {
      y: 0,
    },
    debug: false,
  },
  backgroundColor: "#FFFFFF",
  "render.pixelArt": true,
  "render.antialias": false,
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}
