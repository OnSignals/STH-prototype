/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Button } from './StyleButton';
import { useContext } from 'react';
import { SectionContext } from '@/contexts/Section';

function Header() {
    const section = useContext(SectionContext);

    return (
        <header css={styles.wrapper}>
            <h1 css={styles.title}>Spielplan</h1>
            <div css={styles.dateSelect}>Juni 24</div>

            <div css={styles.filter}>
                <a>{section === 'schauspiel' ? 'Schauspiel' : 'Staatsoper'}</a>
            </div>
        </header>
    );
}

export { Header };

const styles = {
    wrapper: css`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: 10;

        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
        padding: 1.25vw 1vw 0.75vw;

        background-color: #fff;
        border-bottom: 1px solid #000;
    `,

    title: css`
        margin: 0;

        display: block;
        width: 50%;
        margin: 0 auto;

        font-size: var(--type--scale---1);
        line-height: 0.8;
        font-weight: normal;
        font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 15;
        text-align: center;
        letter-spacing: -0.04em;
    `,

    dateSelect: css`
        position: relative;

        display: block;
        width: 50%;
        margin: 0;

        display: block;
        margin: 0 auto;
        padding: 0 1em;
        white-space: nowrap;

        font-size: var(--type--scale---1);
        line-height: 0.8;
        font-weight: normal;
        font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 15;
        text-align: center;
        letter-spacing: -0.04em;

        &::after,
        &::before {
            content: ' ';

            position: absolute;
            top: 0;
            bottom: 0;

            display: block;
            width: 1em;
            height: 1em;
            margin: auto 0;

            background-repeat: no-repeat;
            background-position: 100% center;
            background-size: contain;
            background-image: url(/images/icon--16--close.svg);
        }

        &::before {
            left: 0;

            display: block;
            width: 1em;
            height: 1em;

            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
            background-image: url(/images/icon--16--prev.svg);
        }

        &::after {
            right: 0;

            display: block;
            width: 1em;
            height: 1em;

            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
            background-image: url(/images/icon--16--next.svg);
        }
    `,

    filter: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 1vw 0 0;

        & > a {
            ${Button}

            padding-right: 1.5em;

            background-repeat: no-repeat;
            background-position: 100% center;
            background-size: contain;
            background-image: url(/images/icon--16--close.svg);
        }
    `,
};
