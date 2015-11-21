//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite {
    private logo;
    public constructor() {
        super();
//        this.createView();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
    }

    private textField:egret.TextField;

    private createView():void {
        var stageW: number = this.stage.stageWidth;
        var stageH: number = this.stage.stageHeight;
        var topMask: egret.Shape = new egret.Shape();
        topMask.graphics.beginFill(0xFFFFFF,1);
        topMask.graphics.drawRect(0,0,stageW,stageH);
        topMask.graphics.endFill();
        topMask.width = stageW;
        topMask.height = stageH;
        this.addChild(topMask);
        
        RES.getResByUrl("resource/assets/logo.png",function(texture) { 
            this.logo = new egret.Bitmap(texture);
            this.logo.anchorOffsetX = this.logo.width / 2;
            this.logo.anchorOffsetY = this.logo.height / 2;
            this.logo.x = stageW/2 - 80;
            this.logo.y = stageH/2;
            this.logo.scaleX = 1.5;
            this.logo.scaleY = 1.5;
            egret.log("asdf");
            this.addChildAt(this.logo, 2);
        },this, RES.ResourceItem.TYPE_IMAGE);
        
        var text = new egret.TextField();
        this.addChild(text);
        text.textColor = 0x000000;
        text.textAlign = "left";
        text.fontFamily = "KaiTi";
        text.text = "精彩正在进来...";
        text.x = stageW / 2 + 80;
        text.y = stageH / 2;
        text.anchorOffsetX = text.width / 2;
        text.anchorOffsetY = text.height / 2;
        
    }
    
    public addLogo(){
        
    }
    

    public setProgress(current, total):void {
//        this.textField.text = "Loading..." + current + "/" + total;
    }
}
