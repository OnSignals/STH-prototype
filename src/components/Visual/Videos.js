/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState, useEffect, useRef, useMemo } from 'react';

import { useFrame } from '@react-three/fiber';

import { posts } from '@/data/posts';
import { Video } from './Video';
import { useScroll } from '@react-three/drei';
import { clamp } from '@superstructure.net/utils';
import { useScrollIndex } from '../Home/Main/Main';
import { useShallow } from 'zustand/react/shallow';

function Videos() {
    const scrollData = useScroll();

    const { currentIndex, setCurrentIndex } = useScrollIndex(
        useShallow((state) => ({
            currentIndex: state.currentIndex,
            setCurrentIndex: state.setCurrentIndex,
        }))
    );

    const currentIndexRef = useRef(0);

    useFrame(() => {
        currentIndexRef.current = clamp(Math.floor(scrollData.offset * posts.length), 0, posts.length - 1);

        if (currentIndexRef.current !== currentIndex) setCurrentIndex(currentIndexRef.current);
    });

    useEffect(() => {}, [currentIndex]);

    return Array(posts.length)
        .fill(0)
        .map((_, i) =>
            Math.abs(i - currentIndex) > 1 ? null : <Video index={i} currentIndex={currentIndex} key={i} />
        );
}

export { Videos };

const styles = {};
