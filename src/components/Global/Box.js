/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { motion } from 'framer-motion';

function Box() {
    return (
        <motion.div
            initial={{ x: 0 }}
            animate={{ x: 200 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
            css={styles.box}
        >
            A
        </motion.div>
    );
}

export { Box };

const styles = {
    box: css`
        width: 100px;
        height: 100px;
        background-color: red;
    `,
};
