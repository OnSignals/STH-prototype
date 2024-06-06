/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';

function Sidebar() {
    return (
        <>
            <GlobalStyles styles={styles.global} />
            <aside css={styles.wrapper}>Sidebar</aside>;
        </>
    );
}

export { Sidebar };

const styles = {
    global: css`
        :root {
            --Sidebar--width: 15vw;
        }
    `,

    wrapper: css`
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;

        width: var(--Sidebar--width);

        border: 1px solid blue;
    `,
};
