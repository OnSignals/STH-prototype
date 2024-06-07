/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useVideoTexture, useScroll } from '@react-three/drei';
import { useFrame, useThree, extend } from '@react-three/fiber';
import { useState, useEffect, useRef, useMemo } from 'react';
import { DoubleSide } from 'three';
import { useShallow } from 'zustand/react/shallow';
import { useControls } from 'leva';
import { postsTheatre } from '@/data/posts';
import { CustomMaterial } from './CustomMaterial';
import { clamp, easing, lerp } from '@superstructure.net/utils';

extend({ CustomMaterial });

const Video = ({ index = 0, currentIndex = 0 }) => {
    console.log('currentIndex', currentIndex, postsTheatre.length);

    // const { scale, displacementScale } = useControls({
    //     scale: {
    //         value: 1.5,
    //         min: 0.2,
    //         max: 4,
    //         step: 0.1,
    //     },
    //     displacementScale: {
    //         value: -1,
    //         min: -4,
    //         max: 4,
    //         step: 0.1,
    //     },
    // });

    const [scale, _] = useState(1.5);
    const [displacementScale, __] = useState(-0.7);

    const scrollData = useScroll();
    const { pointer } = useThree();

    const videoUrlColor = useMemo(() => postsTheatre[index].video.color, [index]);
    const videoUrlDepth = useMemo(() => postsTheatre[index].video.depth, [index]);
    const videoRatio = useMemo(() => postsTheatre[index].video.ratio, [index]);

    const positionRef = useRef();
    const rotationRef = useRef();
    const pointerRef = useRef();
    const meshRef = useRef();

    const colorTexture = useVideoTexture(videoUrlColor);
    const depthTexture = useVideoTexture(videoUrlDepth);

    useFrame(({ clock }) => {
        if (rotationRef.current) {
            rotationRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.2;
            rotationRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
            rotationRef.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.2;
        }

        if (meshRef.current) {
            meshRef.current.material.uniforms.colorTexture.value = colorTexture;
            meshRef.current.material.uniforms.depthTexture.value = depthTexture;
            meshRef.current.material.uniforms.displacementScale.value = displacementScale;
        }

        const distance = scrollData.offset * (postsTheatre.length - 1) - index;

        if (index === 1 && Math.abs(distance <= 1)) {
        }

        if (positionRef.current) {
            positionRef.current.position.z = distance * 10;
            // meshRef.current.material.opacity = 1 - Math.abs(distance);
        }

        if (pointerRef.current) {
            pointerRef.current.rotation.y = lerp(pointerRef.current.rotation.y, pointer.x * 0.6, 0.02);

            pointerRef.current.rotation.x = lerp(pointerRef.current.rotation.x, pointer.y * -0.6, 0.02);
        }
    });

    // sync two videos
    useEffect(() => {
        let interval;

        function onInterval() {
            if (!colorTexture?.source?.data || !depthTexture?.source?.data) return;

            depthTexture.source.data.currentTime = colorTexture.source.data.currentTime;
        }

        clearInterval(interval);
        interval = setInterval(onInterval, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [colorTexture, depthTexture]);

    return (
        <group ref={positionRef}>
            <group ref={rotationRef}>
                <group ref={pointerRef}>
                    <group scale={scale}>
                        <group scale={4} rotation={[-0.2, 0.4, 0.2]}>
                            <group position={[0, 0, -displacementScale * 0.5]}>
                                <mesh ref={meshRef}>
                                    <planeGeometry args={[1, 1 / videoRatio, 100, 100]} />
                                    {/* <meshStandardMaterial
                color={"white"}
                map={texture}
                side={DoubleSide}
              /> */}

                                    <customMaterial key={CustomMaterial.key} side={DoubleSide} />
                                </mesh>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

export { Video };
