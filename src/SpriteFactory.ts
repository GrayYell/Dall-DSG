/**
 * 
 *生产游戏精灵的工厂类
 * @author 
 *
 */
class SpriteFactory {
	public constructor() {
	}
	/**
	 * 获取角色get
	 */ 
	public getRole(target){
        var pos = this.getRandomPos(); //随机产生
        var type = this.getRandomType(); //随机产生
    	var role = new Role(type, pos, target);
    	return role;    
	}
	
	private getRandomPos(){
        var type = Math.random();
        return Math.round(type)+1;
	}
	
	private getRandomType(){
        var type = Math.random()*5+1;
        return Math.floor(type);
	}
	
}
