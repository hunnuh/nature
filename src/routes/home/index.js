import { h, Component } from 'preact';
import style from './style';
import P5Wrapper from '../../components/p5wrapper';
import SketchPicker from '../../components/sketchPicker';
import cubeRotator from '../../sketches/cubeRotator'
import walker from '../../sketches/walker'
import random from '../../sketches/random'
import paintsplat from '../../sketches/paintsplat'
import noisewalker from '../../sketches/noisewalker'

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.changeSketch = this.changeSketch.bind(this);
		this.rotate = this.rotate.bind(this);
		this.state = {
			rotation: 0,
			sketch: walker,
		};
	}

	changeSketch(sketch){
		console.log(sketch)
		this.setState({
			sketch: sketch
		})
	}

	rotate(dir){
		let turn = 0;

		if (dir === "right"){
			turn = 10
		}
		else{
			turn = -10
		}
		this.setState({
			rotation: this.state.rotation + turn
		});
	}

	render() {
		let {sketch, rotation} = this.state;

		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component. NOTT.</p>
				<P5Wrapper sketch={sketch} rotate={rotation}/>
				<button onClick={e => this.rotate("left")} >Lsdfasdfasdft</button>
				<button onClick={e => this.rotate("right")} >Right</button>
				<SketchPicker
					handleClick={e => this.changeSketch(e)}
				></SketchPicker>
			</div>
		);
	}
}
