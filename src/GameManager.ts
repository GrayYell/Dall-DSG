/**
 *
 * 用于控制游戏流程,统计分数
 * @author 
 *
 */
class GameManager extends egret.DisplayObjectContainer{
	private timeLabel:TimeLabel; //游戏时间
    private gameScene:GameScene; //游戏场景
    private factory;      //角色工厂
    private mystage;  //父类,舞台类
   
    public constructor(stage) { 
        super();
        this.mystage = stage;
    	//1.需要管理时间
    	//2.加入事件监听器  接受role对象发送的事件等
      //3.事件有两种: 1.role被点击的结果(更改时间) 2.role移除屏幕,删除指定role
      //4.游戏周期控制,开启倒计时,倒计时结束后,显示结果
        
        //1.创建时间面板
        this.timeLabel = new TimeLabel();
        this.factory = new SpriteFactory();
        this.gameScene = new GameScene(this.timeLabel, this.factory);
        this.mystage.addChild(this.gameScene);
        
        this.timeLabel.addEventListener(GameEvent.GAMWOVER, this.overGame, this);
	}
	
	//游戏结束
	public overGame(){
    	
    	//出现游戏结果
        var score = this.timeLabel.score;
        	if(score <= 10){
                this.mystage.addChild(new Reslut(1, this));
        	}else if(score <= 15){
                this.mystage.addChild(new Reslut(2, this));
        	}else if(score <= 20){
                this.mystage.addChild(new Reslut(3, this));
        	}else {
                this.mystage.addChild(new Reslut(4, this));
        	}
        this.gameScene.over();
	}
	//游戏开始
	public startGame(evt:GameEvent):void{
        this.gameScene.start();
	}
	//重新开始
	public againGame(evt:GameEvent):void{
        this.gameScene.start();
	}
}
