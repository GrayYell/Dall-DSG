/**
 *
 * @author 
 *
 */
class Reslut extends egret.Sprite{
    private type;
    private target;
	public constructor(type, target) {
        super();
        this.target = target;
        this.type = type;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
	}
	
	public init(){
        var stageW:number = this.stage.stageWidth;
        var stageH:number = this.stage.stageHeight;
        var topMask:egret.Shape = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, stageH);
        topMask.graphics.endFill();
        topMask.width = stageW;
        topMask.height = stageH;
        this.addChild(topMask);
    	
	    //根据类型加载图片
        var bm = new egret.Bitmap();
        switch(this.type){
            case 1:
            bm.texture = RES.getRes("win1");
                break;
            case 2:
            bm.texture = RES.getRes("win2");
                break;
            case 3:
            bm.texture = RES.getRes("win3");
                break;
            case 4:
            bm.texture = RES.getRes("win4");
                break;
        }
        this.addChild(bm);
        bm.anchorOffsetX = bm.width / 2;
        bm.anchorOffsetY = bm.height / 2;
        bm.x = stageW / 2;
        bm.y = stageH / 2 - 100;
        
        var socreBm = new egret.TextField();
        socreBm.textColor = 0xffffff;
        socreBm.textAlign = "left";
        socreBm.fontFamily = "KaiTi";
        socreBm.text = "打中："+this.target.timeLabel.score + "对";
        socreBm.x = bm.x + 70;
        socreBm.y = bm.y - 70;
        this.addChild(socreBm);
        
        var shareBut = new egret.Bitmap();
        shareBut.texture = RES.getRes("shareBut");
        this.addChild(shareBut);
        shareBut.anchorOffsetX = shareBut.width / 2;
        shareBut.anchorOffsetY = shareBut.height / 2;
        shareBut.x = this.stage.width/4;
        shareBut.y = bm.y +170;
        
        var againBut = new egret.Bitmap();
        againBut.texture = RES.getRes("againBut");
        this.addChild(againBut);
        againBut.anchorOffsetX = againBut.width / 2;
        againBut.anchorOffsetY = againBut.height / 2;
        againBut.x = this.stage.width/4*3 - 100;
        againBut.y = bm.y + 170;
        
        againBut.touchEnabled = true;     
        againBut.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
                //重新开始游戏
            this.target.againGame();
            this.target.timeLabel.score = 0;//清空积分
            this.parent.removeChild(this);
        }, this);
        
        
        
        shareBut.touchEnabled = true;     
        shareBut.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
                var shareBox = new egret.Bitmap();
                shareBox.texture = RES.getRes("shareBox");
                this.addChild(shareBox);
                shareBox.anchorOffsetX = bm.width / 2;
                shareBox.anchorOffsetY = bm.height / 2;
                shareBox.x = stageW / 2 + 200;
                shareBox.y = stageH / 2 - 200;
//            console.log("进行分享");
        }, this);
        
	}
}
