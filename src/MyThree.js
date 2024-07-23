import * as THREE from "three";

import { useEffect, useRef } from "react";

function MyThree() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // scene and camera
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // renderer
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(mount.clientWidth, mount.clientHeight);

    // add renderer to mount
    mount.appendChild(renderer.domElement);

    // build cube
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
    });
    var cube = new THREE.Mesh(geometry, material);

    // add cube to scene
    scene.add(cube);

    // edges
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const lines = new THREE.LineSegments(edges, lineMaterial);
    // scene.add(lines);

    // lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.x = 0;
    light.position.y = 0;
    light.position.z = 3;
    scene.add(light);

    // configure camera
    camera.position.z = 5;

    // animate the cube
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      lines.rotation.x += 0.01;
      lines.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);
  return (
    <div
      ref={mountRef}
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
    ></div>
  );
}

export default MyThree;
