/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';
import { create } from 'zustand';

import { Visual } from '../../Visual/Visual';
import { Info } from './Info';

const useScrollIndex = create((set) => ({
    currentIndex: 0,

    setCurrentIndex: (currentIndex) => set({ currentIndex }),
}));

function Main() {
    return (
        <>
            <GlobalStyles styles={styles.global} />
            <main css={styles.wrapper}>
                <Visual />
                <Info />
            </main>
        </>
    );
}

export { Main, useScrollIndex };

const styles = {
    global: css`
        :root {
        }
    `,

    wrapper: css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        margin: 0 var(--Sidebar--width) 0 0;

        background-image: linear-gradient(180deg, white 0%, black 100%);
        border: 1px solid red;
    `,
};
