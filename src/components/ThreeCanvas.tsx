import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Loader = () => {
  return (
    <Html center style={{ color: "#FFFFFF" }}>
      Loading...
    </Html>
  );
};

const Model = () => {
  const obj = useLoader(OBJLoader, "skull.OBJ");
  return <primitive object={obj} scale={0.6} position={[0, -1.5, 0]} />;
};

interface ThreeCanvasProps {
  appBarHeight: number;
}

export default function ThreeCanvas({ appBarHeight }: ThreeCanvasProps) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const StyledCanvas = styled(Canvas)`
    background-color: #333333;
    width: ${dimensions.width}px;
    height: ${dimensions.height - appBarHeight}px;
  `;

  return (
    <StyledCanvas
      style={{
        height: `${dimensions.height - appBarHeight}px`,
      }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls />
        <Model />
      </Suspense>
    </StyledCanvas>
  );
}
