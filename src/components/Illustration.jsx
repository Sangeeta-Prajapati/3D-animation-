/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 illustration.gltf --transform 
Files: illustration.gltf [1.97MB] > C:\Users\hp\Desktop\a_presentation\illustration-transformed.glb [181.31KB] (91%)
Author: m3org (https://sketchfab.com/m3org)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/a-presentation-be95c13d41104bffa84f815c6d6d4d53
Title: A Presentation
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/illustration-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[0, 0, 0.009]} scale={2.949} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} position={[0, 0, 0.009]} scale={2.949} />
    </group>
  )
}

useGLTF.preload('/illustration-transformed.glb')
