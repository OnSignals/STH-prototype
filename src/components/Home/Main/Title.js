/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';

import { AnimatePresence, motion } from 'framer-motion';

const VARIANTS = {
    initial: {
        opacity: 0,
        scaleY: 0.5,
        scaleX: 2,
    },
    animate: {
        opacity: 1,
        scaleY: 1,
        scaleX: 1,
        transition: {
            type: 'tween',
            ease: [0.16, 1, 0.3, 1],
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        scaleY: 0.5,
        scaleX: 2,
        transition: {
            type: 'tween',
            ease: 'linear',
            duration: 0.15,
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
        margin: 0;

        font-size: 10vw;
        font-weight: normal;
        font-variation-settings: 'wght' 460, 'ital' 0, 'opsz' 60;
        text-align: center;

        color: #fff;

        text-shadow: 0 0 8vw rgba(0, 0, 0, 0.2);

        [data-id='0'] & {
            font-size: 23vw;
            line-height: 0.6;
            font-weight: normal;
            font-variation-settings: 'wght' 460, 'ital' 0, 'opsz' 60;
            letter-spacing: -0.07em;
        }

        [data-id='1'] & {
            font-size: 28vw;
            line-height: 0.75;
            font-weight: normal;
            font-variation-settings: 'wght' 750, 'ital' 0, 'opsz' 60;
            letter-spacing: -0.07em;
        }

        [data-id='2'] & {
            font-size: 15vw;
            line-height: 0.9;
            font-weight: normal;
            font-variation-settings: 'wght' 1000, 'ital' 1, 'opsz' 60;
            letter-spacing: -0em;
            color: #f72a57;
        }
    `,
};
