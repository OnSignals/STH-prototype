/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Button } from './StyleButton';
import { MediaQueries } from '@/styles/mixins/MediaQueries';

function Footer() {
    return (
        <footer css={styles.wrapper}>
            <a css={styles.button}>Alle Termine</a>
        </footer>
    );
}

export { Footer };

const styles = {
    wrapper: css`
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;

        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        padding: 0.75vw 1vw;

        background-color: #fff;
        border-top: 1px solid #000;
    `,

    button: css`
        ${Button}
    `,
};
