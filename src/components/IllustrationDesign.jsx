import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei"; 
import Illustration from './Illustration'

const IllustrationDesign = () => {
  return (
    <>
    <Canvas>
    <Suspense fallback={null}>
    <Stage environment="city" intensity={0.6}>
        <Illustration />
    </Stage>
  <OrbitControls enableZoom={false} autoRotate/>
  </Suspense>
</Canvas>
</>
  )
}

export default IllustrationDesign
