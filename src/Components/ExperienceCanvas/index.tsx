// @ts-nocheck
/* eslint-disable */
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {createNoise3D} from 'simplex-noise';
import clN from './index.module.scss';



export const ExperienceCanvas = () => {
	const canvasRef = useRef(null);


	useEffect(() => {
		const canvas = canvasRef.current;
		const renderer = new THREE.WebGLRenderer({
			canvas,
			context: canvas.getContext('webgl2'),
			antialias: true,
			alpha: true,
		});
		canvas.wigth = '800px';
		 const simplex = new createNoise3D();
		 console.log(simplex);

		renderer.setPixelRatio(window.devicePixelRatio || 1);

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

		camera.position.z = 5;

		const geometry = new THREE.SphereGeometry(0.8, 128, 128);

		const material = new THREE.MeshPhongMaterial({
			color: 0xe4ecfa,
			shininess: 100,
		});

		const lightTop = new THREE.DirectionalLight(0xffffff, 0.7);
		lightTop.position.set(0, 500, 200);
		lightTop.castShadow = true;
		scene.add(lightTop);

		const lightBottom = new THREE.DirectionalLight(0xffffff, 0.25);
		lightBottom.position.set(0, -500, 400);
		lightBottom.castShadow = true;
		scene.add(lightBottom);

		const ambientLight = new THREE.AmbientLight(0x798296);
		scene.add(ambientLight);

		const sphere = new THREE.Mesh(geometry, material);

		scene.add(sphere);

		const update = () => {
			let time = performance.now() * 0.00001 * 13 * Math.pow(1.3, 3);

			const spikes = 2 * 2;

			for (let i = 0; i < sphere.geometry.vertices.length; i++) {
				const p = sphere.geometry.vertices[i];
				p.normalize().multiplyScalar(1 + 0.3 * simplex(p.x * 0.975, p.y * 0.975, p.z * 0.975 + time));
			}
			// simplex.noise3D(p.x * spikes, p.y * spikes, p.z * spikes + time)
			sphere.geometry.computeVertexNormals();
			sphere.geometry.normalsNeedUpdate = true;
			sphere.geometry.verticesNeedUpdate = true;
		};

		const animate = () => {
			update();
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		};

		requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animate);
		};
	}, [canvasRef]);

	return <canvas ref={canvasRef} />;
};
