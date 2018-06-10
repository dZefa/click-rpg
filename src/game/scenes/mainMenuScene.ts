import { Player } from '../objects/player';

export class MainMenuScene extends Phaser.Scene {
  private welcomeText: Phaser.GameObjects.Text;
  private player: Player;

  constructor() {
    super({
      key: 'MainMenuScene',
    });
  }

  preload(): void {
    this.load.image('player', './assets/image001.png');
  }
  
  create(): void {
    this.welcomeText = this.add.text(16, 16, 'Test!', { fontSize: '32px', fill: '#000' });
    this.player = new Player({ scene: this, x: 150, y: 300, key: 'player' });
  }

  update(): void {
    this.player.update();
  }
}