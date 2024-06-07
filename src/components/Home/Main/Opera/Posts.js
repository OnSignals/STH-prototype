/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';

import { postsOpera } from '@/data/posts';
import { useScrollIndex } from '../Main';
import { useShallow } from 'zustand/react/shallow';
import { Actions } from '@/styles/mixins/Interaction';
import { AnimatePresence, motion } from 'framer-motion';
import { Title } from './Title';
import { Dates } from '../Dates';
import { Info } from './Info';
import { Tickets } from '../Tickets';
import { Shape } from '../Theatre/Shapes';

const VARIANTS = {
    wrapper: {
        initial: {},
        animate: {},
        exit: {},
    },

    shape: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
};

function Posts() {
    const { currentIndex } = useScrollIndex(useShallow((state) => ({ currentIndex: state.currentIndex })));

    return (
        <>
            <GlobalStyles styles={styles.global} />

            <AnimatePresence mode="wait">
                {postsOpera.map(
                    (post, i) =>
                        currentIndex === i && (
                            <motion.div
                                initial={VARIANTS.wrapper.initial}
                                animate={VARIANTS.wrapper.animate}
                                exit={VARIANTS.wrapper.exit}
                                transition={{ type: 'tween', duration: 1 }}
                                css={styles.wrapper}
                                key={`Post-${i}`}
                                data-id={post.id}
                            >
                                <motion.article css={styles.post}>
                                    <Title title={post.title} />
                                    <Info info={post?.info} />

                                    <Dates dates={post.dates} />
                                    <Tickets hasTickets={post?.hasTickets || true} />
                                </motion.article>

                                <motion.div
                                    initial={VARIANTS.shape.initial}
                                    animate={VARIANTS.shape.animate}
                                    exit={VARIANTS.shape.exit}
                                    transition={{ type: 'tween', duration: 0.4 }}
                                    css={styles.shape}
                                    key={`Shape-${i}`}
                                    data-id={post.id}
                                >
                                    <Shape type={i === 0 ? 'f' : i === 1 ? 'g' : 'e'} />
                                </motion.div>
                            </motion.div>
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
        display: contents;
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
            mix-blend-mode: overlay;

            & > svg {
                & [data-fill] {
                    fill: #8debeb;
                }
            }
        }

        &[data-id='1'] {
            mix-blend-mode: overlay;

            & > svg {
                & [data-fill] {
                    fill: #fff;
                }
            }
        }

        &[data-id='2'] {
            mix-blend-mode: overlay;

            & > svg {
                & [data-fill] {
                    fill: #cebbf0;
                }
            }
        }
    `,
};
