import * as THREE from 'three'
import { Suspense, useCallback, useMemo, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import img from '../img/partical1.png'

function Points() {
	const imgTex = useLoader(THREE.TextureLoader, img);
	const bufferRef = useRef();
	let t = 0;
	let f = 0.002;
	let a = 4;

	const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [t, f, a])

	const count = 100 ;
	const sep = 10;
	let positions = useMemo(() => {
		let positions = [];
		for(let xi = 0; xi < count; xi++) {
			for(let zi = 0; zi < count; zi++) {
				let x = sep * (xi - count / 2);
				let z = sep * (zi - count / 2);
				let y = graph(x, z);
				positions.push(x, y, z);
			}
		}

		return new Float32Array(positions);
	},[count, sep, graph]);

	useFrame(() => {
    t += 5

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  })

	return (
		<>
		<points>
			<bufferGeometry attach="geometry">
				<bufferAttribute
					ref={bufferRef}
					attach='attributes-position'
					array={positions}
					count={positions.length / 3}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial
				attach='material'
				map={imgTex}
				color={0x4b4b4b}
				size={0.5}
				sizeAttenuation
				transparent={false}
				alphaTest={0.5}
				opacity={1}
			/>
		</points>

	</>

	)
}

function AnimationCanvas() {
	return (
		<Canvas
			camera={{ position: [0, 100, 0], fov: 100 }}
		>
			<Suspense fallback={null}>
				<Points/>
			</Suspense>
		</Canvas>
	)
}

function Background() {
	return (
		<div id='background'>
			<Suspense fallback={<div>Loading...</div>}>
				<AnimationCanvas />
			</Suspense>
		</div>
	)
}

export default Background
