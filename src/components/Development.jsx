import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei"; 
import DevDesign from './DevDesign';
import styled from 'styled-components';

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 500px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Development = () => {
  
  return (
    <>
    <Canvas  camera={{ position: [0, 0, 10] }}>
        <Stage environment="city" intensity={0.6}>
            <DevDesign />
        </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
    <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  )
}

export default Development
