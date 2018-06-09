export class MainMenuScene extends Phaser.Scene {
  private welcomeText: Phaser.GameObjects.Text;
  constructor() {
    super({
      key: 'MainMenuScene',
    });
  }
  
  create(): void {
    this.welcomeText = this.add.text(16, 16, 'Test!', { fontSize: '32px', fill: '#000' });
  }
}