/**
 *
 * @author 
 *
 */
class StartScene extends egret.Sprite {
    private startView;
	public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this);
	}
	
    private createView():void {
        this.startView = new egret.Bitmap();
        this.startView.texture = RES.getRes("startImg");
        this.addChild(this.startView);
        
        var but = new egret.Bitmap();
        but.texture = RES.getRes("startBut");
        this.addChild(but);
        but.x = this.stage.width / 2 - but.width / 2;
        but.y = this.stage.height*5/6;
        
        but.touchEnabled = true;     
        but.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            //移除自己,发送开始游戏事件
            this.parent.removeChild(this);
            var e:GameEvent = new GameEvent(GameEvent.STARTGAME);
            this.dispatchEvent(e);
        }, this);
    }
}
