/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

function Title() {
    return (
        <div css={styles.wrapper}>
            <h1 css={styles.title}>Die Staatstheater Hannover</h1>
        </div>
    );
}

export { Title };

const styles = {
    global: css`
        :root {
            --Sidebar--width: 20vw;
        }
    `,

    wrapper: css`
        flex-grow: 0;
        flex-shrink: 0;
        padding: 0.75vw 1vw;

        border-bottom: 1px solid #000;
    `,

    title: css`
        position: relative;
        top: 0.1em;

        margin: 0;

        display: block;
        margin: 0 auto;

        font-size: var(--type--scale--2);
        line-height: 0.8;
        font-weight: normal;
        font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 40;
        text-align: center;
        letter-spacing: -0.04em;
    `,
};
