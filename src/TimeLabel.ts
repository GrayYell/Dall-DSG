/**
 *
 * @author 
 *
 */
class TimeLabel extends egret.Sprite{
    private timer: egret.Timer;
    private text: egret.TextField;
    public score;
    private bg;
	public constructor() {
        super();
        this.score = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
        //创建一个计时器对象
        this.timer = new egret.Timer(1000,30);
        //注册事件侦听器
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);  
	}
	//初始化
	public init(){
        this.bg = new egret.Bitmap();
        this.bg.texture = RES.getRes("timeBg");
        this.addChild(this.bg);
        //TODO 加入时间显示
        this.text = new egret.TextField();
        this.text.text = "60";
        this.text.x = this.bg.width/3;
        this.text.y = this.bg.height/2 - 10;
        this.addChild(this.text);
	}
	/**
	 * 开始倒计时
	 */ 
	public start(){
        this.timer.start();
	}
	/**
	 * 重新计时
	 */ 
	public reStart(){
        this.timer.repeatCount = 60;
        this.timer.reset();
        this.timer.start();
	}
	
    private timerFunc(event:egret.TimerEvent)
    {
        if(this.timer.repeatCount <= 0){
            this.text.text = 0+'';
            var e:GameEvent = new GameEvent(GameEvent.GAMWOVER);
            this.dispatchEvent(e);
            this.timer.stop();
        }
        //设置显示
        this.text.text = (this.timer.repeatCount - (<egret.Timer>event.target).currentCount)+"";        
    }
    private timerComFunc(event:egret.TimerEvent)
    {
        this.text.text = 0+'';
        //时间接受发送事件GAMWOVER
        var e:GameEvent = new GameEvent(GameEvent.GAMWOVER);
        this.dispatchEvent(e);
    }
    /**
     * 减少时间5秒
     */ 
    public clickErr(){
        this.timer.repeatCount -= 5;
    }
	
}
