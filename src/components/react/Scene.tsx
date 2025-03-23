import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { useEffect } from "react";
import * as THREE from "three";

const Modelo = () => {

    const gltf = useLoader(
        GLTFLoader,
        "/gltf/scene/scene.gltf",
        (loader) => {
            loader.setMeshoptDecoder(MeshoptDecoder)
        }
    );

    useEffect(() => {
        gltf.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.geometry.computeVertexNormals();
                child.material.roughness = 0.8;
            }
        });
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center);
    }, [gltf]);

    return <primitive
      object={gltf.scene}
      scale={1}
      position={[0, 0, 0]}
    />;
}

export const Scene = () =>  {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible'
      }}
      camera={{
        position: [5, 2, 5],
        fov: 35
      }}
      shadows
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Modelo />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={-2}
        minPolarAngle={Math.PI/4}
        maxPolarAngle={Math.PI/2}
        target={[0, 0.5, 0]}
      />
      {/* <Preload all /> Precarga assets */}
    </Canvas>
  );
}
