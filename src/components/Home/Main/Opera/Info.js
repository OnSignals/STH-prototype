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

function Info({ info }) {
    return !info ? null : (
        <motion.div initial={VARIANTS.initial} animate={VARIANTS.animate} exit={VARIANTS.exit} css={styles.wrapper}>
            {info.map((line, i) => (
                <p css={styles.line} key={i}>
                    {line}
                </p>
            ))}
        </motion.div>
    );
}

export { Info };

const styles = {
    wrapper: css`
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;

        margin: 1vw;

        text-align: center;
        text-shadow: 0 0 5vw rgba(0, 0, 0, 0.2);
    `,

    line: css`
        margin: 0;

        font-family: var(--type--family--ultra);

        font-size: 5vw;
        line-height: 0.85;
        font-weight: normal;
        font-variation-settings: 'wght' 400, 'slnt' 0, 'CNTR' 100;
        letter-spacing: -0.02em;
        text-align: left;
        color: #fff;

        &:nth-child(2) {
            margin-left: 2em;
        }
    `,
};
