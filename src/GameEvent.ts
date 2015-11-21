/**
 *
 * @author 
 *
 */
class GameEvent extends egret.Event{
    
    public static STARTGAME = '开始游戏';
    public static GAMWOVER = '游戏结束';
    public static CTRUE = '点击正确';
    public static CFLASE = '点击错误';
    
    public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false)
    {
        super(type,bubbles,cancelable);
    }
}

