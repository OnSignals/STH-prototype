/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

function Links() {
    return (
        <div css={styles.wrapper}>
            <span css={styles.item}>Ihr Besuch</span>
            <span css={styles.item}>Mediathek</span>
            <span css={styles.item}>Service</span>
            <span css={styles.item}>Über uns</span>
        </div>
    );
}

export { Links };

const styles = {
    global: css`
        :root {
            --Sidebar--width: 20vw;
        }
    `,

    wrapper: css`
        flex-grow: 0;
        flex-shrink: 0;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    `,

    item: css`
        display: block;
        width: 100%;
        padding: 1vw 1vw;

        font-size: var(--type--scale---1);
        line-height: 0.8;
        font-weight: normal;
        font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 20;
        text-align: center;
        letter-spacing: -0.04em;

        border-bottom: 1px solid currentColor;

        &:nth-child(1) {
        }

        &:nth-child(2) {
        }

        &:nth-child(3) {
            width: 50%;

            border-right: 1px solid currentColor;
            border-bottom: 0;
        }
        &:nth-child(4) {
            width: 50%;
            border-bottom: 0;
        }
    `,
};
