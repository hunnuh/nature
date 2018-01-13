import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import paintsplat from '../../sketches/paintsplat'
import cubeRotator from '../../sketches/cubeRotator'
import walker from '../../sketches/walker'
import random from '../../sketches/random'

import noisewalker from '../../sketches/noisewalker'

const sketches = [
	{cubeRotator: cubeRotator},
	{noisewalker: noisewalker},
	{paintsplat: paintsplat},
	{random: random},
	{walker: walker},
]

export default class SketchPicker extends Component {

	render() {
		const buttons = sketches.map(e => <div className="w4 pa3 white bg-blue br3 dib ma2" onClick={f => this.props.handleClick(e[Object.keys(e)[0]])} >{Object.keys(e)[0]}</div>)
			return (
			<div>
				{buttons}
			</div>
		);
	}
}
