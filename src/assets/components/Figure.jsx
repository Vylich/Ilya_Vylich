import { Cylinder, OrbitControls, Sphere, Torus, Tube } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

function Figure() {
	return (
		<div className='viz'>
			<Canvas style={{ height: '100vh', minWidth: '50vh' }}>
				<OrbitControls />
				<directionalLight />
				<pointLight
					position={(-30, 0, -5)}
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
  const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(6, 0, 0), new THREE.Vector3(0, -40, 0), new THREE.Vector3(-6, 0, 0))
	return (
		<group>
			<Sphere position={[6,0,0]} args={[1, 100, 100]}>
				<meshStandardMaterial
					color='#4b4b4b'
					emissive='#4b4b4b'
					emissiveIntensity={0.5}
					roughness={0.5}
				/>
			</Sphere>
			<Sphere position={[-6,0,0]} args={[1, 16, 32]} >
				<meshStandardMaterial
					color='#4b4b4b'
					emissive='#4b4b4b'
					emissiveIntensity={0.5}
					roughness={0.5}
				/>
			</Sphere>
      <Tube position={[0,0,0]} args={[curve]}>
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
