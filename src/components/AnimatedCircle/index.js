import * as THREE from "three";
import testVertexShader from "./shaders/vertex.glsl";
import testFragmentShader from "./shaders/fragment.glsl";
import Scaffolding from "../../Scaffolding/index.js";

export default class AnimatedCircle extends Scaffolding {
	constructor({ dom, camera, controls, backgroundColor, shaders }) {
		super({ dom, camera, controls: true, backgroundColor });

		this.addObjects();
		this.render();
	}

	addObjects() {
		// Geometry
		this.textureLoader = new THREE.TextureLoader();
		this.geometry = new THREE.PlaneGeometry(
			400,
			400,
			10,
			10
		);

		this.material = new THREE.ShaderMaterial({
			// wireframe: true,
			vertexShader: testVertexShader,
			fragmentShader: testFragmentShader,
			side: THREE.DoubleSide,
			uniforms: {
				uTime: { value: this.elapsedTime },
			},
		});

		// Mesh
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.scene.add(this.mesh);
	}

	updateUniforms() {
		this.material.uniforms.uTime.value = this.elapsedTime;
	}

	render() {
		this.elapsedTime = this.clock.getElapsedTime(); 
		this.updateUniforms()
		if (this.controls) {
			this.controls.update();
		}

		// Render
		this.renderer.render(this.scene, this.camera);

		// Call tick again on the next frame
		window.requestAnimationFrame(this.render.bind(this));
	}
}


// import './style.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'
// import testVertexShader from './shaders/test/vertex.glsl'
// import testFragmentShader from './shaders/test/fragment.glsl'

// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Test mesh
//  */
// // Geometry
// const geometry = new THREE.PlaneGeometry(1, 1, 32, 32)

// // Material
// const material = new THREE.ShaderMaterial({
//     vertexShader: testVertexShader,
//     fragmentShader: testFragmentShader,
//     side: THREE.DoubleSide
// })

// // Mesh
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.set(0.25, - 0.25, 1)
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const tick = () =>
// {
//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()