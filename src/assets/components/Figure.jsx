import { OrbitControls, Sphere, Tube } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

function Figure() {
	return (
		<div className='viz'>
			<Canvas style={{ height: '100vh', minWidth: '50vh' }}>
				<OrbitControls />
				<directionalLight />
				<pointLight
					position={(1, 1, 3)}
					power={10.0}
					color='#ffffff'
					intensity={10}
				/>
        <GroupFigure />
			</Canvas>
		</div>
	)
}

function GroupFigure() {
  const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(2.5, 7.5, 0), new THREE.Vector3(0, -10, 0), new THREE.Vector3(-2.5, 7.5, 0))
	return (
		<group>
			<Sphere position={[1,2,0]} args={[1, 100, 100]} scale={[0.4, 0.4, 0.4]}>
				<meshStandardMaterial
					color='#4b4b4b'
					emissive='#4b4b4b'
					emissiveIntensity={0.5}
					roughness={0.5}
				/>
			</Sphere>
			<Sphere position={[-1,2,0]} args={[1, 16, 32]} scale={[0.4, 0.4, 0.4]}>
				<meshStandardMaterial
					color='#4b4b4b'
					emissive='#4b4b4b'
					emissiveIntensity={0.5}
					roughness={0.5}
				/>
			</Sphere>
      <Tube position={[0,-1,0]} args={[curve, 100, 1, 20, false]} scale={[0.4, 0.4, 0.4]}>
      <meshStandardMaterial
					color='#4b4b4b'
					emissive='#4b4b4b'
					emissiveIntensity={0.5}
					roughness={0.5}
				/>
      </Tube>
		</group>
	)
}

export default Figure
