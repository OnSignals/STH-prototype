/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';
import { Title } from './Title';
import { Nav } from './Nav';
import { Calendar } from './Calendar/Calendar';
import { Links } from './Links';

function Sidebar() {
    return (
        <>
            <GlobalStyles styles={styles.global} />
            <aside css={styles.wrapper}>
                <Title />
                <Nav />
                <Calendar />

                <Links />
            </aside>
        </>
    );
}

export { Sidebar };

const styles = {
    global: css`
        :root {
            --Sidebar--width: 20vw;
        }
    `,

    wrapper: css`
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;

        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;

        width: var(--Sidebar--width);

        border-left: 1px solid #000;

        [data-section='staatsoper'] & {
            right: auto;
            left: 0;

            border-left: none;
            border-right: 1px solid #000;
        }
    `,
};
