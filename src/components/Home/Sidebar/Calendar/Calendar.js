/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Header } from './Header';
import { Posts } from './Posts';
import { Footer } from './Footer';

function Calendar() {
    return (
        <div css={styles.wrapper}>
            <Header />
            <Posts />
            <Footer />
        </div>
    );
}

export { Calendar };

const styles = {
    wrapper: css`
        position: relative;

        flex-grow: 1;
        flex-shrink: 1;
        height: 10vw;
        margin: 0;

        border-bottom: 1px solid #000;
    `,
};
