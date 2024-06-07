/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';
import { create } from 'zustand';

import { Visual } from '../../Visual/Visual';
import { Posts } from './Posts';

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
                <Posts />
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
        overflow: hidden;

        background-image: linear-gradient(180deg, #fff 0%, #666 100%);
        /* border: 1px solid red; */
    `,
};
