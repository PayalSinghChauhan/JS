function main(){
    this.boxarr = new Array();
    var bx = [];
    var xv = [];
    this.width = 600;
    this.height = 600;
    this.border = "1px solid black";
    this.backbox = null;
    this.positions = [1,552];
    

    var that = this;
    var back = document.createElement('div');

    // drawing outer box
    this.drawOuterBox = function (){
        back.style.width = this.width + 'px';
        back.style.height = this.height + 'px';
        back.style.border = this.border;
        back.style.position ="relative";
        // back.style.background = "red";
        this.backbox = back;
        document.body.appendChild(back);
    }

    this.initBox = function(){
        this.drawOuterBox();
        for(var i=0; i<2; i++){
            this.xpos = this.positions[i];
            var container = new Box(50,50,that.xpos,250,"img/box.png");
            this.boxarr.push(container);
            // console.log(that.xpos);
            
        }
        // console.log(this.boxarr)
    }
    this.drawBox = function(){
        for(var i=1; i<=this.boxarr.length; i++)
        this.boxarr[i-1].draw();
    }

    this.gameloop =setInterval(function(){
        for(var i=0; i< that.boxarr.length; i++)
        {
            that.boxarr[i].move();
            for(var j =i+1; j<that.boxarr.length; j++){
                if (that.boxarr[i].x < that.boxarr[j].x + that.boxarr[j].width &&
                    that.boxarr[i].x + that.boxarr[i].width > that.boxarr[j].x &&
                    that.boxarr[i].y < that.boxarr[j].y + that.boxarr[j].height &&
                    that.boxarr[i].y + that.boxarr[i].height > that.boxarr[j].y) {
                    // collision detected!
                    console.log("collsion");
                    that.boxarr[i].direction = -that.boxarr[i].direction;
                    that.boxarr[j].direction = -that.boxarr[j].direction;
                }
            }
        }
        
    },1000/60);
}
var obj = new main();
obj.initBox();
obj.drawBox();