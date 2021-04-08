// Rocket (player) prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to scene
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = game.config.width/320;
    }

    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyLeft.isDown && this.x >= borderUISize +this.width) {
                this.x -= this.moveSpeed;
            } else if(keyRight.isDown&& this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }
    }
}