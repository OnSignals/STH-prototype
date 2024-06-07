/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { button } from 'leva';

function Nav() {
    return (
        <div css={styles.wrapper}>
            <span css={[styles.button, styles.buttonAccount]}></span>

            <LanguageSwitch />

            <span css={[styles.button, styles.buttonNav]}></span>
        </div>
    );
}

function LanguageSwitch() {
    return (
        <span css={styles.LanguageSwitch.wrapper}>
            <span css={styles.LanguageSwitch.item}>DE</span>
            <span css={styles.LanguageSwitch.item}>EN</span>
        </span>
    );
}

export { Nav };

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
        align-items: center;
        width: 100%;
        padding: 0.5vw 1vw;

        border-bottom: 1px solid #000;
    `,

    button: css`
        flex-grow: 0;
        flex-shrink: 0;

        display: block;
        width: 2.5vw;
        height: 2.5vw;

        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
    `,

    buttonAccount: css`
        background-image: url(/images/icon--account.svg);
    `,

    buttonNav: css`
        background-image: url(/images/icon--nav.svg);
    `,

    LanguageSwitch: {
        wrapper: css`
            flex-grow: 0;
            flex-shrink: 0;
            display: flex;

            border: 1px solid currentColor;
            border-radius: 0.2vw;
        `,

        item: css`
            display: block;
            padding: 0.25em 0.35em 0.05em;
            font-size: var(--type--scale---1);
            line-height: 0.8;
            font-weight: normal;
            font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 15;
            text-align: center;
            letter-spacing: -0.04em;

            &:first-child {
                color: #fff;

                border-right: 1px solid #000;
                background-color: #000;
            }
        `,
    },
};
