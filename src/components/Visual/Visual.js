/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState, useEffect, useRef, useMemo } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';

import { posts } from '@/data/posts';
import { ScrollControls, useScroll } from '@react-three/drei';
import { Videos } from './Videos';

function Visual({}) {
    return (
        <div css={styles.wrapper}>
            <Canvas>
                <ScrollControls pages={posts.length} damping={0}>
                    <Videos />
                </ScrollControls>
            </Canvas>
        </div>
    );
}

export { Visual };

const styles = {
    wrapper: css`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 0;
    `,
};
