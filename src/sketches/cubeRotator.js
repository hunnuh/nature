export default function sample (p) {
  let rotation = 0;
  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.reDrawWithProps = function (props) {
    console.log(props.rotate)
    if (props.rotate){
      rotation = props.rotate;
    }
  };

  p.draw = function () {
    p.background(100);
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.pop();
  };
};
