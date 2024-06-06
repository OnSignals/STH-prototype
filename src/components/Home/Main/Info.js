/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';

import { posts } from '@/data/posts';
import { useScrollIndex } from './Main';
import { useShallow } from 'zustand/react/shallow';
import { Actions } from '@/styles/mixins/Interaction';
import { AnimatePresence, motion } from 'framer-motion';

const VARIANTS = {
    wrapper: {
        initial: {},
        animate: {},
        exit: {},
    },
};

function Info() {
    const { currentIndex } = useScrollIndex(useShallow((state) => ({ currentIndex: state.currentIndex })));

    return (
        <>
            <div css={styles.wrapper}>
                <GlobalStyles styles={styles.global} />

                <AnimatePresence mode="wait">
                    {posts.map(
                        (post, i) =>
                            currentIndex === i && (
                                <motion.article
                                    initial={VARIANTS.wrapper.initial}
                                    animate={VARIANTS.wrapper.animate}
                                    exit={VARIANTS.wrapper.exit}
                                    transition={{ type: 'tween', duration: 1 }}
                                    css={styles.post}
                                    key={`Post-${i}`}
                                >
                                    <Title title={post.title} />
                                </motion.article>
                            )
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

function Title({ title }) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            css={styles.title}
        >
            {title}
        </motion.h2>
    );
}

export { Info };

const styles = {
    global: css`
        :root {
        }
    `,

    wrapper: css`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10;

        ${Actions.none}
    `,

    post: css`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    `,

    title: css`
        margin: 0;

        font-size: 10vw;
        font-weight: normal;
        color: #fff;
    `,
};
