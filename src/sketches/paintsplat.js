import p5 from 'p5';




function splat(p5) {
  let walker;

  p5.setup = function() {
    console.log("running")

    p5.createCanvas(640,360);
    p5.background(100);
  }

  p5.draw = function() {
     // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
    let xloc = (p5.randomGaussian()*60) + p5.width/2;
    let yloc = (p5.randomGaussian()*60) + p5.height/2;
    p5.colorMode(p5.HSB);

    let hue = (p5.randomGaussian()*20) + 100;
    let sat = (p5.randomGaussian()*40) + 100;
    let bri = (p5.randomGaussian()*10) + 56;
    let size = (p5.randomGaussian()*5) + 26;


    p5.fill(hue, sat, bri);
    p5.noStroke();
    p5.ellipse(xloc, yloc, size, size);   // Draw an ellipse at our "normal" random position

  }

}



export default function dofunc (p5) {


  dofunc.prototype = p5
  splat.prototype = p5
  console.log(splat.prototype)
  return new splat(p5);


}
;
