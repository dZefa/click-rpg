interface GameObjectsImageParams {
  scene: Phaser.Scene;
  x: number;
  y: number;
  key: string;
};

export class Player extends Phaser.GameObjects.Image {
  private walkingSpeed: number = 5;
  private clicks: number = 0;
  private score: number = 0;

  constructor(params: GameObjectsImageParams) {
    super(params.scene, params.x, params.y, params.key);
    
    this.create();

    params.scene.add.existing(this);
  }

  create(): void {
    this.setInteractive();

    this.clickHandler();
  }

  update(): void {
    
  }

  private clickHandler(): void {
    this.on('pointerdown', () => {
      this.incrementScore();
    }, this);
  }

  public getClicks(): number {
    return this.clicks;
  }

  private incrementScore(): void {
    this.clicks += 1;
    console.log(`score: ${this.getClicks()}`);
  }
}
