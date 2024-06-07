/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { AnimatePresence, motion } from 'framer-motion';

const VARIANTS = {
    initial: {
        opacity: 0,
        y: -100,
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
        y: -100,
        transition: {
            type: 'tween',
            ease: [0.16, 1, 0.3, 1],
            duration: 0.4,
        },
    },
};

function Dates({ dates }) {
    return !dates?.length ? null : (
        <motion.div initial={VARIANTS.initial} animate={VARIANTS.animate} exit={VARIANTS.exit} css={styles.wrapper}>
            <ul css={styles.items}>
                {dates.map((date, i) => (
                    <li css={styles.item} key={i}>
                        {date}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export { Dates };

const styles = {
    wrapper: css`
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;

        margin: 4vw 2.5vw;
    `,

    items: css`
        --border-radius: 0.1em;
        --border-width: 0.5px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0;
        padding: 0;

        list-style-type: none;

        font-size: var(--type--scale--2);
        line-height: 0.7;
        font-weight: normal;
        font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 40;

        filter: drop-shadow(calc(-1 * var(--border-width)) calc(-1 * var(--border-width)) 0 black)
            drop-shadow(var(--border-width) var(--border-width) 0 black)
            drop-shadow(calc(-1 * var(--border-width)) var(--border-width) 0 black)
            drop-shadow(var(--border-width) calc(-1 * var(--border-width)) 0 black);

        [data-section='staatsoper'] & {
            font-family: var(--type--family--ultra);
            font-variation-settings: 'wght' 300, 'slnt' 0, 'CNTR' 100;
        }
    `,

    item: css`
        display: block;
        margin: 0;
        padding: 0.25em 0.2em 0.1em 0.2em;

        background-color: #fff;

        &:nth-child(1) {
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }

        &:nth-child(2) {
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
        }

        &:nth-child(3) {
            border-radius: 0 0;
        }

        &:nth-child(4) {
            border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);
        }
    `,

    title: css`
        margin: 0;
    `,
};
