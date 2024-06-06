/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

function Title() {
    return <h1 css={styles.title}>Home</h1>;
}

export { Title };

const styles = {
    title: css`
        font-size: 4em;
        color: red;
    `,
};
