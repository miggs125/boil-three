import "./style.scss";
import HelloWorld from "./components/HelloWorld";

window.onload = () => {

	const container = document.querySelector('#blob')
	new HelloWorld({
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
