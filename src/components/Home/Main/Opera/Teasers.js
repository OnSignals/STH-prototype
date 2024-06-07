/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';

import { postsOpera } from '@/data/posts';
import { useScrollIndex } from '../Main';
import { useShallow } from 'zustand/react/shallow';
import { Actions } from '@/styles/mixins/Interaction';
import { AnimatePresence, motion } from 'framer-motion';
import { Title } from '../Theatre/Title';
import { Dates } from '../Dates';
import { Info } from '../Theatre/Info';
import { Tickets } from '../Tickets';
import { Shape } from '../Theatre/Shapes';
import { useEffect, useRef } from 'react';
import { clamp } from 'three/src/math/MathUtils';

function Teasers() {
    const { currentIndex } = useScrollIndex(useShallow((state) => ({ currentIndex: state.currentIndex })));

    return (
        <>
            <GlobalStyles styles={styles.global} />

            <section css={styles.wrapper}>
                <Scroller>
                    {postsOpera.map((teaser, i) => (
                        <Teaser teaser={teaser} key={i} />
                    ))}
                </Scroller>
            </section>
        </>
    );
}

function Scroller({ children }) {
    const scrollerRef = useRef();
    const currentIndexRef = useRef(0);

    const { currentIndex, setCurrentIndex } = useScrollIndex(
        useShallow((state) => ({ currentIndex: state.currentIndex, setCurrentIndex: state.setCurrentIndex }))
    );

    useEffect(() => {
        let frame;
        function onFrame() {
            if (!scrollerRef.current) return;

            currentIndexRef.current = clamp(
                Math.floor(
                    (scrollerRef.current.scrollTop / (scrollerRef.current.scrollHeight - window.innerHeight)) *
                        postsOpera.length
                ),
                0,
                postsOpera.length - 1
            );

            console.log(currentIndexRef.current);

            if (currentIndexRef.current !== currentIndex) setCurrentIndex(currentIndexRef.current);

            frame = requestAnimationFrame(onFrame);
        }

        frame = requestAnimationFrame(onFrame);

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [setCurrentIndex, currentIndex]);

    return (
        <div css={styles.scroller} ref={scrollerRef}>
            {children}
        </div>
    );
}

function Teaser({ teaser }) {
    return (
        <article css={styles.post}>
            {teaser?.video && <video playsInline autoPlay muted loop css={styles.video} src={teaser.video}></video>}
        </article>
    );
}

export { Teasers };

const styles = {
    global: css`
        :root {
        }
    `,

    wrapper: css`
        display: contents;
    `,

    scroller: css`
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    `,

    post: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        margin: 0;

        ${Actions.none}
    `,

    video: css`
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    `,
};
