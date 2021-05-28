import "./style.scss";
import Button from "./components/AnimatedCircle";

window.onload = () => {

	const container = document.querySelector('#blob')
	new Button({
		dom: container,
		camera: {
			position: {
				x: 0,
				y: 0,
				z: 600,
			},

		},
	});
};
