/**
 * 游戏场景
 * @author 
 *
 */
class GameScene extends egret.Sprite{
    private timeLabel:TimeLabel;
    private factory:SpriteFactory;
    private timer: egret.Timer;
    private bg: egret.Bitmap;
    private bgSound;
    private sound1;
    private sound2;
    private sound3;
    private sound4;
    private sound5;
	public constructor(timeLabel, factory) {
        super();
        this.timeLabel = timeLabel;
        this.factory = factory;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
//        this.bgSound = new egret.Sound();
//        this.bgSound.addEventListener(egret.Event.COMPLETE, this.onSoundLoaded, this);
        this.sound1 = new egret.Sound();
        this.sound2 = new egret.Sound();
        this.sound3 = new egret.Sound();
        this.sound4 = new egret.Sound();
        this.sound5 = new egret.Sound();
//        this.bgSound.load("resource/assets/bg.mp3");
        this.sound1.load("resource/assets/1.mp3");
        this.sound2.load("resource/assets/2.mp3");
        this.sound3.load("resource/assets/3.mp3");
        this.sound4.load("resource/assets/4.wav");
        this.sound5.load("resource/assets/5.wav");
	}
	/**
	 * 初始化游戏场景
	 */ 
	public init(){
	    //1.加入游戏背景
        this.bg = new egret.Bitmap();
        this.bg.texture = RES.getRes("gameBg");
        this.addChild(this.bg);
        //2.右上角计时器
        this.addChild(this.timeLabel);
        this.timeLabel.x = this.stage.width - this.timeLabel.width;
	}
	
	public onSoundLoaded(){ 
//        var channel:egret.SoundChannel = this.bgSound.play(0,1);
//        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundLoaded, this);
	}
	
	/**
	 * 开始游戏,投入角色
	 */ 
	public start(){
//        this.timeLabel.start();//开始计时
        this.timeLabel.reStart();
        //随机产生role在随机的位置,开始定时
        this.timer = new egret.Timer(500, 0);//500毫秒出现一个
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        //监听点击结果
        this.addEventListener(GameEvent.CTRUE,this.clickTrue,this);
        this.addEventListener(GameEvent.CFLASE,this.clickFalse,this);
        this.timer.start();
	}
	
	public clickTrue(){
        this.timeLabel.score++;   
	}
	
    public clickFalse(){
        this.timeLabel.clickErr();    
    }
	
	public over(){
        this.timer.stop();
	}
	
    private timerFunc(event:egret.TimerEvent){
        this.addChildAt(this.factory.getRole(this), 2);
    }
    
}
