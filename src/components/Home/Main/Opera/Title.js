/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';

import { AnimatePresence, motion } from 'framer-motion';

const VARIANTS = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            type: 'tween',

            duration: 0.5,
        },
    },
};

function Title({ title }) {
    return (
        <motion.h2 initial={VARIANTS.initial} animate={VARIANTS.animate} exit={VARIANTS.exit} css={styles.title}>
            {title}
        </motion.h2>
    );
}

export { Title };

const styles = {
    title: css`
        margin: 0 5vw;

        font-family: var(--type--family--ultra);
        font-size: 10vw;
        font-weight: normal;
        font-variation-settings: 'wght' 200, 'slnt' 0, 'CNTR' 100;
        text-align: center;

        color: #fff;

        text-shadow: 0 0 8vw rgba(0, 0, 0, 0.2);

        [data-id='0'] & {
            font-size: 15vw;
            line-height: 0.75;
            font-weight: normal;
            font-variation-settings: 'wght' 300, 'slnt' 0, 'CNTR' 100;
            letter-spacing: -0.04em;
        }

        [data-id='1'] & {
            width: 5em;
            margin: 0 auto;
            font-size: 11vw;
            line-height: 0.8;
            font-weight: normal;
            font-variation-settings: 'wght' 300, 'slnt' 0, 'CNTR' 100;

            letter-spacing: -0.04em;
        }

        [data-id='2'] & {
            font-size: 15vw;
            line-height: 0.75;
            font-weight: normal;
            font-variation-settings: 'wght' 300, 'slnt' 0, 'CNTR' 100;
            letter-spacing: -0.04em;
            text-indent: 1em;
        }
    `,
};
