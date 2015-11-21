/**
 *
 * 角色类,
 * @author 
 *
 */
class Role extends egret.Sprite{
    private type; //1.男女 2.男男 3.女女 4.男 5.女
    private pos;  //1.左边 2.右边
    private arms;
    private text_true;
    private text_false;
    private text_common;
    private target;
	public constructor(type, pos, target) {
        super();
        this.type = type;
        this.pos = pos;
        this.target = target;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
	}
	/**
	 * 添加到舞台完成以后,初始化本身
	 */ 
	private init() {
        //1.根据类型加载图片资源
        var bm = new egret.Bitmap();
    	  switch(this.type){
            case 1: 
            bm.texture = RES.getRes("role1");
            break;
            case 2:
            bm.texture = RES.getRes("role2");
            break;
            case 3: 
            bm.texture = RES.getRes("role3");
            break;
            case 4: 
            bm.texture = RES.getRes("role4");
            break;
            case 5: 
            bm.texture = RES.getRes("role5");
            break;
    	  }
    	  //2.设置图片位置
          bm.anchorOffsetX = bm.width / 2;
        switch(this.pos){
            case 1:
                bm.x = this.stage.width / 4;
                break;
            case 2:
                bm.x = this.stage.width / 4 * 3;
                break;
        }
        this.addChild(bm);
    	  
        //加入棍棒图片
        this.arms = new egret.Bitmap();
        this.arms.texture = RES.getRes("arms");
        this.addChild(this.arms);
        this.arms.alpha = 0;
        this.arms.scaleX = 0.5;
        this.arms.scaleY = 0.5;
        this.arms.anchorOffsetX = this.arms.width;
        this.arms.anchorOffsetY = this.arms.height;
        this.arms.x = bm.x + bm.width/4*3;
        this.arms.y = bm.y + bm.height/3;

        //加入点击后的反馈文字
        this.text_common = new egret.Bitmap();
        this.text_common.texture = RES.getRes("text_common");
        this.addChild(this.text_common);
        this.text_common.alpha = 0;
        this.text_common.anchorOffsetX = this.text_common.width / 2;
        this.text_common.anchorOffsetY = this.text_common.height / 2;
        this.text_common.scaleX = 2;
        this.text_common.scaleY = 2;
        this.text_common.x = bm.x + 20;
        this.text_common.y = bm.y - 20;
        
        this.text_true = new egret.Bitmap();
        this.text_true.texture = RES.getRes("text_true");
        this.addChild(this.text_true);
        this.text_true.alpha = 0;
        this.text_true.anchorOffsetX = this.text_true.width/2;
        this.text_true.anchorOffsetY = this.text_true.height/2;
        this.text_true.x = bm.x + 20;
        this.text_true.y = bm.y - 20;
        
        this.text_false = new egret.Bitmap();
        this.text_false.texture = RES.getRes("text_false");
        this.addChild(this.text_false);
        this.text_false.alpha = 0;
        this.text_false.anchorOffsetX = this.text_false.width/2;
        this.text_false.anchorOffsetY = this.text_false.height/2;
        this.text_false.x = bm.x + 20;
        this.text_false.y = bm.y - 20;
            
    	  //3.开始移动自己
        var tw = egret.Tween.get(this);
        tw.to({"y": this.stage.height}, 2500);
        tw.call(this.die, this);
        
        //4.添加点击事件监听, 根据自己的类型,发出事件通知管理者
        this.touchEnabled = true;  
        this.once(egret.TouchEvent.TOUCH_TAP, function (event) {
            //移除自己,发送开始游戏事件
            this.clickRoleAni();
        }, this);
	}
	
	public die(){
        this.parent.removeChild(this);
	}
	
	public clickRoleAni(){
    	//播放音效

        switch(this.type){
            case 1: 
            this.target.sound4.play(0, 1);
            break;
            case 2:
            this.target.sound1.play(0, 1);
            break;
            case 3: 
            this.target.sound1.play(0, 1);
            break;
            case 4: 
            this.target.sound2.play(0, 1);
            break;
            case 5: 
            this.target.sound2.play(0, 1);
            break;
        }
    	this.arms.alpha = 1;
    	var tw = egret.Tween.get(this.arms);
        tw.to({"rotation": -45}, 100);
        tw.to({"alpha": 0}, 1);
        tw.call(this.showRs, this);
	}
	
	public showRs(){
      var tw = null;
    	if(this.type == 1){
            tw = egret.Tween.get(this.text_common);
            var e:GameEvent = new GameEvent(GameEvent.CTRUE);
            this.target.dispatchEvent(e);
    	}else {
        	if(this.type == 4 || this.type == 5){
                tw = egret.Tween.get(this.text_false);
        	}else {
                tw = egret.Tween.get(this.text_true);
        	}
            var e:GameEvent = new GameEvent(GameEvent.CFLASE);
            this.target.dispatchEvent(e);
    	}
        tw.to({"alpha": 1}, 100);
	}
}
