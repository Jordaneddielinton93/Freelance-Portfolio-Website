import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Rock from "../models/Rock";

const CanvasLayout = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
      <Suspense fallback={null}>
        <spotLight position={[0, 1, 7]} />
        <Rock />
      </Suspense>
    </Canvas>
  );
};

export default CanvasLayout;
