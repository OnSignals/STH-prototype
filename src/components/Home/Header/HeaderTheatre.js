/** @jsxImportSource @emotion/react */

import { Actions } from '@/styles/mixins/Interaction';
import { css, Global as GlobalStyles } from '@emotion/react';

function Header() {
    return (
        <>
            <GlobalStyles styles={styles.global} />

            <header css={styles.wrapper}>
                <h2 css={styles.title}>Schauspiel</h2>
            </header>
        </>
    );
}

export { Header };

const styles = {
    global: css`
        :root {
            --Header--height: 4rem;
        }
    `,

    wrapper: css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 100;

        display: flex;
        justify-content: center;
        align-items: center;
        height: var(--Header--height);
        margin: 0 var(--Sidebar--width) 0 0;

        /* border: 1px solid blue; */

        &::after {
            content: ' ';

            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            z-index: 0;

            display: block;
            height: calc(1.5 * var(--Header--height));
            margin: 0 0 3vw;

            background-image: linear-gradient(
                to bottom,
                hsl(0, 0%, 100%) 0%,
                hsla(0, 0%, 100%, 0.987) 8.1%,
                hsla(0, 0%, 100%, 0.951) 15.5%,
                hsla(0, 0%, 100%, 0.896) 22.5%,
                hsla(0, 0%, 100%, 0.825) 29%,
                hsla(0, 0%, 100%, 0.741) 35.3%,
                hsla(0, 0%, 100%, 0.648) 41.2%,
                hsla(0, 0%, 100%, 0.55) 47.1%,
                hsla(0, 0%, 100%, 0.45) 52.9%,
                hsla(0, 0%, 100%, 0.352) 58.8%,
                hsla(0, 0%, 100%, 0.259) 64.7%,
                hsla(0, 0%, 100%, 0.175) 71%,
                hsla(0, 0%, 100%, 0.104) 77.5%,
                hsla(0, 0%, 100%, 0.049) 84.5%,
                hsla(0, 0%, 100%, 0.013) 91.9%,
                hsla(0, 0%, 100%, 0) 100%
            );

            ${Actions.none}
        }

        [data-section='staatsoper'] & {
            margin: 0 0 0 var(--Sidebar--width);
        }
    `,

    title: css`
        position: relative;
        z-index: 10;

        display: block;
        margin: 0 auto;

        font-size: var(--type--scale--4);
        line-height: 0.7;
        font-weight: normal;
        font-variation-settings: 'wght' 680, 'ital' 0, 'opsz' 50;
        text-align: center;
        letter-spacing: -0.04em;

        transform: translate(0, 0.1em);
    `,
};
