export default function walker (p5) {
  let walker;

  p5.setup = function() {
    console.log("running")
    p5.createCanvas(640,360);
    p5.walker = new Walker();
    p5.background(255);
  }

  p5.draw = function() {
    p5.walker.step();
    p5.walker.render();
  }

  class Walker {
    constructor(){
      this.x = p5.width/2;
      this.y = p5.height/2;
    }

    render() {
      p5.stroke(0);
      p5.point(this.x,this.y);
    }

    step() {
      let stepx;
      let stepy
      if (p5.mouseX > this.x){
        stepx = p5.random(-1, 2);
      
      }
      else if (p5.mouseX < this.x){
        stepx = p5.random(-2, 1);

      }
      else{
        stepx = p5.random(-1, 1);

      }
      if (p5.mouseY > this.y){
        stepy = p5.random(-1, 2);
      }
      else if (p5.mouseY < this.y){
        stepy = p5.random(-2, 1);
      }
      else{
        stepy = p5.random(-1, 1);
      }
      this.x += stepx;
      this.y += stepy;
      this.x = p5.constrain(this.x,0,p5.width-1);
      this.y = p5.constrain(this.y,0,p5.height-1);
    }
  }
}

;
