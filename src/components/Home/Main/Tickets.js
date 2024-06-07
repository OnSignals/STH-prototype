/** @jsxImportSource @emotion/react */

import { Actions } from '@/styles/mixins/Interaction';
import { MediaQueries } from '@/styles/mixins/MediaQueries';
import { css } from '@emotion/react';

import { AnimatePresence, motion } from 'framer-motion';

const VARIANTS = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,

        transition: {
            type: 'tween',
            ease: [0.16, 1, 0.3, 1],
            duration: 0.4,
            delay: 0.5,
        },
    },
    exit: {
        opacity: 0,
        y: 100,
        transition: {
            type: 'tween',
            ease: [0.16, 1, 0.3, 1],
            duration: 0.4,
        },
    },
};

function Tickets({ hasTickets }) {
    return !hasTickets ? null : (
        <motion.div initial={VARIANTS.initial} animate={VARIANTS.animate} exit={VARIANTS.exit} css={styles.wrapper}>
            <a css={styles.button}>Karten</a>
        </motion.div>
    );
}

export { Tickets };

const styles = {
    wrapper: css`
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 100;

        margin: 1vw 2.5vw;
    `,

    button: css`
        display: block;
        padding: 0.25em 0.2em 0.1em 0.2em;

        list-style-type: none;

        font-size: var(--type--scale--2);
        line-height: 0.7;
        font-weight: normal;
        font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 40;
        text-align: center;

        background-color: #fff;
        border: 1px solid currentColor;
        border-radius: 0.1em;

        ${Actions.auto}

        cursor: pointer;

        @media ${MediaQueries.hover} {
            &:hover {
                color: #fff;
                background-color: #000;
            }
        }
    `,
};
