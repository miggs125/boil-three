import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Scaffolding {
	constructor({
		dom,
		camera = { position: { x: 0, y: 0, z: 1 }, near: 0.01, far: 100 },
		controls = false,
		backgroundColor = 0x000000,
	}) {
		this.dom = dom;
		this.elapsedTime = 0;
		this.clock = new THREE.Clock();
		this.elapsedTime = 0;
		this.sizes = {
			width: this.dom.offsetWidth,
			height: this.dom.offsetHeight,
		};
		const fov =
			Math.atan((this.sizes.height * 0.5) / camera.position.z) *
			(180 / Math.PI) *
			2;
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(
			fov,
			this.sizes.width / this.sizes.height,
			camera.near,
			camera.far
		);
		this.camera.position.z = camera.position.z;

		
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		

		if (controls) {
			this.controls = new OrbitControls(
				this.camera,
				this.renderer.domElement
			);
		}

		// add canvas to dom
		this.dom.appendChild(this.renderer.domElement);

		this.renderer.setClearColor(backgroundColor);
		this.setupResize();
		this.resize();
	}

	setupResize() {
		window.addEventListener("resize", this.resize.bind(this));
	}

	resize() {
		this.sizes.width = this.dom.offsetWidth;
		this.sizes.height = this.dom.offsetHeight;
		this.renderer.setPixelRatio(window.devicePixelRatio);

		this.renderer.setSize(this.sizes.width, this.sizes.height);
		this.camera.aspect = this.sizes.width / this.sizes.height;
		this.camera.updateProjectionMatrix();
	}
}
