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
import { Shape } from './Shapes';

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
            <GlobalStyles styles={styles.global} />

            <AnimatePresence mode="wait">
                {posts.map(
                    (post, i) =>
                        currentIndex === i && (
                            <>
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

                                <div css={styles.shape} data-id={post.id}>
                                    <Shape type={i === 0 ? 'c' : i === 1 ? 'a' : 'd'} />
                                </div>
                            </>
                        )
                )}
            </AnimatePresence>
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

        ${Actions.none}
    `,

    shape: css`
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;

        width: 100%;
        height: 100%;

        ${Actions.none}

        & > svg {
            display: block;
            width: 100%;
            height: 100%;
            margin: 0;
            object-fit: cover;

            & [data-fill] {
                fill: #fff;
            }
        }

        &[data-id='0'] {
            mix-blend-mode: exclusion;

            & > svg {
                & [data-fill] {
                    fill: #fff;
                }
            }
        }

        &[data-id='1'] {
            mix-blend-mode: hard-light;

            & > svg {
                & [data-fill] {
                    fill: #ff640a;
                }
            }
        }

        &[data-id='2'] {
            mix-blend-mode: normal;

            & > svg {
                & [data-fill] {
                    fill: #f72a57;
                }
            }
        }
    `,
};
