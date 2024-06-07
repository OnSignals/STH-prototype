/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';

import { posts } from '@/data/posts';
import { useScrollIndex } from './Main';
import { useShallow } from 'zustand/react/shallow';
import { Actions } from '@/styles/mixins/Interaction';
import { AnimatePresence, motion } from 'framer-motion';
import { Title } from './Title';
import { Dates } from './Dates';
import { Info } from './Info';
import { Tickets } from './Tickets';

const VARIANTS = {
    wrapper: {
        initial: {},
        animate: {},
        exit: {},
    },
};

function Posts() {
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
                                    data-id={post.id}
                                >
                                    <Title title={post.title} />
                                    <Info info={post?.info} />

                                    <Dates dates={post.dates} />
                                    <Tickets hasTickets={post?.hasTickets || true} />
                                </motion.article>
                            )
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export { Posts };

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

        ${Actions.none}/* mix-blend-mode: difference; */
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
};
