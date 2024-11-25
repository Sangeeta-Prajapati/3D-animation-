import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei"; 

import SocialMedia from './SocialMedia'; // Import the SocialMedia component

const SocialDesign = () => {
  return (
    <>
    <Canvas>
    <Suspense fallback={null}>
    <Stage environment="city" intensity={0.6}>
        <SocialMedia />
    </Stage>
  <OrbitControls enableZoom={false} autoRotate/>
  </Suspense>
</Canvas>
</>
  )
}

export default SocialDesign
