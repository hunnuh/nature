export default function randomviz (p5) {
  let randomCounts = [];
  let total = 20;

  p5.setup = function() {
    p5.createCanvas(640,360);
    for (let i = 0; i < total; i++) {
      randomCounts[i] = 0;
    }
  }

  p5.draw = function() {
    p5.background(127);
    let index = p5.floor(p5.random(total));
    randomCounts[index]++;

    // Draw a rectangle to graph results
    p5.stroke(0);
    p5.strokeWeight(2);
    p5.fill(255);

    let w = p5.width/randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
      p5.rect(x*w,p5.height-randomCounts[x],w-1,randomCounts[x]);
    }
  }
};
