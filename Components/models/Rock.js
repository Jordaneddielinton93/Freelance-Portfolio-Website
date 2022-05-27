import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Rock = ({}) => {
  const ref = useRef();
  // console.log(ref.current.rotation.x)

  let gltf = useGLTF("/StatueBacchus/scene.gltf", true);

  let [rotate, setRotate] = useState(true);
  useFrame((state, delta) => {
    // console.log(ref.current.rotation.x)

    ref.current.rotation.x = 3.1;
    ref.current.rotation.z = 3.1;
    // ref.current.rotation.y = 300;
    if (rotate) {
      // ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.004;
      // ref.current.rotation.x > 4 && setRotate(false);
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, 1]} scale={0.1}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Rock;
