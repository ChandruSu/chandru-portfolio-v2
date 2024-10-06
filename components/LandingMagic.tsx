import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import { lerp } from "three/src/math/MathUtils.js";

export function LandingAnimation() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <Content />
    </Canvas>
  );
}

function Content() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const meshRef = useRef<any>();
  const [hovered, setHover] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
      meshRef.current.rotation.z += delta;

      meshRef.current.scale.x = lerp(meshRef.current.scale.x, hovered ? 1.5 : 1, delta * 5);
      meshRef.current.scale.y = lerp(meshRef.current.scale.y, hovered ? 1.5 : 1, delta * 5);
      meshRef.current.scale.z = lerp(meshRef.current.scale.z, hovered ? 1.5 : 1, delta * 5);
    }
  });

  return (
    <mesh
      ref={meshRef}
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={theme == "light" ? "#008aff" : "white"} wireframe />
    </mesh>
  );
}
