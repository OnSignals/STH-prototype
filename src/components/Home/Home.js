/** @jsxImportSource @emotion/react */

import { Title } from '@/components/Global/Title';
import { Visual } from '../Visual/Visual';
import { css } from '@emotion/react';
import { Sidebar } from './Sidebar';
import { Main } from './Main/Main';

function Home({ data }) {
    return (
        <>
            <Main />
            <Sidebar />
        </>
    );
}

export { Home };

const styles = {
    main: css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10;
    `,

    aside: css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10;
    `,
};
