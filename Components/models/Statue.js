import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Statue = ({}) => {
  const ref = useRef();
  // console.log(ref.current.rotation.x)

  let gltf = useGLTF("/Minoture/scene.gltf", true);

  let [rotate, setRotate] = useState(true);
  useFrame((state, delta) => {
    // console.log(ref.current.rotation.x)

    ref.current.rotation.z = 0;
    // ref.current.rotation.y = 300;
    if (rotate) {
      ref.current.rotation.y += 0.005;
      ref.current.rotation.y > 1.5 && setRotate(false);
    } else {
      ref.current.rotation.y -= 0.005;
      ref.current.rotation.y < -1 && setRotate(true);
    }
  });
  return (
    <mesh ref={ref} position={[0, -1, 2.2]} scale={11}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Statue;
