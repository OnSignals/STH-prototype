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

        [data-id='2'] & {
            font-size: 5vw;
            line-height: 0.75;
            font-weight: normal;
            font-variation-settings: 'wght' 1000, 'ital' 0, 'opsz' 60;
            letter-spacing: -0em;
            color: #f72a57;

            &:nth-child(1) {
            }
        }
    `,
};
